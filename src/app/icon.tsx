// Фавиконка — генерируется автоматически Next.js через ImageResponse
// Цветочек сакуры 🌸 в розово-пастельных тонах

import { ImageResponse } from "next/og";

// Размер фавиконки (стандартный для браузеров)
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Вычисляем позиции 5 лепестков заранее (не в рендере, чтобы без проблем)
// Каждый лепесток — на расстоянии 7px от центра, с шагом 72°
const PETALS = [0, 72, 144, 216, 288].map((deg, i) => {
  const rad = (deg * Math.PI) / 180;
  // Центр лепестка
  const cx = 16 + 7 * Math.sin(rad);
  const cy = 16 - 7 * Math.cos(rad);
  return {
    // Позиция верхнего левого угла прямоугольника лепестка (8×12)
    left: Math.round((cx - 4) * 10) / 10,
    top: Math.round((cy - 6) * 10) / 10,
    rotation: deg,
    // Чередуем светлые и насыщенные лепестки
    gradient:
      i % 2 === 0
        ? "linear-gradient(180deg, #fce7f3 0%, #f9a8d4 100%)"
        : "linear-gradient(180deg, #f9a8d4 0%, #f472b6 100%)",
  };
});

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          // Нежный розово-лавандовый градиент фона
          background: "linear-gradient(135deg, #fff0f5 0%, #f3e5f5 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Пять лепестков, расположенных по кругу */}
        {PETALS.map(({ left, top, rotation, gradient }) => (
          <div
            key={rotation}
            style={{
              position: "absolute",
              width: 8,
              height: 12,
              borderRadius: "50%",
              background: gradient,
              left,
              top,
              // Поворачиваем каждый лепесток по оси его центра
              transform: `rotate(${rotation}deg)`,
              opacity: 0.93,
            }}
          />
        ))}

        {/* Центральный круг цветка */}
        <div
          style={{
            position: "absolute",
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #fff5f8 0%, #fbbdd4 100%)",
            left: 11,
            top: 11,
          }}
        />

        {/* Три тычинки — ярко-розовые точки */}
        <div style={{ position: "absolute", width: 3, height: 3, borderRadius: "50%", background: "#ec4899", left: 14.5, top: 12.5 }} />
        <div style={{ position: "absolute", width: 3, height: 3, borderRadius: "50%", background: "#ec4899", left: 17.5, top: 16 }} />
        <div style={{ position: "absolute", width: 3, height: 3, borderRadius: "50%", background: "#ec4899", left: 11.5, top: 16 }} />
      </div>
    ),
    { ...size }
  );
}
