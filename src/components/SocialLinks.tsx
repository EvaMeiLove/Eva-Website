"use client";

import { motion } from "framer-motion";
import {
  Send,
  Globe,
  Link,
  Heart,
  Star,
  Camera,
  Coffee,
  ExternalLink,
  Music,
} from "lucide-react";
import type { FC, SVGProps } from "react";
import { SiteConfig } from "@/config/site.config";

type SocialLinksProps = {
  links: SiteConfig["links"];
};

// Тип для компонентов иконок
type IconComponent = FC<SVGProps<SVGSVGElement> & { size?: number }>;

// ── Брендовые SVG-иконки (их нет в lucide-react, рисуем сами) ──

const InstagramIcon: IconComponent = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon: IconComponent = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.94A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
  </svg>
);

const TwitterXIcon: IconComponent = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon: IconComponent = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.53a8.16 8.16 0 0 0 4.77 1.52V7.58a4.85 4.85 0 0 1-1.01-.89z" />
  </svg>
);

const VkIcon: IconComponent = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.8 13.54h-1.61c-.6 0-.79-.48-1.87-1.57-.93-.93-1.34-.83-1.57-.83s-.3.07-.3.54v1.43c0 .39-.12.61-1.17.61a5.98 5.98 0 0 1-4.82-2.89A12.94 12.94 0 0 1 5 8.08c0-.23.07-.44.46-.44h1.61c.34 0 .46.15.6.53.65 1.87 1.74 3.51 2.19 3.51.17 0 .24-.08.24-.51V9.35c-.06-1.01-.58-1.1-.58-1.46a.3.3 0 0 1 .3-.3h2.54c.28 0 .37.15.37.49v2.65c0 .29.13.38.21.38.17 0 .31-.09.63-.41 1.03-1.14 1.76-2.9 1.76-2.9.1-.22.28-.42.65-.42h1.61c.48 0 .59.25.48.53-.2.93-2.1 3.58-2.1 3.58-.17.27-.22.39 0 .69.16.23.69.71 1.04 1.14.65.75 1.14 1.37 1.27 1.8.12.42-.09.64-.52.64z" />
  </svg>
);

// ── Маппинг: название → компонент иконки ──
// Добавляй новые иконки сюда
const iconMap: Record<string, IconComponent> = {
  // Брендовые иконки
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  twitter: TwitterXIcon,
  tiktok: TikTokIcon,
  vk: VkIcon,
  // Генерические иконки из lucide-react
  send: Send as unknown as IconComponent,       // Telegram
  globe: Globe as unknown as IconComponent,     // Сайт
  link: Link as unknown as IconComponent,
  heart: Heart as unknown as IconComponent,
  star: Star as unknown as IconComponent,
  camera: Camera as unknown as IconComponent,
  coffee: Coffee as unknown as IconComponent,   // Buy Me a Coffee
  music: Music as unknown as IconComponent,
};

// Анимации контейнера
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
    },
  },
};

export default function SocialLinks({ links }: SocialLinksProps) {
  if (!links.length) return null;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full"
    >
      {/* Заголовок секции */}
      <motion.h2
        variants={cardVariants}
        className="text-center text-sm font-semibold uppercase tracking-widest mb-4"
        style={{ color: "#c084fc", letterSpacing: "0.2em" }}
      >
        ✦ найти меня ✦
      </motion.h2>

      {/* Сетка ссылок — 1 колонка на мобайле, 2 на планшете */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((link) => {
          const IconComponent = iconMap[link.icon] ?? (Globe as unknown as IconComponent);

          return (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className="glass-card glass-card-hover rounded-2xl p-4 flex items-center gap-4 group no-underline"
              style={{ textDecoration: "none" }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Иконка в цветном круге */}
              <motion.div
                className="relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${link.color}22, ${link.color}44)`,
                  border: `1px solid ${link.color}44`,
                }}
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.4 }}
              >
                <IconComponent
                  size={22}
                  style={{ color: link.color }}
                />
                {/* Блик на иконке */}
                <div
                  className="absolute top-1 right-1 w-2 h-2 rounded-full opacity-60"
                  style={{ background: "radial-gradient(circle, white, transparent)" }}
                />
              </motion.div>

              {/* Текст ссылки */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm sm:text-base truncate" style={{ color: "#4a1942" }}>
                  {link.label}
                </p>
                {link.username && (
                  <p className="text-xs truncate mt-0.5" style={{ color: "#be185d", opacity: 0.8 }}>
                    {link.username}
                  </p>
                )}
                {link.description && (
                  <p className="text-xs mt-0.5 truncate" style={{ color: "#9d174d", opacity: 0.6 }}>
                    {link.description}
                  </p>
                )}
              </div>

              {/* Стрелка — появляется при наведении */}
              <div
                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: link.color }}
              >
                <ExternalLink size={16} strokeWidth={2} />
              </div>
            </motion.a>
          );
        })}
      </div>
    </motion.section>
  );
}
