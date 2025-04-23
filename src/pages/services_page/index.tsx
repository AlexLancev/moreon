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

const keys_list = [
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
  "kids_fitnes",
  "group_training",
];

export const Services_page = () => {
  return (
    <>
      <Services_hero />
      <Areas_study keys_list={keys_list} />
      <Team tabs_store={get_tabs_store("component_team")} />
      <Choose_your_card
        tabs_store={get_tabs_store("component_choose_your_card")}
      />
      <Freeze_card />
      <Childrens_center />
      <Water_zone tabs_store={get_tabs_store("component_water_zone")} />
      <Phyto_bar />
    </>
  );
};
