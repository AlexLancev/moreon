import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

import { NotebookText } from "lucide-react";

import { directions_store, team_store } from "@/stores/data_store";
import { modal_store } from "@/stores";
import { Areas_study, Container, Team_list, Title } from "@/components";
import { Button } from "@/components/ui/button";

export const Presentation_directions_page = observer(() => {
  const { isVisibleModal, change_modal } = modal_store;
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const service = pathSegments[pathSegments.length - 1] as Direct_keys_type;

  const {
    data: directions_data,
    isLoading: directions_isLoading,
    isError: directions_isError,
  } = directions_store;

  const {
    data: team_data,
    isLoading: team_isLoading,
    isError: team_isError,
  } = team_store;

  if (directions_isLoading || team_isLoading) return <div>Loading...</div>;
  if (directions_isError || team_isError)
    return <div>Error: Failed to fetch data</div>;

  if (!directions_data || !team_data || !service || team_data.length === 0)
    return null;

  const directions_bd = toJS(directions_data?.[0]);

  const {
    directions,
    team,
    hero: {
      description,
      images_url: { jpg, webp },
    },
  } = directions_bd[service] ?? {};

  if (!directions || !team) return null;

  return (
    <>
      <Container>
        <section className="relative min-h-[400px] py-20 px-10 after:absolute after:inset-0 after:bg-black/80 before:absolute before:left-28 before:top-28 before:w-[138px] before:h-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px]">
          <picture>
            <source srcSet={webp} type="image/webp" />
            <img
              className="absolute inset-0 w-full h-full object-cover -z-10"
              src={jpg}
              alt=""
              aria-hidden
            />
          </picture>
          <div className="relative w-full max-w-[525px] z-10">
            <div
              className="ab"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
            <Button onClick={() => change_modal(!isVisibleModal)}>
              Гостевой визит <NotebookText />
            </Button>
          </div>
        </section>
      </Container>
      <Areas_study keys_list={directions} />
      <section className="py-10">
        <Container>
          <Title>
            <span className="head_decor">Тренеры</span> направления
          </Title>
          <Team_list isActiveTab={team} />
        </Container>
      </section>
    </>
  );
});
