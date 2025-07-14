import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";

import { NotebookText } from "lucide-react";

import xss from "xss";

import { modal_store } from "@/stores";
import { directions_store } from "@/stores/data_store";
import { Container, Directions_list, Title } from "@/components";
import { Button } from "@/components/ui/button";

const Current_direction_page = observer(() => {
  const { isVisibleModal, change_modal } = modal_store;
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const service = pathSegments[pathSegments.length - 1] as Direct_keys_type;

  const {
    data: directions_data,
    isLoading: directions_isLoading,
    isError: directions_isError,
  } = directions_store;

  if (directions_isLoading) return <div>Загрузка...</div>;
  if (directions_isError) return <div>Ошибка: не удалось получить данные</div>;

  if (!directions_data || !service) return null;

  const directions_bd = toJS(directions_data?.[0]);

  const { hero, description_direction, directions } =
    directions_bd?.[service] ?? {};

  const sanitized_description = xss(hero?.description);

  return (
    <Container>
      <section className="relative min-h-[400px] px-10 py-20 before:absolute before:left-28 before:top-28 before:h-[138px] before:w-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px] after:absolute after:inset-0 after:bg-black/80">
        <picture>
          <source srcSet={hero?.images_url?.webp} type="image/webp" />
          <img
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            src={hero?.images_url?.jpg}
            alt=""
            loading="lazy"
            aria-hidden
          />
        </picture>
        <div className="relative z-10 w-full max-w-[525px]">
          <div
            className="customInsertHTML"
            dangerouslySetInnerHTML={{ __html: sanitized_description }}
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

              const sanitized_content = xss(content);

              return (
                <li
                  key={idx}
                  className="mb-20 flex items-center justify-center gap-8 last:mb-0 odd:flex-row-reverse"
                >
                  <picture>
                    <source srcSet={webp} type="image/webp" />
                    <img
                      width={525}
                      height={297}
                      className="max-h-[600] overflow-hidden rounded-3xl object-cover"
                      src={jpg}
                      alt=""
                      loading="lazy"
                      aria-hidden
                    />
                  </picture>
                  <div
                    className="customInsertPageHTML"
                    dangerouslySetInnerHTML={{ __html: sanitized_content }}
                  ></div>
                </li>
              );
            },
          )}
        </ul>
      )}
      {directions && directions.length !== 0 && (
        <section className="px-10 py-12">
          <Title>
            <span className="text-customHeadDecor">Другие</span> направления
          </Title>
          <Directions_list keys_list={directions} />
        </section>
      )}
    </Container>
  );
});

export default Current_direction_page;
