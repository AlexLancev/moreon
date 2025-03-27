import { Contacts } from "components";

import {
  About_us,
  Club_news,
  Dream_body,
  Fitness_club,
  Freeze_card,
  Home_hero,
  Other_directions,
  Our_application,
  Phyto_bar,
  Stock,
  Team,
  Video_reviews,
} from "./components";

export const Home_page = () => {
  return (
    <>
      <Home_hero />
      <Dream_body />
      <Stock />
      <Club_news />
      <About_us />
      <Video_reviews />
      <Team />
      <Our_application />
      <Freeze_card />
      <Phyto_bar />
      <Other_directions />
      <Fitness_club />
      <Contacts />
    </>
  );
};
