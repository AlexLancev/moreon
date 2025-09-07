import {
  AboutUs,
  ChooseYourCard,
  EffectiveTraining,
  EveryCard,
  Stock,
} from "components";

import { useTabsStore } from "@/hooks";

import { ClubCardsHero } from "./components";

const ClubCards = () => {
  const cardStore = useTabsStore<ClubCardsKeyType>("fitnes");

  return (
    <>
      <ClubCardsHero />
      <ChooseYourCard tabsStore={cardStore} />
      <EffectiveTraining />
      <EveryCard />
      <AboutUs />
      <Stock />
    </>
  );
};

export default ClubCards;
