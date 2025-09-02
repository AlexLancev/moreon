import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";

import { Areas_study, Container, Team_list, Title } from "@/components";
import { directionsPageDefault } from "@/constans";
import { directions_store } from "@/stores/data_store";

import { HeroDirections } from "./components/heroDirections";

const Kids_fitness_page = observer(() => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const service = pathSegments[pathSegments.length - 1] as Direct_keys_type;

  const { data } = directions_store;

  if (!service) return null;

  const { directions, team, hero } =
    toJS(data[0])?.[service] ?? directionsPageDefault;

  return (
    <>
      <Container>
        <HeroDirections data={hero} />
      </Container>
      <Areas_study keys_list={directions} />
      <section className="py-10">
        <Container>
          <Title className="mb-3 md:mb-6 lg:mb-8 2xl:mb-12">
            <span className="text-customHeadDecor">Тренеры</span> направления
          </Title>
          <Team_list isActiveTab={team} />
        </Container>
      </section>
    </>
  );
});

export default Kids_fitness_page;
