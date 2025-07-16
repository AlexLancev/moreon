import { Services_hero } from "./components";

import {
  Areas_study,
  Childrens_center,
  Choose_your_card,
  Freeze_card,
  Phyto_bar,
  Team,
  Water_zone,
} from "@/components";

import { get_tabs_store } from "@/stores";

const keys_list: Direct_keys_type[] = [
  "mind_body",
  "strength_functional_training",
  "aerobics",
  "gym",
  "pool",
  "martial_arts",
  "dance",
  "personal_training",
  "yoga",
  "test",
  "group_training",
];

const Services_page = () => {
  return (
    <>
      <Services_hero />
      {/* <Areas_study keys_list={keys_list} />
      <Team tabs_store={get_tabs_store("component_team") as Team_key_type} />
      <Choose_your_card
        tabs_store={
          get_tabs_store("component_choose_your_card") as Club_cards_tabs_type
        }
      />
      <Freeze_card />
      <Childrens_center />
      <Water_zone
        tabs_store={
          get_tabs_store("component_water_zone") as Water_zone_tabs_type
        }
      />
      <Phyto_bar /> */}
    </>
  );
};

export default Services_page;
