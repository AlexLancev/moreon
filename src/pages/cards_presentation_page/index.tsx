import { toJS } from "mobx";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import xss from "xss";

import { Container } from "@/components";
import { club_cards_store } from "@/stores/data_store";
import { Render_card_description } from "./components/render_card_description";
import { get_tabs_store } from "@/stores";

export const Cards_presentation_page = observer(() => {
  const { data, isLoading, isError } = club_cards_store;
  const { path } = useParams<{ path: Club_cards_key_type }>();

  const club_cards_bd = toJS(data?.[0]);

  if (!club_cards_bd || !path) return null;

  const current_card = club_cards_bd[path];

  if (!current_card) return null;

  const { head, description, images_url, page_description, hero_description } =
    current_card;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch data</div>;

  const sanitized_hero_description = xss(hero_description) ?? "";

  return (
    <Container>
      <section className="relative py-12 px-10">
        <picture>
          <source
            srcSet="/images/cards_presentation/classik.webp"
            type="image/webp"
          />
          <img
            className="absolute inset-0 -z-10 w-full h-full bg-no-repeat bg-cover"
            src="/images/cards_presentation/classik.jpg"
            alt=""
            aria-hidden
          />
        </picture>
        <div
          className="mb-5 ab"
          dangerouslySetInnerHTML={{ __html: sanitized_hero_description }}
        ></div>
      </section>
      <Render_card_description
        images_url={images_url}
        page_description={page_description}
        tabs_store={get_tabs_store("component_choose_your_card")}
      />
    </Container>
  );
});
