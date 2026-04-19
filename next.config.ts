import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Разрешаем загрузку обложек с YouTube CDN
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
