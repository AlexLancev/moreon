import { paths } from "@/paths";

const {
  about_club,
  services,
  team,
  club_cards,
  pools,
  kids_fitness,
  mind_body,
  strength_functional_training,
  aerobics,
  gym,
  pool,
  martial_arts,
  dance,
  personal_training,
  yoga,
  inbody,
  group_programs,
  news_page,
  stock_page,
} = paths;

export const menu_data = [
  { path: about_club, name_link: "О клубе" },
  {
    path: services,
    name_link: "Услуги",
    sub_menu: [
      { path: mind_body, name_link: "Mind Body" },
      {
        path: strength_functional_training,
        name_link: "Силовые и функциональные тренировки",
      },
      {
        path: aerobics,
        name_link: "Кардиопрограммы и аэробика",
      },
      { path: gym, name_link: "Тренажерный зал" },
      { path: pool, name_link: "Водные программы" },
      { path: martial_arts, name_link: "Единоборства" },
      { path: dance, name_link: "Танцы" },
      {
        path: personal_training,
        name_link: "Персональный тренинг",
      },
      { path: yoga, name_link: "Йога" },
      { path: inbody, name_link: "InBody" },
      { path: group_programs, name_link: "Групповые программы" },
    ],
  },
  { path: team, name_link: "Команда" },
  { path: club_cards, name_link: "Клубные карты" },
  { path: stock_page, name_link: "Акции" },
  { path: news_page, name_link: "Новости" },
  { path: pools, name_link: "Бани и бассейны" },
  { path: kids_fitness, name_link: "Детский фитнес" },
];
