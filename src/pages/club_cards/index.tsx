import {
  About_us,
  Choose_your_card,
  Effective_training,
  Every_card,
  Stock,
} from "components";

import { get_tabs_store } from "@/stores";

import { Club_cards_hero } from "./components";

const Club_cards = () => {
  return (
    <>
      <Club_cards_hero />
      <Choose_your_card
        tabs_store={
          get_tabs_store("component_choose_your_card") as Club_cards_tabs_type
        }
      />
      <Effective_training />
      <Every_card />
      <About_us />
      <Stock />
    </>
  );
};

export default Club_cards;
