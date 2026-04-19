"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { VideoItem } from "@/config/site.config";

type VideoSectionProps = {
  videos: VideoItem[];
};

export default function VideoSection({ videos }: VideoSectionProps) {
  if (!videos.length) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* Заголовок секции */}
      <h2
        className="text-center text-sm font-semibold uppercase tracking-widest mb-4"
        style={{ color: "#c084fc", letterSpacing: "0.2em" }}
      >
        ✦ видео ✦
      </h2>

      {/* Список видео */}
      <div className="flex flex-col gap-4">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className="glass-card rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {/* Название видео */}
            <div className="px-5 py-3 flex items-center gap-2" style={{ borderBottom: "1px solid rgba(244, 114, 182, 0.15)" }}>
              <motion.div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #f472b6, #c084fc)" }}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Play size={12} fill="white" style={{ color: "white", marginLeft: "1px" }} />
              </motion.div>
              <p
                className="font-medium text-sm truncate"
                style={{ color: "#4a1942" }}
              >
                {video.title}
              </p>
            </div>

            {/* Видео контент */}
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              {video.type === "youtube" && video.youtubeId ? (
                // YouTube embed
                // privacy-enhanced — не отслеживает пользователей без согласия
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1&color=white`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                />
              ) : video.type === "local" && video.src ? (
                // Локальный видео файл
                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    // Кастомизация контролов (работает не во всех браузерах)
                    accentColor: "#f472b6",
                  }}
                >
                  <p>Твой браузер не поддерживает видео.</p>
                </video>
              ) : (
                // Заглушка если видео не настроено
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg, #fce7f3, #e9d5ff)" }}
                >
                  <span className="text-4xl">🎬</span>
                  <p className="text-sm" style={{ color: "#be185d" }}>
                    Видео не найдено
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
