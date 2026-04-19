"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SiteConfig } from "@/config/site.config";

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

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: springEase,
    },
  },
};

export default function Hero({ profile }: HeroProps) {
  // Ошибка загрузки аватара — показываем заглушку
  const [avatarError, setAvatarError] = useState(false);

  return (
    <motion.section
      className="flex flex-col items-center text-center gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ── Аватар с анимацией свечения ── */}
      <motion.div
        className="relative"
        variants={avatarVariants}
      >
        {/* Внешнее кольцо с вращением */}
        <motion.div
          className="absolute inset-[-8px] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #f472b6, #c084fc, #f9a8d4, #e9d5ff, #f472b6)",
            opacity: 0.7,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Белый разделитель */}
        <div className="absolute inset-[-3px] rounded-full bg-white/80" />

        {/* Контейнер аватара с пульсирующим свечением */}
        <motion.div
          className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden"
          style={{ animation: "pulseGlow 3s ease-in-out infinite" }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
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
              className="object-cover"
              sizes="(max-width: 640px) 128px, 160px"
              priority
              onError={() => setAvatarError(true)}
            />
          )}
        </motion.div>

      </motion.div>

      {/* ── Имя ── */}
      <motion.div variants={itemVariants} className="flex flex-col gap-1">
        <h1
          className="text-4xl sm:text-5xl font-bold leading-tight text-gradient-rose"
          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
        >
          {profile.name}
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
        {profile.tagline}
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
          {profile.bio}
        </p>
      </motion.div>

      {/* ── Бейджи ── */}
      {profile.badges.length > 0 && (
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2"
        >
          {profile.badges.map((badge, index) => (
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
