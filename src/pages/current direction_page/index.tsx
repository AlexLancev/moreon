import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";

import { modal_store } from "@/stores";
import { directions_store } from "@/stores/data_store";
import { Container, Directions_list, Title } from "@/components";
import { Button } from "@/components/ui/button";
import { NotebookText } from "lucide-react";

export const Current_direction_page = observer(() => {
  const { isVisibleModal, change_modal } = modal_store;
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const service = pathSegments[pathSegments.length - 1] as Direct_keys_type;

  const {
    data: directions_data,
    isLoading: directions_isLoading,
    isError: directions_isError,
  } = directions_store;

  if (directions_isLoading) return <div>Loading...</div>;
  if (directions_isError) return <div>Error: Failed to fetch data</div>;

  if (!directions_data || !service) return null;

  const directions_bd = toJS(directions_data?.[0]);

  const { hero, description_direction, directions } =
    directions_bd?.[service] ?? {};

  return (
    <Container>
      <section className="relative min-h-[400px] py-20 px-10 after:absolute after:inset-0 after:bg-black/80 before:absolute before:left-28 before:top-28 before:w-[138px] before:h-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px]">
        <picture>
          <source srcSet={hero?.images_url?.webp} type="image/webp" />
          <img
            className="absolute inset-0 w-full h-full object-cover -z-10"
            src={hero?.images_url?.jpg}
            alt=""
            aria-hidden
          />
        </picture>
        <div className="relative w-full max-w-[525px] z-10">
          <div
            className="ab"
            dangerouslySetInnerHTML={{ __html: hero?.description }}
          ></div>
          <Button onClick={() => change_modal(!isVisibleModal)}>
            Гостевой визит <NotebookText />
          </Button>
        </div>
      </section>
      {description_direction && description_direction.length !== 0 && (
        <ul className="py-12">
          {description_direction.map(
            ({ content, images_url: { jpg, webp } }, idx) => {
              if (!content && !jpg && !webp) return null;

              return (
                <li
                  key={idx}
                  className="flex items-center justify-center gap-8 odd:flex-row-reverse mb-20 last:mb-0"
                >
                  <picture>
                    <source srcSet={webp} type="image/webp" />
                    <img
                      width={525}
                      height={297}
                      className="max-h-[600] rounded-3xl overflow-hidden object-cover"
                      src={jpg}
                      alt=""
                      aria-hidden
                    />
                  </picture>
                  <div
                    className="current-direction w-full max-w-[525px]"
                    dangerouslySetInnerHTML={{ __html: content }}
                  ></div>
                </li>
              );
            },
          )}
        </ul>
      )}
      {directions && directions.length !== 0 && (
        <section className="py-12 px-10">
          <Title>
            <span className="head_decor">Другие</span> направления
          </Title>
          <Directions_list keys_list={directions} />
        </section>
      )}
    </Container>
  );
});
