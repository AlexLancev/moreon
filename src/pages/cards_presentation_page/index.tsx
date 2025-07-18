import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import xss from "xss";

import { Container, Every_card } from "@/components";
import { get_tabs_store } from "@/stores";
import { club_cards_store } from "@/stores/data_store";

import {
  Render_card_description,
  type Render_card_tabs_type,
} from "./components/render_card_description";

const Cards_presentation_page = observer(() => {
  const { data, isLoading, isError } = club_cards_store;
  const { path } = useParams<{ path: Club_cards_key_type }>();

  const club_cards_bd = toJS(data?.[0]);

  if (!club_cards_bd || !path) return null;

  const current_card = club_cards_bd[path];

  if (!current_card) return null;

  const { images_url, page_description, hero_description } = current_card;

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  const sanitized_hero_description = xss(hero_description) ?? "";

  return (
    <Container>
      <section className="relative px-2.5 py-3 md:px-10 md:py-12 xl:text-xl 2xl:text-2xl">
        <picture>
          <source
            srcSet="/images/cards_presentation/classik.webp"
            type="image/webp"
          />
          <img
            className="absolute inset-0 -z-10 h-full w-full bg-cover bg-no-repeat"
            src="/images/cards_presentation/classik.jpg"
            alt=""
            loading="lazy"
            aria-hidden
          />
        </picture>
        <div
          className="customInsertCardPageHTML mb-5 max-w-[750px] 2xl:max-w-[950px]"
          dangerouslySetInnerHTML={{ __html: sanitized_hero_description }}
        ></div>
      </section>
      <Render_card_description
        images_url={images_url}
        page_description={page_description}
        tabs_store={
          get_tabs_store("component_choose_your_card") as Render_card_tabs_type
        }
      />
      <Every_card />
    </Container>
  );
});

export default Cards_presentation_page;
