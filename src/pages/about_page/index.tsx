import { Tabs_store } from "stores/tabs_store";

import {
  Effective_training,
  Every_card,
  Stock,
  Team,
  Water_zone,
} from "components";

import {
  About_questions,
  About_reviews,
  Fitness_area,
  Gallery,
  Personal_format,
  Profitable_visits,
} from "./components";

const personal_tabs_store = new Tabs_store();
const team_tabs_store = new Tabs_store();
const fitness_area_tabs_store = new Tabs_store();
const water_zone_tabs_store = new Tabs_store();

export const About_page = () => {
  return (
    <>
      <Gallery />
      <Effective_training />
      <Stock />
      <Personal_format tabs_store={personal_tabs_store} />
      <Team tabs_store={team_tabs_store} />
      <Fitness_area tabs_store={fitness_area_tabs_store} />
      <Water_zone tabs_store={water_zone_tabs_store} />
      <About_questions />
      <Profitable_visits />
      <Every_card />
      <About_reviews />
    </>
  );
};
