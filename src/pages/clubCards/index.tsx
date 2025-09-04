import {
  AboutUs,
  ChooseYourCard,
  EffectiveTraining,
  EveryCard,
  Stock,
} from "components";

import { getTabsStore } from "@/stores";

import { ClubCardsHero } from "./components";

const ClubCards = () => {
  return (
    <>
      <ClubCardsHero />
      <ChooseYourCard
        tabsStore={getTabsStore("componentChooseYourCard") as ClubCardsTabsType}
      />
      <EffectiveTraining />
      <EveryCard />
      <AboutUs />
      <Stock />
    </>
  );
};

export default ClubCards;
