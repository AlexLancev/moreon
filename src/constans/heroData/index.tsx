import {
  IdCard as IconIdCard,
  NotebookText as IconNotebookText,
} from "lucide-react";

export const servicesData: HeroDataType = {
  title: {
    general: "Услуги",
    decor: "Moreon Fitness",
  },
  images_url: {
    webp: "services_hero/service_bg.webp",
    png: "services_hero/service_bg.png",
  },
  button: {
    label: "Гостевой визит",
    iconBtn: <IconNotebookText />,
  },
};

export const teamData: HeroDataType = {
  title: {
    general: "Наша команда",
  },
  images_url: {
    webp: "team_hero/hero.webp",
    jpg: "team_hero/hero.jpeg",
  },
  button: {
    label: "Гостевой визит",
    iconBtn: <IconNotebookText />,
  },
};

export const clubCardsData: HeroDataType = {
  title: {
    general: "Клубные карты",
  },
  images_url: {
    webp: "club_cards_hero/card.webp",
    jpg: "club_cards_hero/card.jpg",
  },
  button: {
    label: "Выбрать клубную карту",
    iconBtn: <IconIdCard />,
  },
};

export const saunasPoolsData: HeroDataType = {
  title: {
    general: "Бани и бассейны",
  },
  images_url: {
    webp: "saunas_pools_hero/hero_bg.webp",
    jpg: "saunas_pools_hero/hero_bg.jpeg",
  },
  button: {
    label: "Гостевой визит",
    iconBtn: <IconNotebookText />,
  },
};

export const kidsFitnesData: HeroDataType = {
  title: {
    general: "Детский фитнес",
  },
  images_url: {
    webp: "kids_fitnes_hero/kids_hero.webp",
    jpg: "kids_fitnes_hero/kids_hero.jpeg",
  },
  button: {
    label: "Гостевой визит",
    iconBtn: <IconNotebookText />,
  },
};
