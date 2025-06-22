import { Team_hero } from "./components";

import { Team } from "@/components";

import { get_tabs_store } from "@/stores";

const Team_page = () => {
  return (
    <>
      <Team_hero />
      <Team tabs_store={get_tabs_store("component_team") as Team_key_type} />
    </>
  );
};

export default Team_page;
