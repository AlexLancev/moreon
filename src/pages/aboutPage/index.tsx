import {
  EffectiveTraining,
  EveryCard,
  Stock,
  Team,
  WaterZone,
} from "@/components";
import { getTabsStore } from "@/stores";

import {
  AboutQuestions,
  AboutReviews,
  FitnessArea,
  Gallery,
  PersonalFormat,
  ProfitableVisits,
} from "./components";

import { tabsStoreType } from "./components/personalFormat";

const AboutPage = () => {
  return (
    <>
      <Gallery />
      <EffectiveTraining />
      <Stock />
      <PersonalFormat
        tabsStore={
          getTabsStore(
            "componentPersonal",
          ) as tabsStoreType<PersonalFormatKeyType>
        }
      />
      <Team tabsStore={getTabsStore("componentTeam") as TeamKeyType} />
      <FitnessArea
        tabsStore={getTabsStore("componentFitnessArea") as FitnessAreaTabsType}
      />
      <WaterZone
        tabsStore={getTabsStore("componentWaterZone") as WaterZoneTabsType}
      />
      <AboutQuestions />
      <ProfitableVisits />
      <EveryCard />
      <AboutReviews />
    </>
  );
};

export default AboutPage;
