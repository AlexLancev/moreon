import { Tabs_store } from "stores/tabs_store";

import {
  About_us,
  Contacts,
  Freeze_card,
  Phyto_bar,
  Stock,
  Team,
} from "components";

import {
  Club_news,
  Dream_body,
  Fitness_club,
  Home_hero,
  Other_directions,
  Our_application,
  Video_reviews,
} from "./components";

const team_tabs_store = new Tabs_store();

export const Home_page = () => {
  return (
    <>
      <Home_hero />
      <Dream_body />
      <Stock />
      <Club_news />
      <About_us />
      <Video_reviews />
      <Team tabs_store={team_tabs_store} />
      <Our_application />
      <Freeze_card />
      <Phyto_bar />
      <Other_directions />
      <Fitness_club />
      <Contacts />
    </>
  );
};
