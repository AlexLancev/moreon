import {
  AboutUs,
  CalculateCost,
  Contacts,
  FreezeCard,
  PhytoBar,
  Stock,
  Team,
} from "@/components";

import { useTabsStore } from "@/hooks";

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
  const teamStore = useTabsStore<TeamTabKeyType>("gym");

  return (
    <>
      <HomeHero />
      <DreamBody />
      <Stock />
      <CalculateCost />
      <ClubNews />
      <AboutUs />
      <VideoReviews />
      <Team tabsStore={teamStore} />
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
