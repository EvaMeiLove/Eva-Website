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
      "✈️ Путешествия",
      "👗 Красивая одежда",
      "💻 ИТ",
      "🤖 ИИ",
      "⛓️ Блокчейн",
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
      description: "Туть можно написать мне",
    },
    {
      id: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/eva.mei.love/",
      icon: "instagram",
      color: "#E1306C",
      username: "@eva.mei.love",
      description: "Фоточки и истории",
    },
    {
      id: "reddit",
      label: "Reddit",
      url: "https://www.reddit.com/user/brachenlo/",
      icon: "reddit",
      color: "#FF4500",
      username: "u/brachenlo",
      description: "Постики и обсуждения",
    },
    {
      id: "pinterest",
      label: "Pinterest",
      url: "https://www.pinterest.com/evameilove/",
      icon: "pinterest",
      color: "#E60023",
      username: "@evameilove",
      description: "Красота и вдохновение",
    },
    {
      id: "youtube",
      label: "YouTube",
      url: "https://www.youtube.com/@EvaMeiLove",
      icon: "youtube",
      color: "#FF0000",
      username: "@EvaMeiLove",
      description: "Возможно туть будут видео",
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
      description: "Дискордик можно найти по нику",
    },
    {
      id: "twitter",
      label: "X (Twitter)",
      url: "https://x.com/Eva_Mei_Moon",
      icon: "twitter",
      color: "#000000",
      username: "@Eva_Mei_Moon",
      description: "Когда-нибудь буду что-то постить",
    },
    {
      id: "tiktok",
      label: "TikTok",
      url: "https://www.tiktok.com/@eva_mei_love",
      icon: "tiktok",
      color: "#000000",
      username: "@eva_mei_love",
      description: "Возможно туть будут видео",
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
    { id: "1", src: "/images/1.jpg", alt: "Фото 1", caption: "🌸" },
    { id: "2", src: "/images/2.jpg", alt: "Фото 2", caption: "🌸" },
    { id: "3", src: "/images/3.jpg", alt: "Фото 3", caption: "🌸" },
    { id: "4", src: "/images/4.jpg", alt: "Фото 4", caption: "🌸" },
    // Добавь новые фото по тому же шаблону:
    // { id: "5", src: "/images/5.jpg", alt: "Фото 5", caption: "🌸" },
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
  // 🎵 МУЗЫКА С YOUTUBE MUSIC
  // ──────────────────────────────────────
  // Вставляй ссылки с music.youtube.com или youtube.com
  // ID — это часть ссылки после ?v= (например: nb1qRwEe0mw)
  // Название, артист и обложка подтягиваются автоматически!
  // Чтобы убрать секцию — сделай массив пустым: youtubeMusicTracks: []
  youtubeMusicTracks: [
    {
      id: "1",
      // Ссылка: https://music.youtube.com/watch?v=nb1qRwEe0mw
      youtubeId: "nb1qRwEe0mw",
    },
    {
      id: "2",
      // Ссылка: https://music.youtube.com/watch?v=8NoFd-ruKws
      youtubeId: "8NoFd-ruKws",
    },
    // Добавь ещё треки по тому же шаблону:
    // {
    //   id: "3",
    //   youtubeId: "ВОТ_ID_ИЗ_ССЫЛКИ",
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
      type: "youtube" as const,
      // ID из ссылки https://www.youtube.com/watch?v=WiJ5uVVoGEw
      youtubeId: "WiJ5uVVoGEw",
    },
    {
      id: "2",
      title: "Ещё одно любимое",
      type: "youtube" as const,
      // https://www.youtube.com/watch?v=h6fcK_fRYaI
      youtubeId: "h6fcK_fRYaI",
    },
    // Добавь ещё видео по тому же шаблону:
    // {
    //   id: "3",
    //   title: "Название",
    //   type: "youtube" as const,
    //   youtubeId: "ID_ИЗ_ССЫЛКИ",
    // },
  ],

  // ──────────────────────────────────────
  // 📊 АНАЛИТИКА И ВЕРИФИКАЦИЯ (только твои данные)
  // ──────────────────────────────────────
  // Пустые строки = ничего не подключается (удобно для копии сайта подруге).
  // Подруга: обнули оба поля и удали файл public/google*.html если он есть.
  analytics: {
    // Google Search Console — meta-тег (из настроек GSC)
    googleSiteVerification: "FC7fuX4FZXFneU9qj3FT_ajWF4_WKJuAQNY99HIXe2M",
    // Яндекс.Метрика — номер счётчика (только цифры)
    yandexMetrikaId: "108664576",
  },

  // ──────────────────────────────────────
  // 🎨 НАСТРОЙКИ ВНЕШНЕГО ВИДА
  // ──────────────────────────────────────
  // Показывать ли секции (true = показывать, false = скрыть)
  sections: {
    gallery: true,
    // Локальный аудиоплеер отключён — используй YouTube Music выше
    audio: false,
    youtubeMusicTracks: true,
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
