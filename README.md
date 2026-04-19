# 🌸 Моя Персональная Страничка

Милый персональный сайт в розово-пастельных тонах с анимациями, галереей, аудиоплеером и видео.

**Стек:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion

---

## ✨ Что умеет сайт

- 🎨 Анимированный градиентный фон с плавающими элементами
- 👤 Блок с аватаром, именем, описанием и бейджами
- 🔗 Красивые карточки ссылок на соцсети
- 🖼️ Фотогалерея с лайтбоксом
- 🎵 Кастомный аудиоплеер с обложками
- 🎬 Поддержка YouTube и локальных видео
- 📱 Адаптивный дизайн (телефон + компьютер)
- 🌐 Готов к деплою на Netlify

---

## 📁 Структура проекта

```
my-site/
├── public/
│   ├── images/          ← 🖼️ Сюда кладёшь фото (аватар, галерея, обложки)
│   ├── audio/           ← 🎵 Сюда кладёшь музыку (.mp3)
│   └── video/           ← 🎬 Сюда кладёшь видео (.mp4)
│
├── src/
│   ├── config/
│   │   └── site.config.ts   ← ⭐ ГЛАВНЫЙ ФАЙЛ — здесь меняешь всё!
│   │
│   ├── components/
│   │   ├── FloatingBackground.tsx   ← декоративный анимированный фон
│   │   ├── Hero.tsx                 ← аватар, имя, биография
│   │   ├── SocialLinks.tsx          ← карточки ссылок
│   │   ├── Gallery.tsx              ← фотогалерея с лайтбоксом
│   │   ├── AudioPlayer.tsx          ← музыкальный плеер
│   │   ├── VideoSection.tsx         ← секция видео
│   │   └── Footer.tsx               ← подвал
│   │
│   └── app/
│       ├── globals.css    ← стили, анимации
│       ├── layout.tsx     ← основной layout с шрифтами и SEO
│       └── page.tsx       ← главная страница
│
├── netlify.toml     ← настройки деплоя на Netlify
└── package.json     ← зависимости проекта
```

---

## ✏️ Как редактировать сайт

### Всё, что тебе нужно — файл `src/config/site.config.ts`

Открой его и меняй:

| Что | Где в файле |
|-----|-------------|
| Имя, никнейм, описание | `profile.name`, `profile.nickname`, `profile.bio` |
| Аватар | `profile.avatar` → положи фото в `public/images/` |
| Бейджи | `profile.badges` |
| Ссылки на соцсети | `links: [...]` |
| Фото в галерею | `gallery: [...]` → файлы в `public/images/` |
| Музыка | `audio: [...]` → файлы в `public/audio/` |
| Видео | `videos: [...]` → YouTube ID или файлы в `public/video/` |
| Скрыть секцию | `sections.gallery = false` |

### Как добавить новую ссылку

В `site.config.ts` в массиве `links` добавь новый блок:

```typescript
{
  id: "uniqueid",       // уникальное ID (придумай сама)
  label: "Название",    // что отобразится
  url: "https://...",   // ссылка
  icon: "globe",        // иконка: instagram | send | youtube | twitter | music | globe | link | heart | star | camera | coffee
  color: "#ff6b9d",     // цвет иконки (HEX)
  username: "@ник",     // твой ник на платформе
  description: "Описание",
},
```

### Как добавить фото в галерею

1. Положи фото в папку `public/images/` (например `photo1.jpg`)
2. В `site.config.ts` добавь в массив `gallery`:

```typescript
{
  id: "1",                     // уникальное ID
  src: "/images/photo1.jpg",   // путь к файлу
  alt: "Моё фото",             // описание для accessibility
  caption: "ꕤ подпись",       // подпись (опционально)
},
```

### Как добавить музыку

1. Положи `.mp3` файл в `public/audio/`
2. В `site.config.ts` добавь в массив `audio`:

```typescript
{
  id: "1",
  title: "Название песни",
  artist: "Исполнитель",
  src: "/audio/song.mp3",
  cover: "/images/cover.jpg",  // обложка (опционально)
},
```

