import {
  About_us,
  Choose_your_card,
  Effective_training,
  Every_card,
  Stock,
} from "components";

import { Tabs_store } from "stores/tabs_store";

import { Club_cards_hero } from "./components";

const choose_your_card_store = new Tabs_store();

export const Club_cards = () => {
  return (
    <>
      <Club_cards_hero />
      <Choose_your_card tabs_store={choose_your_card_store} />
      <Effective_training />
      <Every_card />
      <About_us />
      <Stock />
    </>
  );
};
