import { observer } from "mobx-react-lite";

import { Container, ContentLoader, Stock } from "@/components";
import { SkeletonFitnessCard } from "@/constans";
import { useTabsStore } from "@/hooks";
import { teamStore } from "@/stores/dataStore";

import { FitnessArea, ProfitableVisits } from "../aboutPage/components";

import { HeroTeam } from "./components/heroTeam";

const PersonTeamPage = observer(() => {
  const { data } = teamStore;
  const fitnessAreaStore = useTabsStore<TabFitnessType>("gym");

  return (
    <>
      <section className="py-12">
        <Container>
          <ContentLoader
            currentStore={teamStore}
            skeletonComponent={SkeletonFitnessCard}
            initialVisibleCount={1}
          >
            <HeroTeam data={data} />
          </ContentLoader>
        </Container>
      </section>
      <Stock />
      <FitnessArea tabsStore={fitnessAreaStore} />
      <ProfitableVisits />
    </>
  );
});

export default PersonTeamPage;
