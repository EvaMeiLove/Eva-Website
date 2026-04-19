import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/site.config";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

/* ──────────────────────────────────────
   ПОДКЛЮЧЕНИЕ GOOGLE FONTS
   next/font загружает шрифты оптимально (без мигания, кешируются)
   ────────────────────────────────────── */

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

// Верификация Google — только если задана в site.config.ts
const googleVerify = siteConfig.analytics.googleSiteVerification.trim();
const yandexId = siteConfig.analytics.yandexMetrikaId.trim();

/* ──────────────────────────────────────
   МЕТАДАННЫЕ САЙТА (SEO + ВЕРИФИКАЦИЯ)
   Обновляются через site.config.ts
   ────────────────────────────────────── */
export const metadata: Metadata = {
  title: siteConfig.profile.siteTitle,
  description: siteConfig.profile.siteDescription,
  openGraph: {
    title: siteConfig.profile.siteTitle,
    description: siteConfig.profile.siteDescription,
    type: "website",
  },
  ...(googleVerify
    ? {
        verification: {
          google: googleVerify,
        },
      }
    : {}),
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
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen antialiased">
        <LanguageProvider>
          <LanguageSwitcher />
          {children}

          {/* Яндекс.Метрика — только если в site.config указан номер счётчика */}
          {yandexId ? (
            <>
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
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${yandexId}','ym');

              ym(${yandexId}, 'init', {
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
              <noscript>
                <div>
                  <img
                    src={`https://mc.yandex.ru/watch/${yandexId}`}
                    style={{ position: "absolute", left: "-9999px" }}
                    alt=""
                  />
                </div>
              </noscript>
            </>
          ) : null}
        </LanguageProvider>
      </body>
    </html>
  );
}
