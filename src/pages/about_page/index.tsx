import { Tabs_store } from "stores/tabs_store";

import { Team } from "components";

import {
  Effective_training,
  Gallery,
  Personal_format,
  Stock,
} from "./components";

const personal_tabs_store = new Tabs_store();
const team_tabs_store = new Tabs_store();

export const About_page = () => {
  return (
    <>
      <Gallery />
      <Effective_training />
      <Stock />
      <Personal_format tabs_store={personal_tabs_store} />
      <Team tabs_store={team_tabs_store} />
    </>
  );
};
