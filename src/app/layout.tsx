import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/site.config";

/* ──────────────────────────────────────
   ПОДКЛЮЧЕНИЕ GOOGLE FONTS
   next/font загружает шрифты оптимально (без мигания, кешируются)
   ────────────────────────────────────── */

// Красивый шрифт с засечками для заголовков
const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Современный чистый шрифт для текста
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

/* ──────────────────────────────────────
   МЕТАДАННЫЕ САЙТА (SEO + ВЕРИФИКАЦИЯ)
   Обновляются через site.config.ts
   ────────────────────────────────────── */
export const metadata: Metadata = {
  title: siteConfig.profile.siteTitle,
  description: siteConfig.profile.siteDescription,
  // Open Graph — красивый превью при шейринге в соцсетях
  openGraph: {
    title: siteConfig.profile.siteTitle,
    description: siteConfig.profile.siteDescription,
    type: "website",
  },
  // ✅ Google Search Console — верификация сайта
  // Next.js автоматически рендерит это как <meta name="google-site-verification" ...>
  verification: {
    google: "FC7fuX4FZXFneU9qj3FT_ajWF4_WKJuAQNY99HIXe2M",
  },
};

/* ──────────────────────────────────────
   КОРНЕВОЙ LAYOUT — обёртка для всего сайта
   ────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      // CSS-переменные шрифтов доступны во всех компонентах
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen antialiased">
        {children}

        {/* ── Яндекс.Метрика ──────────────────────────────────────
            strategy="afterInteractive" — скрипт загружается после
            интерактивности страницы, не блокирует рендер
            ────────────────────────────────────────────────────── */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) { return; }
                }
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],
                k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108664576','ym');

              ym(108664576, 'init', {
                ssr: true,
                webvisor: true,
                clickmap: true,
                ecommerce: "dataLayer",
                referrer: document.referrer,
                url: location.href,
                accurateTrackBounce: true,
                trackLinks: true
              });
            `,
          }}
        />

        {/* Яндекс.Метрика — для пользователей без JavaScript */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/108664576"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
