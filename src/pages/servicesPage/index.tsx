import {
  AreasStudy,
  ChildrensCenter,
  ChooseYourCard,
  FreezeCard,
  PhytoBar,
  Team,
  WaterZone,
} from "@/components";
import { getTabsStore } from "@/stores";

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
  return (
    <>
      <ServicesHero />
      <AreasStudy keysList={keysList} />
      <Team tabsStore={getTabsStore("componentTeam") as TeamKeyType} />
      <ChooseYourCard
        tabsStore={
          getTabsStore("componentServicesChooseYourCard") as ClubCardsTabsType
        }
      />
      <FreezeCard />
      <ChildrensCenter />
      <WaterZone
        tabsStore={getTabsStore("componentWaterZone") as WaterZoneTabsType}
      />
      <PhytoBar />
    </>
  );
};

export default ServicesPage;
