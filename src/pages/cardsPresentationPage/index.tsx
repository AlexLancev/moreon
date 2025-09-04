import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import xss from "xss";

import { Container, ContentLoader, EveryCard } from "@/components";
import {
  cardsPresentationDefaultData,
  SkeletonFitnessClubCard,
} from "@/constans";
import { getTabsStore } from "@/stores";
import { clubCardsStore } from "@/stores/dataStore";

import { RenderCardDescription } from "./components/renderCardDescription";

const CardsPresentationPage = observer(() => {
  const { data, isLoading } = clubCardsStore;
  const { path } = useParams<{ path: ClubCardsKeyType }>();

  if (!path) return null;

  const currentCard = toJS(data?.[0])?.[path];

  const { imagesUrl, pageDescription, heroDescription } =
    currentCard ?? cardsPresentationDefaultData;

  const sanitizedHeroDescription = xss(heroDescription);

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
          currentStore={clubCardsStore}
          skeletonComponent={SkeletonFitnessClubCard}
          initialVisibleCount={1}
        >
          <div
            className="customInsertCardPageHTML mb-5 max-w-[750px] 2xl:max-w-[950px]"
            dangerouslySetInnerHTML={{ __html: sanitizedHeroDescription }}
          ></div>
        </ContentLoader>
      </section>
      <RenderCardDescription
        imagesUrl={imagesUrl}
        pageDescription={pageDescription}
        tabsStore={
          getTabsStore("componentPageChooseYourCard") as RenderCardTabsType
        }
      />
      <EveryCard />
    </Container>
  );
});

export default CardsPresentationPage;
