import { paths } from "@/paths";

const {
  aboutClub,
  services,
  team,
  clubCards,
  pools,
  kidsFitness,
  mindBody,
  strengthFunctionalTraining,
  aerobics,
  gym,
  pool,
  martialArts,
  dance,
  personalTraining,
  yoga,
  inbody,
  groupPrograms,
  newsPage,
  stockPage,
} = paths;

export const menuData = [
  { path: aboutClub, nameLink: "О клубе" },
  {
    path: services,
    nameLink: "Услуги",
    subMenu: [
      { path: mindBody, nameLink: "Mind Body" },
      {
        path: strengthFunctionalTraining,
        nameLink: "Силовые и функциональные тренировки",
      },
      {
        path: aerobics,
        nameLink: "Кардиопрограммы и аэробика",
      },
      { path: gym, nameLink: "Тренажерный зал" },
      { path: pool, nameLink: "Водные программы" },
      { path: martialArts, nameLink: "Единоборства" },
      { path: dance, nameLink: "Танцы" },
      {
        path: personalTraining,
        nameLink: "Персональный тренинг",
      },
      { path: yoga, nameLink: "Йога" },
      { path: inbody, nameLink: "InBody" },
      { path: groupPrograms, nameLink: "Групповые программы" },
    ],
  },
  { path: team, nameLink: "Команда" },
  { path: clubCards, nameLink: "Клубные карты" },
  { path: stockPage, nameLink: "Акции" },
  { path: newsPage, nameLink: "Новости" },
  { path: pools, nameLink: "Бани и бассейны" },
  { path: kidsFitness, nameLink: "Детский фитнес" },
];
