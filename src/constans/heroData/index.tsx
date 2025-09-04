import {
  IdCard as IconIdCard,
  NotebookText as IconNotebookText,
} from "lucide-react";

export const servicesData: HeroDataTypes = {
  title: {
    general: "Услуги",
    decor: "Moreon Fitness",
  },
  imagesUrl: {
    webp: "services_hero/service_bg.webp",
    png: "services_hero/service_bg.png",
  },
  button: {
    label: "Гостевой визит",
    iconBtn: <IconNotebookText />,
  },
};

export const teamData: HeroDataTypes = {
  title: {
    general: "Наша команда",
  },
  imagesUrl: {
    webp: "team_hero/hero.webp",
    jpg: "team_hero/hero.jpeg",
  },
  button: {
    label: "Гостевой визит",
    iconBtn: <IconNotebookText />,
  },
};

export const clubCardsData: HeroDataTypes = {
  title: {
    general: "Клубные карты",
  },
  imagesUrl: {
    webp: "club_cards_hero/card.webp",
    jpg: "club_cards_hero/card.jpg",
  },
  button: {
    label: "Выбрать клубную карту",
    iconBtn: <IconIdCard />,
  },
};

export const saunasPoolsData: HeroDataTypes = {
  title: {
    general: "Бани и бассейны",
  },
  imagesUrl: {
    webp: "saunas_pools_hero/hero_bg.webp",
    jpg: "saunas_pools_hero/hero_bg.jpeg",
  },
  button: {
    label: "Гостевой визит",
    iconBtn: <IconNotebookText />,
  },
};

export const kidsFitnesData: HeroDataTypes = {
  title: {
    general: "Детский фитнес",
  },
  imagesUrl: {
    webp: "kids_fitnes_hero/kids_hero.webp",
    jpg: "kids_fitnes_hero/kids_hero.jpeg",
  },
  button: {
    label: "Гостевой визит",
    iconBtn: <IconNotebookText />,
  },
};