### Как добавить YouTube видео

Возьми ID из ссылки: `https://youtube.com/watch?v=`**`ЭТОТ_ID`**

```typescript
{
  id: "1",
  title: "Название видео",
  type: "youtube" as const,
  youtubeId: "ЭТОТ_ID",  // ← вставь сюда
},
```

---

## 🚀 Шаг 1: Загрузить код на GitHub

### Вариант A: Через GitHub Desktop (легко, рекомендую)

1. Скачай [GitHub Desktop](https://desktop.github.com/)
2. Войди в свой аккаунт GitHub
3. Нажми **File → Add Local Repository**
4. Выбери папку с проектом
5. Нажми **Publish repository** → назови репозиторий (например `my-site`)
6. Убери галочку "Keep this code private" если хочешь публичный сайт
7. Нажми **Publish Repository** 🎉

### Вариант B: Через терминал (для тех кто знает git)

```bash
# В папке проекта:
git init
git add .
git commit -m "🌸 Initial commit"

# Создай репозиторий на github.com, потом:
git remote add origin https://github.com/ТВО_НИК/my-site.git
git branch -M main
git push -u origin main
```

---

## 🌐 Шаг 2: Подключить Netlify

1. Зайди на [app.netlify.com](https://app.netlify.com/) и войди через GitHub
2. Нажми **"Add new site"** → **"Import an existing project"**
3. Выбери **GitHub** и найди свой репозиторий
4. Настройки сборки (должны заполниться автоматически):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Нажми **"Deploy site"** 🚀
6. Подожди 1-2 минуты — сайт будет доступен по адресу типа `https://amazing-name-123.netlify.app`
7. Можно сменить адрес: **Site settings → Domain management → Custom domain**

### Установить плагин Netlify для Next.js

Netlify нужен специальный плагин для Next.js. Зайди в:
**Deploys → Deploy settings → Build plugins** → добавь `@netlify/plugin-nextjs`

Или просто — файл `netlify.toml` уже содержит эту настройку, она применится автоматически.

---

## 🔄 Шаг 3: Обновлять сайт

### Способ 1: Через GitHub (полностью онлайн, без компьютера)

1. Зайди в свой репозиторий на [github.com](https://github.com)
2. Найди файл `src/config/site.config.ts`
3. Нажми иконку карандаша ✏️ (Edit this file)
4. Внеси изменения
5. Нажми **"Commit changes"** → **"Commit directly to the main branch"**
6. Netlify автоматически пересоберёт сайт через 1-2 минуты ✨

### Способ 2: Через GitHub Desktop (для загрузки медиафайлов)

Для добавления фото/музыки/видео:

1. Скопируй файлы в нужную папку (`public/images/`, `public/audio/`, `public/video/`)
2. Открой GitHub Desktop
3. Напиши описание изменений (например "добавила новые фото")
4. Нажми **Commit to main** → **Push origin**
5. Netlify автоматически обновит сайт 🎉

---

## 💡 Полезные советы

### Оптимальные размеры файлов

| Что | Рекомендации |
|-----|-------------|
| Аватар | квадратный JPG/PNG, 400×400px, до 200KB |
| Фото галереи | JPG, до 500KB каждое |
| Аудио | MP3 320kbps, до 8MB |
| Обложки аудио | квадратный JPG, 300×300px |
| Видео | если локальное — до 50MB, лучше использовать YouTube |

### Если что-то не работает

- **Фото не отображается:** проверь путь в config — должен начинаться с `/images/`
- **Музыка не играет:** браузер может блокировать автовоспроизведение — это нормально, нужно нажать кнопку
- **Сайт не обновился:** подожди 2-3 минуты после коммита на GitHub

---

## 🛠️ Локальная разработка (опционально)

Если хочешь видеть изменения сразу без Netlify:

```bash
# Установить зависимости (один раз)
npm install

# Запустить локально
npm run dev
# → Открой http://localhost:3000
```

---

*Сделано с 💕 · Next.js 16 · Tailwind CSS v4 · Framer Motion*
