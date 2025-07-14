import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

import { NotebookText } from "lucide-react";

import { directions_store, team_store } from "@/stores/data_store";
import { modal_store } from "@/stores";
import { Areas_study, Container, Team_list, Title } from "@/components";
import { Button } from "@/components/ui/button";

const Kids_fitness_page = observer(() => {
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

  if (directions_isLoading || team_isLoading) return <div>Загрузка...</div>;
  if (directions_isError || team_isError)
    return <div>Ошибка: не удалось получить данные</div>;

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
        <section className="relative min-h-[400px] px-10 py-20 before:absolute before:left-28 before:top-28 before:h-[138px] before:w-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px] after:absolute after:inset-0 after:bg-black/80">
          <picture>
            <source srcSet={webp} type="image/webp" />
            <img
              className="absolute inset-0 -z-10 h-full w-full object-cover"
              src={jpg}
              alt=""
              loading="lazy"
              aria-hidden
            />
          </picture>
          <div className="relative z-10 w-full max-w-[525px]">
            <div
              className="customInsertHTML"
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
            <span className="text-customHeadDecor">Тренеры</span> направления
          </Title>
          <Team_list isActiveTab={team} />
        </Container>
      </section>
    </>
  );
});

export default Kids_fitness_page;
