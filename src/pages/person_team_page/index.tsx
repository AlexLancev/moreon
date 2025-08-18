import { observer } from "mobx-react-lite";

import { Container, ContentLoader, Stock } from "@/components";
import { SkeletonFitnessCard } from "@/constans";
import { get_tabs_store } from "@/stores";
import { team_store } from "@/stores/data_store";

import { Fitness_area, Profitable_visits } from "../about_page/components";

import { HeroTeam } from "./components/heroTeam";

const Person_team_page = observer(() => {
  const { data } = team_store;

  return (
    <>
      <section className="py-12">
        <Container>
          <ContentLoader
            currentStore={team_store}
            skeletonComponent={SkeletonFitnessCard}
            initialVisibleCount={1}
          >
            <HeroTeam data={data} />
          </ContentLoader>
        </Container>
      </section>
      <Stock />
      <Fitness_area
        tabs_store={
          get_tabs_store("component_fitness_area") as Fitness_area_tabs_type
        }
      />
      <Profitable_visits />
    </>
  );
});

export default Person_team_page;
