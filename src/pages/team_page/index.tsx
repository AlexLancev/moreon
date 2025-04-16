import { Team } from "components";

import { Tabs_store } from "stores/tabs_store";

import { Team_hero } from "./components";

const team_tabs_store = new Tabs_store();

export const Team_page = () => {
  return (
    <>
      <Team_hero />
      <Team tabs_store={team_tabs_store} />
    </>
  );
};
