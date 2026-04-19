// Серверный компонент — собирает всю страницу из блоков
import { siteConfig } from "@/config/site.config";
import FloatingBackground from "@/components/FloatingBackground";
import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";
import Gallery from "@/components/Gallery";
import AudioPlayer from "@/components/AudioPlayer";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    // Основной контейнер с анимированным градиентным фоном
    <main className="relative min-h-screen bg-dreamy overflow-hidden">
      {/* Декоративные плавающие элементы на фоне */}
      <FloatingBackground />

      {/* Контентная область — ограничена по ширине и центрирована */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12 pb-16 flex flex-col gap-8">

        {/* 👤 Секция: аватар, имя, биография */}
        <Hero profile={siteConfig.profile} />

        {/* 🔗 Секция: ссылки на соцсети */}
        <SocialLinks links={siteConfig.links} />

        {/* 🖼️ Секция: фотогалерея (если есть фото и включена) */}
        {siteConfig.sections.gallery && siteConfig.gallery.length > 0 && (
          <Gallery items={siteConfig.gallery} />
        )}

        {/* 🎵 Секция: аудиоплеер (если есть треки и включен) */}
        {siteConfig.sections.audio && siteConfig.audio.length > 0 && (
          <AudioPlayer tracks={siteConfig.audio} />
        )}

        {/* 🎬 Секция: видео (если есть видео и включено) */}
        {siteConfig.sections.videos && siteConfig.videos.length > 0 && (
          <VideoSection videos={siteConfig.videos} />
        )}

        {/* 🌸 Подвал */}
        <Footer name={siteConfig.profile.name} />
      </div>
    </main>
  );
}
