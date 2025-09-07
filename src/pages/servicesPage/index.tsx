import {
  AreasStudy,
  ChildrensCenter,
  ChooseYourCard,
  FreezeCard,
  PhytoBar,
  Team,
  WaterZone,
} from "@/components";

import { useTabsStore } from "@/hooks";

import { ServicesHero } from "./components";

const keysList = [
  "mindBody",
  "strengthFunctionalTraining",
  "aerobics",
  "gym",
  "pool",
  "martialArts",
  "dance",
  "personalTraining",
  "yoga",
  "test",
  "groupTraining",
] as const;

const ServicesPage = () => {
  const teamStore = useTabsStore<TeamTabKeyType>("gym");
  const cardStore = useTabsStore<ClubCardsKeyType>("fitnes");
  const waterZoneStore = useTabsStore<WaterZoneKeyType>("bathsSwimming");

  return (
    <>
      <ServicesHero />
      <AreasStudy keysList={keysList} />
      <Team tabsStore={teamStore} />
      <ChooseYourCard tabsStore={cardStore} />
      <FreezeCard />
      <ChildrensCenter />
      <WaterZone tabsStore={waterZoneStore} />
      <PhytoBar />
    </>
  );
};

export default ServicesPage;
