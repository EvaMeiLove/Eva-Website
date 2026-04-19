// Server Component — запускается на сервере при каждом деплое
// Автоматически подтягивает название, артиста и обложку из YouTube oEmbed API
// Не требует API-ключей — YouTube oEmbed полностью бесплатный и открытый

import YouTubeMusicPlayer from "./YouTubeMusicPlayer";

// Тип одного трека из конфига
interface ConfigTrack {
  id: string;
  youtubeId: string;
}

// Тип ответа YouTube oEmbed API
interface OEmbedResponse {
  title: string;        // Например: "La fessée"
  author_name: string;  // Например: "Claire Laffut"
  thumbnail_url: string;
}

// Тип трека с заполненными метаданными — передаётся в клиентский компонент
export interface TrackWithMeta {
  id: string;
  youtubeId: string;
  title: string;
  artist: string;
  // Обложка HD (всегда доступна без API)
  thumbnail: string;
}

// Запрашиваем метаданные трека из YouTube oEmbed
// next: { revalidate: 86400 } — кешируем на 24 часа, не запрашиваем при каждом посетителе
async function fetchYouTubeMeta(videoId: string): Promise<OEmbedResponse | null> {
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return null;
    return res.json() as Promise<OEmbedResponse>;
  } catch {
    return null;
  }
}

export default async function YouTubeMusicSection({
  tracks,
}: {
  tracks: ConfigTrack[];
}) {
  if (!tracks.length) return null;

  // Параллельно получаем метаданные для всех треков
  const tracksWithMeta: TrackWithMeta[] = await Promise.all(
    tracks.map(async (track) => {
      const meta = await fetchYouTubeMeta(track.youtubeId);
      return {
        id: track.id,
        youtubeId: track.youtubeId,
        // Если oEmbed вернул данные — используем их, иначе — заглушки
        title: meta?.title ?? "Неизвестный трек",
        artist: meta?.author_name ?? "Неизвестный артист",
        // hqdefault.jpg — всегда доступна, хорошее качество 480×360
        thumbnail: `https://img.youtube.com/vi/${track.youtubeId}/hqdefault.jpg`,
      };
    })
  );

  // Передаём готовые данные в клиентский компонент
  return <YouTubeMusicPlayer tracks={tracksWithMeta} />;
}
