import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";

import { AreasStudy, Container, TeamList, Title } from "@/components";
import { directionsPageDefault } from "@/constans";
import { directionsStore } from "@/stores/dataStore";

import { HeroDirections } from "./components/heroDirections";

const KidsFitnessPage = observer(() => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const service = pathSegments[pathSegments.length - 1] as DirectKeysType;

  const { data } = directionsStore;

  if (!service) return null;

  const { directions, team, hero } =
    toJS(data[0])?.[service] ?? directionsPageDefault;

  return (
    <>
      <Container>
        <HeroDirections data={hero} />
      </Container>
      <AreasStudy keysList={directions} />
      <section className="py-10">
        <Container>
          <Title className="mb-3 md:mb-6 lg:mb-8 2xl:mb-12">
            <span className="text-customHeadDecor">Тренеры</span> направления
          </Title>
          <TeamList isActiveTab={team} />
        </Container>
      </section>
    </>
  );
});

export default KidsFitnessPage;
