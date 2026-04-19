// ============================================================
// 🌸 ГЛАВНЫЙ ФАЙЛ НАСТРОЕК ТВОЕГО САЙТА 🌸
// ============================================================
// Здесь меняешь ВСЁ: имя, ссылки, фото, музыку, видео
// Просто редактируй этот файл — сайт обновится автоматически!
// ============================================================

export const siteConfig = {
  // ──────────────────────────────────────
  // 👤 ЛИЧНАЯ ИНФОРМАЦИЯ
  // ──────────────────────────────────────
  profile: {
    // Твоё имя или псевдоним (отображается крупно вверху)
    name: "Ева Мэй",

    // Никнейм (отображается под именем)
    nickname: "@eva_mei",

    // Короткий слоган / подзаголовок
    tagline: "✨ just a girl with big dreams ✨",

    // Описание о себе (можно использовать эмодзи)
    bio: "Приветик! Добро пожаловать на мою страничку 🌸 Туть можно найти все мои ссылочки 💕",

    // Путь к фото аватара (положи фото в папку public/images/ и укажи имя файла)
    // Например: "/images/avatar.jpg"
    // Если нет фото — оставь пустую строку ""
    avatar: "/images/avatar.jpg",

    // Маленькие бейджи-теги под bio (можно добавить/убрать любые)
    badges: [
      "🤖 ИИ",
      "💻 ИТ",
      "⛓️ Блокчейн",
      "✈️ Путешествия",
      "👗 Красивая одежда",
    ],

    // SEO: заголовок вкладки браузера
    siteTitle: "🌸 Ева Мэй — Персональная Страничка 🌸",

    // SEO: описание для поисковиков
    siteDescription: "🌸 Персональная страничка Евы Мэй 🌸 Мои фото, музыка, видео и ссылки 💕",
  },

  // ──────────────────────────────────────
  // 🔗 ССЫЛКИ НА СОЦСЕТИ И ПЛАТФОРМЫ
  // ──────────────────────────────────────
  // icon — ключ иконки: instagram | send | youtube | twitter | tiktok | reddit | pinterest | discord | vk | globe | link | ...
  // color — цвет карточки при наведении (HEX или любой CSS цвет)
  links: [
    {
      id: "telegram",
      label: "Telegram",
      url: "https://t.me/eva_mei",
      icon: "send",
      color: "#2AABEE",
      username: "@eva_mei",
      description: "Пиши мне",
    },
    {
      id: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/eva.mei.love/",
      icon: "instagram",
      color: "#E1306C",
      username: "@eva.mei.love",
      description: "Фото и истории",
    },
    {
      id: "reddit",
      label: "Reddit",
      url: "https://www.reddit.com/user/brachenlo/",
      icon: "reddit",
      color: "#FF4500",
      username: "u/brachenlo",
      description: "Посты и обсуждения",
    },
    {
      id: "pinterest",
      label: "Pinterest",
      url: "https://www.pinterest.com/evameilove/",
      icon: "pinterest",
      color: "#E60023",
      username: "@evameilove",
      description: "Мудборды и вдохновение",
    },
    {
      id: "youtube",
      label: "YouTube",
      url: "https://www.youtube.com/@EvaMeiLove",
      icon: "youtube",
      color: "#FF0000",
      username: "@EvaMeiLove",
      description: "Мой канал",
    },
    {
      id: "discord",
      label: "Discord",
      // У Discord нет публичной ссылки «только по нику» — открываем клиент/веб.
      // Если появится инвайт на сервер — замени на https://discord.gg/ТВОЙ_КОД
      url: "https://discord.com/app",
      icon: "discord",
      color: "#5865F2",
      username: "eva.mei",
      description: "Добавь в друзья в приложении",
    },
    {
      id: "twitter",
      label: "X (Twitter)",
      url: "https://x.com/Eva_Mei_Moon",
      icon: "twitter",
      color: "#000000",
      username: "@Eva_Mei_Moon",
      description: "Мысли и заметки",
    },
    {
      id: "tiktok",
      label: "TikTok",
      url: "https://www.tiktok.com/@eva_mei_love",
      icon: "tiktok",
      color: "#000000",
      username: "@eva_mei_love",
      description: "Короткие видео",
    },
    // ── Добавь новую ссылку, скопировав блок выше ──
  ],

  // ──────────────────────────────────────
  // 🖼️ ГАЛЕРЕЯ ФОТОГРАФИЙ
  // ──────────────────────────────────────
  // Положи фото в папку public/images/
  // src — путь начиная с /images/
  // Чтобы убрать галерею — сделай массив пустым: gallery: []
  gallery: [
    {
      id: "1",
      src: "/images/photo1.jpg",
      alt: "Моё фото",
      caption: "ꕤ описание фото",
    },
    {
      id: "2",
      src: "/images/photo2.jpg",
      alt: "Моё фото 2",
      caption: "ꕤ описание фото",
    },
    {
      id: "3",
      src: "/images/photo3.jpg",
      alt: "Моё фото 3",
      caption: "ꕤ описание фото",
    },
    // Добавь ещё фото по такому же шаблону
  ],

  // ──────────────────────────────────────
  // 🎵 МУЗЫКА / АУДИО
  // ──────────────────────────────────────
  // Положи mp3 файлы в папку public/audio/
  // src — путь начиная с /audio/
  // cover — обложка (опционально, из папки public/images/)
  // Чтобы убрать плеер — сделай массив пустым: audio: []
  audio: [
    {
      id: "1",
      title: "My Favourite Song",
      artist: "Artist Name",
      // Путь к аудио файлу: положи файл в public/audio/
      src: "/audio/song1.mp3",
      // Обложка (опционально): положи файл в public/images/
      cover: "/images/cover1.jpg",
    },
    // Добавь ещё треки по такому же шаблону
    // {
    //   id: "2",
    //   title: "Another Song",
    //   artist: "Artist",
    //   src: "/audio/song2.mp3",
    //   cover: "/images/cover2.jpg",
    // },
  ],

  // ──────────────────────────────────────
  // 🎬 ВИДЕО
  // ──────────────────────────────────────
  // Поддерживается YouTube и локальные mp4 файлы
  // Чтобы убрать видео — сделай массив пустым: videos: []
  videos: [
    {
      id: "1",
      title: "Моё любимое видео",
      // Тип: "youtube" или "local"
      type: "youtube" as const,
      // Для YouTube — ID видео из ссылки (часть после ?v=)
      // Например, в ссылке https://youtube.com/watch?v=dQw4w9WgXcQ — ID это dQw4w9WgXcQ
      youtubeId: "dQw4w9WgXcQ",
    },
    // Пример локального видео (файл в папке public/video/):
    // {
    //   id: "2",
    //   title: "Моё видео",
    //   type: "local" as const,
    //   src: "/video/myvideo.mp4",
    // },
  ],

  // ──────────────────────────────────────
  // 🎨 НАСТРОЙКИ ВНЕШНЕГО ВИДА
  // ──────────────────────────────────────
  // Показывать ли секции (true = показывать, false = скрыть)
  sections: {
    gallery: true,
    audio: true,
    videos: true,
  },
};

// ──────────────────────────────────────
// ТИПЫ TypeScript (не трогай это)
// ──────────────────────────────────────

export type YoutubeVideo = {
  id: string;
  title: string;
  type: "youtube";
  youtubeId: string;
};

export type LocalVideo = {
  id: string;
  title: string;
  type: "local";
  src: string;
};

export type VideoItem = YoutubeVideo | LocalVideo;

export type SiteConfig = typeof siteConfig;
