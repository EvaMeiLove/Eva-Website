"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SiteConfig } from "@/config/site.config";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

// Тип принимаемых пропсов
type HeroProps = {
  profile: SiteConfig["profile"];
};

// Анимации для последовательного появления элементов
// Тип для easing кривой Безье (4 числа)
type BezierDefinition = [number, number, number, number];

// Пружинный easing — плавное появление с небольшим отскоком
const springEase: BezierDefinition = [0.34, 1.56, 0.64, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // каждый элемент появляется с задержкой
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: springEase,
    },
  },
};

// Только opacity: scale на родителе ломает rounded-full у колец после скролла
const avatarVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: springEase,
    },
  },
};

export default function Hero({ profile }: HeroProps) {
  const [avatarError, setAvatarError] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].profile;

  return (
    <motion.section
      className="flex flex-col items-center text-center gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ── Аватар с анимацией свечения ── */}
      <motion.div className="relative" variants={avatarVariants}>
        {/* Градиентное кольцо: клип снаружи (без transform), вращение внутри —
            иначе после скролла виден квадрат вместо круга */}
        <div
          className="absolute inset-[-8px] rounded-full overflow-hidden pointer-events-none"
          style={{
            clipPath: "circle(50%)",
            WebkitClipPath: "circle(50%)",
          }}
        >
          <div
            className="h-full w-full"
            style={{
              background:
                "conic-gradient(from 0deg, #f472b6, #c084fc, #f9a8d4, #e9d5ff, #f472b6)",
              opacity: 0.7,
              animation: "avatarRingSpin 8s linear infinite",
            }}
          />
        </div>

        {/* Белый разделитель */}
        <div
          className="absolute inset-[-3px] rounded-full overflow-hidden bg-white/80 pointer-events-none"
          style={{
            clipPath: "circle(50%)",
            WebkitClipPath: "circle(50%)",
          }}
        />

        {/* Свечение снаружи клиппинга, чтобы тень не обрезалась */}
        <div
          className="relative"
          style={{ animation: "pulseGlow 3s ease-in-out infinite" }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden"
              style={{
                clipPath: "circle(50%)",
                WebkitClipPath: "circle(50%)",
              }}
            >
              {/* Фон-заглушка — всегда отображается, фото накрывает его сверху */}
              <div
                className="absolute inset-0 flex items-center justify-center text-5xl"
                style={{
                  background: "linear-gradient(135deg, #fce7f3 0%, #e9d5ff 100%)",
                }}
              >
                🌸
              </div>

              {/* Фото пользователя — загружается поверх заглушки */}
              {profile.avatar && !avatarError && (
                <Image
                  src={profile.avatar}
                  alt={`Аватар ${profile.name}`}
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 640px) 128px, 160px"
                  priority
                  onError={() => setAvatarError(true)}
                />
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Имя ── */}
      <motion.div variants={itemVariants} className="flex flex-col gap-1">
        <h1
          className="text-4xl sm:text-5xl font-bold leading-tight text-gradient-rose"
          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
        >
          {t.name}
        </h1>

        {/* Никнейм */}
        <p
          className="text-lg sm:text-xl font-medium"
          style={{ color: "#c084fc" }}
        >
          {profile.nickname}
        </p>
      </motion.div>

      {/* ── Слоган ── */}
      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg font-light italic"
        style={{ color: "#be185d", fontFamily: "var(--font-playfair), serif" }}
      >
        {t.tagline}
      </motion.p>

      {/* ── Биография ── */}
      <motion.div
        variants={itemVariants}
        className="glass-card rounded-3xl px-6 py-5 max-w-md w-full"
      >
        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: "#6b2d5e" }}
        >
          {t.bio}
        </p>
      </motion.div>

      {/* ── Бейджи ── */}
      {t.badges.length > 0 && (
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2"
        >
          {t.badges.map((badge, index) => (
            <motion.span
              key={index}
              className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium cursor-default"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                border: "1px solid rgba(244, 114, 182, 0.35)",
                color: "#be185d",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{
                scale: 1.08,
                background: "rgba(255, 255, 255, 0.9)",
                borderColor: "rgba(244, 114, 182, 0.6)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
}
