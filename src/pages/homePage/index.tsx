import {
  AboutUs,
  CalculateCost,
  Contacts,
  FreezeCard,
  PhytoBar,
  Stock,
  Team,
} from "@/components";

import { getTabsStore } from "@/stores";

import {
  ClubNews,
  DreamBody,
  FitnessClub,
  HomeHero,
  VideoReviews,
  OtherDirections,
  OurApplication,
} from "./components";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <DreamBody />
      <Stock />
      <CalculateCost />
      <ClubNews />
      <AboutUs />
      <VideoReviews />
      <Team tabsStore={getTabsStore("componentTeam") as TeamKeyType} />
      <OurApplication />
      <FreezeCard />
      <PhytoBar />
      <OtherDirections />
      <FitnessClub />
      <Contacts />
    </>
  );
};

export default HomePage;
