import {
  Club_news,
  Dream_body,
  Fitness_club,
  Home_hero,
  Other_directions,
  Our_application,
  Video_reviews,
} from "./components";

import {
  About_us,
  Calculate_cost,
  Contacts,
  Freeze_card,
  Phyto_bar,
  Stock,
  Team,
} from "@/components";

import { get_tabs_store } from "@/stores";

const Home_page = () => {
  return (
    <>
      {/* <Home_hero /> */}
      <Dream_body />
      {/* <Stock />
      <Calculate_cost />
      <Club_news />
      <About_us />
      <Video_reviews />
      <Team tabs_store={get_tabs_store("component_team") as Team_key_type} />
      <Our_application />
      <Freeze_card />
      <Phyto_bar />
      <Other_directions />
      <Fitness_club />
      <Contacts /> */}
    </>
  );
};

export default Home_page;
