"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

type FooterProps = {
  name: string;
};

export default function Footer({ name }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center pt-4 pb-2 flex flex-col items-center gap-2"
    >
      {/* Разделитель */}
      <div
        className="w-16 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(244, 114, 182, 0.5), transparent)" }}
      />

      {/* Текст "сделано с любовью" */}
      <div className="flex items-center gap-1.5 text-xs" style={{ color: "#be185d", opacity: 0.6 }}>
        <span>made with</span>
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          <Heart size={12} fill="#f472b6" style={{ color: "#f472b6" }} />
        </motion.div>
        <span>by {name}</span>
      </div>

      {/* Год */}
      <p className="text-xs" style={{ color: "#be185d", opacity: 0.4 }}>
        © {year}
      </p>

      {/* Декоративные цветочки */}
      <p className="text-base" style={{ opacity: 0.5 }}>
        🌸 ✦ 🌸
      </p>
    </motion.footer>
  );
}
