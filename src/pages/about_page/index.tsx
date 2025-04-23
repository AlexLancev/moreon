import {
  About_questions,
  About_reviews,
  Fitness_area,
  Gallery,
  Personal_format,
  Profitable_visits,
} from "./components";

import { get_tabs_store } from "@/stores";

import {
  Effective_training,
  Every_card,
  Stock,
  Team,
  Water_zone,
} from "@/components";

export const About_page = () => {
  return (
    <>
      <Gallery />
      <Effective_training />
      <Stock />
      <Personal_format tabs_store={get_tabs_store("component_personal")} />
      <Team tabs_store={''} />
      <Fitness_area tabs_store={get_tabs_store("component_fitness_area")} />
      <Water_zone tabs_store={get_tabs_store("component_water_zone")} />
      <About_questions />
      <Profitable_visits />
      <Every_card />
      <About_reviews />
    </>
  );
};
