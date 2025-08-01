import { Areas_study, Trainers_direction } from "components";

import { Saunas_pools_hero } from "./components";

const keys_list: Direct_keys_type[] = [
  "sports_pool",
  "spa",
  "thermal_baths",
  "goldfish",
];

const Saunas_pools_page = () => {
  return (
    <>
      <Saunas_pools_hero />
      <Areas_study keys_list={keys_list} />
      <Trainers_direction direction={"pool"} />
    </>
  );
};

export default Saunas_pools_page;
