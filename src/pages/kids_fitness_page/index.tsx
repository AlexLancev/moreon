import { Other_directions } from "components";

import {
  Childrens_center,
  Childrens_swimming,
  Kids_fitnes_hero,
  Martial_arts_children,
} from "./components";

export const Kids_fitness_page = () => {
  return (
    <>
      <Kids_fitnes_hero />
      <Childrens_swimming />
      <Martial_arts_children />
      <Childrens_center />
      <Other_directions />
    </>
  );
};
