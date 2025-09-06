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
        tabsStore={
          getTabsStore("componentChooseYourCard") as TabType<ClubCardsKeyType>
        }
      />
      <EffectiveTraining />
      <EveryCard />
      <AboutUs />
      <Stock />
    </>
  );
};

export default ClubCards;
