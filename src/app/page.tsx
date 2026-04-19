import { siteConfig } from "@/config/site.config";
import FloatingBackground from "@/components/FloatingBackground";
import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";
import Gallery from "@/components/Gallery";
import YouTubeMusicSection from "@/components/YouTubeMusicSection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-dreamy overflow-hidden">
      {/* Декоративные плавающие элементы на фоне */}
      <FloatingBackground />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12 pb-16 flex flex-col gap-8">

        {/* 👤 Аватар, имя, биография */}
        <Hero profile={siteConfig.profile} />

        {/* 🔗 Ссылки на соцсети */}
        <SocialLinks links={siteConfig.links} />

        {/* 🖼️ Фотогалерея */}
        {siteConfig.sections.gallery && siteConfig.gallery.length > 0 && (
          <Gallery items={siteConfig.gallery} />
        )}

        {/* 🎵 YouTube Music — треки с автоматическим подтягиванием обложки и метаданных */}
        {siteConfig.sections.youtubeMusicTracks &&
          siteConfig.youtubeMusicTracks.length > 0 && (
            <YouTubeMusicSection tracks={siteConfig.youtubeMusicTracks} />
          )}

        {/* 🎬 Видео (YouTube или локальные) */}
        {siteConfig.sections.videos && siteConfig.videos.length > 0 && (
          <VideoSection videos={siteConfig.videos} />
        )}

        {/* 🌸 Подвал */}
        <Footer name={siteConfig.profile.name} />
      </div>
    </main>
  );
}
