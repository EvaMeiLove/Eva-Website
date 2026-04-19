# 🌸 Ева Мэй — Персональная Страничка

Милый личный сайт в розово-пастельных тонах. Всё редактируется из одного файла — `src/config/site.config.ts`.

---

## 📦 Стек

| Технология | Версия | Для чего |
|---|---|---|
| Next.js | 16+ | Фреймворк, SSR, роутинг |
| React | 19 | UI компоненты |
| TypeScript | 5 | Типобезопасность |
| Tailwind CSS | 4 | Стили |
| Framer Motion | — | Анимации |

---

## 🗂️ Структура проекта

```
src/
├── app/
│   ├── layout.tsx          — корневой layout, SEO, шрифты, Яндекс Метрика
│   ├── page.tsx            — главная страница
│   ├── globals.css         — глобальные стили и анимации
│   ├── icon.tsx            — favicon (генерируется автоматически)
│   └── apple-icon.tsx      — иконка для iPhone (генерируется автоматически)
├── components/
│   ├── Hero.tsx            — аватар, имя, биография, бейджи
│   ├── SocialLinks.tsx     — карточки со ссылками на соцсети
│   ├── Gallery.tsx         — фотогалерея с лайтбоксом
│   ├── YouTubeMusicSection.tsx  — загрузка метаданных треков (серверный)
│   ├── YouTubeMusicPlayer.tsx   — плеер YouTube Music (клиентский)
│   ├── VideoSection.tsx    — секция с видео
│   ├── FloatingBackground.tsx  — декоративный фон
│   └── Footer.tsx          — подвал
├── config/
│   └── site.config.ts      ← ВСЁ РЕДАКТИРУЕТСЯ ЗДЕСЬ
public/
├── images/                 — фото для галереи и аватар
│   ├── avatar.jpg          — аватарка
│   ├── 1.jpg               — фото галереи
│   ├── 2.jpg
│   └── ...
└── google*.html            — верификация Google Search Console
```

---

## ✏️ Как редактировать контент

Открой **`src/config/site.config.ts`** — там всё.

### 👤 Личная информация
```ts
profile: {
  name: "Ева Мэй",
  nickname: "@eva_mei",
  tagline: "✨ just a girl with big dreams ✨",
  bio: "Приветик! Добро пожаловать на мою страничку 🌸",
  avatar: "/images/avatar.jpg",   // положи фото в public/images/
  badges: ["🤖 ИИ", "💻 ИТ"],     // добавляй/убирай теги
}
```

### 🔗 Ссылки на соцсети
```ts
links: [
  {
    id: "telegram",
    label: "Telegram",
    url: "https://t.me/твой_ник",
    icon: "send",             // send | instagram | youtube | twitter | tiktok | reddit | pinterest | discord
    color: "#2AABEE",
    username: "@твой_ник",
    description: "Пиши мне",
  },
  // Скопируй блок выше чтобы добавить ещё ссылку
]
```

### 🖼️ Галерея фотографий
1. Положи файлы в `public/images/` — например `1.jpg`, `2.jpg`, `3.jpg`
2. Добавь в конфиг:
```ts
gallery: [
  { id: "1", src: "/images/1.jpg", alt: "Фото 1", caption: "🌸" },
  { id: "2", src: "/images/2.jpg", alt: "Фото 2", caption: "🌸" },
]
```
Фото в сетке — пропорция 3:4 (портретная). Клик — полный размер в лайтбоксе.

### 🎵 Музыка с YouTube Music

ID трека — часть ссылки после `?v=`.  
Пример: `https://music.youtube.com/watch?v=nb1qRwEe0mw` → ID: `nb1qRwEe0mw`

Название, артист и обложка подтягиваются **автоматически**.

```ts
youtubeMusicTracks: [
  { id: "1", youtubeId: "nb1qRwEe0mw" },
  { id: "2", youtubeId: "8NoFd-ruKws" },
  // { id: "3", youtubeId: "ЕЩЁ_ОДИН_ID" },
]
```

В плеере есть навигация ← → между треками и плейлист внизу.

### 🎬 Видео
```ts
videos: [
  {
    id: "1",
    title: "Моё любимое видео",
    type: "youtube",
    youtubeId: "WiJ5uVVoGEw",  // из ссылки youtube.com/watch?v=...
  },
]
```

### 👁️ Показать / скрыть секции
```ts
sections: {
  gallery: true,            // true = показывать, false = скрыть
  audio: false,             // локальный mp3 плеер (не используется)
  youtubeMusicTracks: true,
  videos: true,
}
```

---

## 🖼️ Как добавить фото

1. Скопируй файл в `public/images/` (через GitHub → Add file → Upload files)
2. Добавь в `site.config.ts` в массив `gallery`
3. Закоммить изменения → сайт обновится автоматически

---

## 🚀 Деплой и обновления

### Первый запуск (уже сделано)
Сайт подключён к Netlify через GitHub репозиторий `Eva-Website`.  
Каждый пуш в `main` → сайт автоматически пересобирается и обновляется.

### Обновить контент (текст, ссылки, треки)

**Через GitHub в браузере:**
1. Открой `src/config/site.config.ts` на GitHub
2. Нажми карандаш ✏️ (Edit this file)
3. Внеси изменения
4. Нажми **Commit changes** → **Commit directly to main**
5. Netlify сам подхватит изменение через ~1-2 минуты

**Через Cursor (локально):**
```bash
# После изменений:
git add .
git commit -m "обновила контент"
git push
```

### Добавить фото через GitHub
1. Перейди в папку `public/images/`
2. Нажми **Add file → Upload files**
3. Загрузи фото
4. Commit → потом отдельно отредактируй `site.config.ts`

---

## 🛠️ Локальный запуск (для разработки)

```bash
# Установить зависимости
npm install

# Запустить dev сервер
npm run dev
# Открой http://localhost:3000

# Сборка для продакшна
npm run build
```

---

## 📊 Аналитика

- **Google Search Console** — верификация через meta-тег в `layout.tsx` и файл `public/google*.html`
- **Яндекс Метрика** — скрипт подключён в `layout.tsx` через `next/script`

---

## ❓ Частые вопросы

**Сайт не обновился после пуша?**  
Подожди 2-3 минуты или проверь вкладку Deploys на Netlify.

**Фото не отображается?**  
Убедись что файл лежит в `public/images/` и имя в конфиге совпадает с именем файла (регистр важен).

**Как добавить новую соцсеть?**  
Скопируй один из блоков в `links: [...]` и поменяй данные. Доступные иконки: `send` (Telegram), `instagram`, `youtube`, `twitter`, `tiktok`, `reddit`, `pinterest`, `discord`, `globe` (сайт), `link`.

**Как скрыть секцию?**  
В `sections: { ... }` поставь `false` для нужной секции.
