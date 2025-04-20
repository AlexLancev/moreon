import { Areas_study, Trainers_direction } from "components";

import { Saunas_pools_hero } from "./components";

const keys_list = ["sports_pool", "spa", "thermal_baths", "goldfish"];

export const Saunas_pools_page = () => {
  return (
    <>
      <Saunas_pools_hero />
      <Areas_study keys_list={keys_list} />
      <Trainers_direction direction={"pool"} />
    </>
  );
};
