"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { SiteConfig } from "@/config/site.config";

type GalleryProps = {
  items: SiteConfig["gallery"];
};

export default function Gallery({ items }: GalleryProps) {
  // Индекс выбранного фото для лайтбокса (-1 = лайтбокс закрыт)
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  // Список ID фото с ошибкой загрузки — показываем красивый плейсхолдер
  const [errorIds, setErrorIds] = useState<Set<string>>(new Set());

  const handleImageError = (id: string) =>
    setErrorIds((prev) => new Set([...prev, id]));

  if (!items.length) return null;

  // Открыть лайтбокс с нужным фото
  const openLightbox = (index: number) => setSelectedIndex(index);

  // Закрыть лайтбокс
  const closeLightbox = () => setSelectedIndex(-1);

  // Перейти к следующему фото
  const goNext = () =>
    setSelectedIndex((prev) => (prev + 1) % items.length);

  // Перейти к предыдущему фото
  const goPrev = () =>
    setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);

  // Закрыть лайтбокс при клике на фон
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeLightbox();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* Заголовок */}
      <h2
        className="text-center text-sm font-semibold uppercase tracking-widest mb-4"
        style={{ color: "#c084fc", letterSpacing: "0.2em" }}
      >
        ✦ галерея ✦
      </h2>

      {/* Сетка фотографий */}
      <div
        className="glass-card rounded-3xl p-4"
        // Адаптивная сетка: 2 колонки на мобайле, 3 на больших экранах
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {items.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => openLightbox(index)}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-400"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {/* Фото или плейсхолдер если файл не найден */}
              {errorIds.has(item.id) ? (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-1"
                  style={{ background: "linear-gradient(135deg, #fce7f3, #e9d5ff)" }}
                >
                  <span className="text-2xl">🌸</span>
                  <p className="text-xs text-center px-2" style={{ color: "#be185d" }}>
                    {item.caption ?? "фото"}
                  </p>
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 45vw, 200px"
                  onError={() => handleImageError(item.id)}
                />
              )}

              {/* Оверлей при наведении — показывает подпись */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-end p-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(131, 24, 67, 0.8) 0%, transparent 60%)",
                }}
              >
                {item.caption && (
                  <p className="text-white text-xs font-medium text-center leading-snug">
                    {item.caption}
                  </p>
                )}
              </div>

              {/* Иконка лупы в углу */}
              <div
                className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                style={{ background: "rgba(255, 255, 255, 0.9)" }}
              >
                <ImageIcon size={12} style={{ color: "#f472b6" }} />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── Лайтбокс (полноэкранный просмотр) ── */}
      <AnimatePresence>
        {selectedIndex >= 0 && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(74, 25, 66, 0.85)", backdropFilter: "blur(12px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
          >
            {/* Карточка с фото */}
            <motion.div
              className="relative max-w-lg w-full glass-card rounded-3xl overflow-hidden"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Кнопка закрытия */}
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid rgba(244, 114, 182, 0.3)",
                }}
                aria-label="Закрыть"
              >
                <X size={16} style={{ color: "#be185d" }} />
              </button>

              {/* Фото в лайтбоксе */}
              <div className="relative aspect-square sm:aspect-[4/3] w-full">
                {errorIds.has(items[selectedIndex].id) ? (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                    style={{ background: "linear-gradient(135deg, #fce7f3, #e9d5ff)" }}
                  >
                    <span className="text-5xl">🌸</span>
                    <p className="text-sm" style={{ color: "#be185d" }}>фото не найдено</p>
                  </div>
                ) : (
                  <Image
                    src={items[selectedIndex].src}
                    alt={items[selectedIndex].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 90vw, 512px"
                    priority
                    onError={() => handleImageError(items[selectedIndex].id)}
                  />
                )}
              </div>

              {/* Подпись и навигация */}
              <div className="p-4 flex items-center justify-between gap-4">
                {/* Кнопка "назад" */}
                {items.length > 1 && (
                  <button
                    onClick={goPrev}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 flex-shrink-0"
                    style={{
                      background: "rgba(244, 114, 182, 0.15)",
                      border: "1px solid rgba(244, 114, 182, 0.3)",
                    }}
                    aria-label="Предыдущее фото"
                  >
                    <ChevronLeft size={18} style={{ color: "#f472b6" }} />
                  </button>
                )}

                {/* Подпись и счётчик */}
                <div className="flex-1 text-center min-w-0">
                  {items[selectedIndex].caption && (
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: "#6b2d5e" }}
                    >
                      {items[selectedIndex].caption}
                    </p>
                  )}
                  <p className="text-xs mt-0.5" style={{ color: "#be185d", opacity: 0.6 }}>
                    {selectedIndex + 1} / {items.length}
                  </p>
                </div>

                {/* Кнопка "вперёд" */}
                {items.length > 1 && (
                  <button
                    onClick={goNext}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 flex-shrink-0"
                    style={{
                      background: "rgba(244, 114, 182, 0.15)",
                      border: "1px solid rgba(244, 114, 182, 0.3)",
                    }}
                    aria-label="Следующее фото"
                  >
                    <ChevronRight size={18} style={{ color: "#f472b6" }} />
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
