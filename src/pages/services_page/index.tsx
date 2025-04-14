import { Tabs_store } from "stores/tabs_store";

import { Choose_your_card, Team } from "components";

import { Areas_study, Services_hero } from "./components";

const team_tabs_store = new Tabs_store();

export const Services_page = () => {
  return (
    <>
      <Services_hero />
      <Areas_study />
      <Team tabs_store={team_tabs_store} />
      <Choose_your_card />
    </>
  );
};
