import { Tabs_store } from "stores/tabs_store";

import {
  Childrens_center,
  Choose_your_card,
  Freeze_card,
  Phyto_bar,
  Team,
  Water_zone,
} from "components";

import { Areas_study, Services_hero } from "./components";

const team_tabs_store = new Tabs_store();
const choose_your_card_store = new Tabs_store();
const water_zone_tabs_store = new Tabs_store();

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
      <Team tabs_store={team_tabs_store} />
      <Choose_your_card tabs_store={choose_your_card_store} />
      <Freeze_card />
      <Childrens_center />
      <Water_zone tabs_store={water_zone_tabs_store} />
      <Phyto_bar />
    </>
  );
};
