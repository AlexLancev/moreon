import {
  EffectiveTraining,
  EveryCard,
  Stock,
  Team,
  WaterZone,
} from "@/components";

import { useTabsStore } from "@/hooks";

import {
  AboutQuestions,
  AboutReviews,
  FitnessArea,
  Gallery,
  PersonalFormat,
  ProfitableVisits,
} from "./components";

const AboutPage = () => {
  const teamStore = useTabsStore<TeamTabKeyType>("gym");
  const personalFormatStore = useTabsStore<PersonalFormatKeyType>("gym");
  const fitnessAreaStore = useTabsStore<TabFitnessType>("gym");
  const waterZoneStore = useTabsStore<WaterZoneKeyType>("bathsSwimming");

  return (
    <>
      <Gallery />
      <EffectiveTraining />
      <Stock />
      <PersonalFormat tabsStore={personalFormatStore} />
      <Team tabsStore={teamStore} />
      <FitnessArea tabsStore={fitnessAreaStore} />
      <WaterZone tabsStore={waterZoneStore} />
      <AboutQuestions />
      <ProfitableVisits />
      <EveryCard />
      <AboutReviews />
    </>
  );
};

export default AboutPage;
