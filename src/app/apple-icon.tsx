// Apple Touch Icon — для iOS/Safari (180×180)
// Показывается при добавлении сайта на главный экран телефона

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Лепестки для большого размера (расстояние 40px от центра)
const PETALS = [0, 72, 144, 216, 288].map((deg, i) => {
  const rad = (deg * Math.PI) / 180;
  const cx = 90 + 40 * Math.sin(rad);
  const cy = 90 - 40 * Math.cos(rad);
  return {
    left: Math.round((cx - 20) * 10) / 10,
    top: Math.round((cy - 32) * 10) / 10,
    rotation: deg,
    gradient:
      i % 2 === 0
        ? "linear-gradient(180deg, #fce7f3 0%, #f9a8d4 100%)"
        : "linear-gradient(180deg, #f9a8d4 0%, #f472b6 100%)",
  };
});

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: "40px", // Скруглённые углы как у iOS иконок
          background: "linear-gradient(135deg, #fff0f5 0%, #f3e5f5 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Пять лепестков */}
        {PETALS.map(({ left, top, rotation, gradient }) => (
          <div
            key={rotation}
            style={{
              position: "absolute",
              width: 40,
              height: 65,
              borderRadius: "50%",
              background: gradient,
              left,
              top,
              transform: `rotate(${rotation}deg)`,
              opacity: 0.93,
            }}
          />
        ))}

        {/* Центр */}
        <div
          style={{
            position: "absolute",
            width: 58,
            height: 58,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #fff5f8 0%, #fbbdd4 100%)",
            left: 61,
            top: 61,
          }}
        />

        {/* Тычинки (5 штук для большего размера) */}
        {[
          { left: 87, top: 72 },
          { left: 97, top: 88 },
          { left: 90, top: 97 },
          { left: 80, top: 92 },
          { left: 76, top: 80 },
        ].map((pos, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#ec4899",
              left: pos.left,
              top: pos.top,
            }}
          />
        ))}
      </div>
    ),
    { ...size }
  );
}
