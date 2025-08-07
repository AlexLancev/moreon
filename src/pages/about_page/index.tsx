import {
  Effective_training,
  Every_card,
  Stock,
  Team,
  Water_zone,
} from "@/components";

import { get_tabs_store } from "@/stores";

import {
  About_questions,
  About_reviews,
  Fitness_area,
  Gallery,
  Personal_format,
  Profitable_visits,
} from "./components";
import { tabs_store_type } from "./components/personal_format";

const About_page = () => {
  return (
    <>
      {/* <Gallery /> */}
      {/* <Effective_training /> */}
      {/* <Stock /> */}
      {/* <Personal_format
        tabs_store={
          get_tabs_store(
            "component_personal",
          ) as tabs_store_type<Personal_format_key_type>
        }
      /> */}
      {/* <Team tabs_store={get_tabs_store("component_team") as Team_key_type} /> */}
      <Fitness_area
        tabs_store={
          get_tabs_store("component_fitness_area") as Fitness_area_tabs_type
        }
      />
      {/* <Water_zone
        tabs_store={
          get_tabs_store("component_water_zone") as Water_zone_tabs_type
        }
      /> */}
      {/* <About_questions /> */}
      {/* <Profitable_visits /> */}
      {/* <Every_card /> */}
      {/* <About_reviews /> */}
    </>
  );
};

export default About_page;
