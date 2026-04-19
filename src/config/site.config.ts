// ============================================================
// 🌸 ГЛАВНЫЙ ФАЙЛ НАСТРОЕК ТВОЕГО САЙТА 🌸
// ============================================================
// Здесь меняешь ВСЁ: имя, ссылки, фото, музыку, видео
// Просто редактируй этот файл — сайт обновится автоматически!
// ============================================================

export const siteConfig = {
  // ──────────────────────────────────────
  // 👤 ЛИЧНАЯ ИНФОРМАЦИЯ
  // ──────────────────────────────────────
  profile: {
    // Твоё имя или псевдоним (отображается крупно вверху)
    name: "Твоё Имя",

    // Никнейм (отображается под именем)
    nickname: "@your_nickname",

    // Короткий слоган / подзаголовок
    tagline: "✨ just a girl with big dreams ✨",

    // Описание о себе (можно использовать эмодзи)
    bio: "Привет! Добро пожаловать на мою страничку 🌸 Здесь я делюсь тем, что мне нравится — музыкой, фото и маленькими радостями жизни 💕",

    // Путь к фото аватара (положи фото в папку public/images/ и укажи имя файла)
    // Например: "/images/avatar.jpg"
    // Если нет фото — оставь пустую строку ""
    avatar: "/images/avatar.jpg",

    // Маленькие бейджи-теги под bio (можно добавить/убрать любые)
    badges: ["🌸 Dreamer", "🎨 Creative", "🎵 Music lover", "📸 Photographer"],

    // SEO: заголовок вкладки браузера
    siteTitle: "Твоё Имя — Personal Page",

    // SEO: описание для поисковиков
    siteDescription: "Персональная страничка — мои фото, музыка и ссылки",
  },

  // ──────────────────────────────────────
  // 🔗 ССЫЛКИ НА СОЦСЕТИ И ПЛАТФОРМЫ
  // ──────────────────────────────────────
  // icon — название иконки из lucide-react (instagram, send, youtube, twitter, music, globe, heart, star, link, etc.)
  // color — цвет карточки при наведении (HEX или любой CSS цвет)
  links: [
    {
      id: "instagram",
      label: "Instagram",
      // Замени YOUR_USERNAME на свой ник
      url: "https://instagram.com/YOUR_USERNAME",
      // Иконки: instagram | send | youtube | twitter | music | globe | link | heart | star | camera | coffee
      icon: "instagram",
      color: "#E1306C",
      username: "@YOUR_USERNAME",
      // Описание под ссылкой (опционально)
      description: "Мои фото и истории",
    },
    {
      id: "telegram",
      label: "Telegram",
      url: "https://t.me/YOUR_USERNAME",
      icon: "send",
      color: "#2AABEE",
      username: "@YOUR_USERNAME",
      description: "Пиши мне",
    },
    {
      id: "tiktok",
      label: "TikTok",
      url: "https://tiktok.com/@YOUR_USERNAME",
      icon: "music",
      color: "#000000",
      username: "@YOUR_USERNAME",
      description: "Мои видео",
    },
    {
      id: "youtube",
      label: "YouTube",
      url: "https://youtube.com/@YOUR_USERNAME",
      icon: "youtube",
      color: "#FF0000",
      username: "@YOUR_USERNAME",
      description: "Мой канал",
    },
    // ── Добавь новую ссылку, скопировав блок выше ──
    // {
    //   id: "uniqueid",
    //   label: "Название",
    //   url: "https://...",
    //   icon: "globe",
    //   color: "#розовый_цвет",
    //   username: "@ник",
    //   description: "Описание",
    // },
  ],

  // ──────────────────────────────────────
  // 🖼️ ГАЛЕРЕЯ ФОТОГРАФИЙ
  // ──────────────────────────────────────
  // Положи фото в папку public/images/
  // src — путь начиная с /images/
  // Чтобы убрать галерею — сделай массив пустым: gallery: []
  gallery: [
    {
      id: "1",
      src: "/images/photo1.jpg",
      alt: "Моё фото",
      caption: "ꕤ описание фото",
    },
    {
      id: "2",
      src: "/images/photo2.jpg",
      alt: "Моё фото 2",
      caption: "ꕤ описание фото",
    },
    {
      id: "3",
      src: "/images/photo3.jpg",
      alt: "Моё фото 3",
      caption: "ꕤ описание фото",
    },
    // Добавь ещё фото по такому же шаблону
  ],

  // ──────────────────────────────────────
  // 🎵 МУЗЫКА / АУДИО
  // ──────────────────────────────────────
  // Положи mp3 файлы в папку public/audio/
  // src — путь начиная с /audio/
  // cover — обложка (опционально, из папки public/images/)
  // Чтобы убрать плеер — сделай массив пустым: audio: []
  audio: [
    {
      id: "1",
      title: "My Favourite Song",
      artist: "Artist Name",
      // Путь к аудио файлу: положи файл в public/audio/
      src: "/audio/song1.mp3",
      // Обложка (опционально): положи файл в public/images/
      cover: "/images/cover1.jpg",
    },
    // Добавь ещё треки по такому же шаблону
    // {
    //   id: "2",
    //   title: "Another Song",
    //   artist: "Artist",
    //   src: "/audio/song2.mp3",
    //   cover: "/images/cover2.jpg",
    // },
  ],

  // ──────────────────────────────────────
  // 🎬 ВИДЕО
  // ──────────────────────────────────────
  // Поддерживается YouTube и локальные mp4 файлы
  // Чтобы убрать видео — сделай массив пустым: videos: []
  videos: [
    {
      id: "1",
      title: "Моё любимое видео",
      // Тип: "youtube" или "local"
      type: "youtube" as const,
      // Для YouTube — ID видео из ссылки (часть после ?v=)
      // Например, в ссылке https://youtube.com/watch?v=dQw4w9WgXcQ — ID это dQw4w9WgXcQ
      youtubeId: "dQw4w9WgXcQ",
    },
    // Пример локального видео (файл в папке public/video/):
    // {
    //   id: "2",
    //   title: "Моё видео",
    //   type: "local" as const,
    //   src: "/video/myvideo.mp4",
    // },
  ],

  // ──────────────────────────────────────
  // 🎨 НАСТРОЙКИ ВНЕШНЕГО ВИДА
  // ──────────────────────────────────────
  // Показывать ли секции (true = показывать, false = скрыть)
  sections: {
    gallery: true,
    audio: true,
    videos: true,
  },
};

// ──────────────────────────────────────
// ТИПЫ TypeScript (не трогай это)
// ──────────────────────────────────────

export type YoutubeVideo = {
  id: string;
  title: string;
  type: "youtube";
  youtubeId: string;
};

export type LocalVideo = {
  id: string;
  title: string;
  type: "local";
  src: string;
};

export type VideoItem = YoutubeVideo | LocalVideo;

export type SiteConfig = typeof siteConfig;
