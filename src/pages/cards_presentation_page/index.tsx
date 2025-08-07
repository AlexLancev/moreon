import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import xss from "xss";

import { Container, ContentLoader, Every_card } from "@/components";
import {
  cardsPresentationDefaultData,
  SkeletonFitnessClubCard,
} from "@/constans";
import { get_tabs_store } from "@/stores";
import { club_cards_store } from "@/stores/data_store";

import { Render_card_description } from "./components/render_card_description";

const Cards_presentation_page = observer(() => {
  const { data, isLoading } = club_cards_store;
  const { path } = useParams<{ path: Club_cards_key_type }>();

  if (!path) return null;

  const currentCard = toJS(data?.[0])?.[path];

  const { images_url, page_description, hero_description } =
    currentCard ?? cardsPresentationDefaultData;

  const sanitized_hero_description = xss(hero_description);

  return (
    <Container>
      <section className="relative px-2.5 py-3 md:px-10 md:py-12 xl:text-xl 2xl:text-2xl">
        {!isLoading && (
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
        )}
        <ContentLoader
          currentStore={club_cards_store}
          skeletonComponent={SkeletonFitnessClubCard}
          initialVisibleCount={1}
        >
          <div
            className="customInsertCardPageHTML mb-5 max-w-[750px] 2xl:max-w-[950px]"
            dangerouslySetInnerHTML={{ __html: sanitized_hero_description }}
          ></div>
        </ContentLoader>
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
