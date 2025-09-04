import { NotebookText as IconNotebookText } from "lucide-react";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";
import xss from "xss";

import { Container, ContentLoader, DirectionsList, Title } from "@/components";
import { Button } from "@/components/ui/button";
import {
  BenefitsCardSkeleton,
  currentDirectionDeafaultData,
  HeroSkeleton,
} from "@/constans";
import { modalStore } from "@/stores";
import { directionsStore } from "@/stores/dataStore";

const CurrentDirectionPage = observer(() => {
  const { isVisibleModal, changeModal } = modalStore;
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const service = pathSegments[pathSegments.length - 1] as DirectKeysType;

  const { data, isLoading } = directionsStore;

  const directionsBd = toJS(data?.[0]);

  const {
    hero: {
      imagesUrl: { jpg, webp },
      description,
    },
    descriptionDirection,
    directions,
  } = directionsBd?.[service] ?? currentDirectionDeafaultData;

  const sanitizedDescription = xss(description);

  if (!service) return null;

  return (
    <Container>
      <ContentLoader
        currentStore={directionsStore}
        skeletonComponent={HeroSkeleton}
        initialVisibleCount={1}
      >
        <section className="relative min-h-[400px] px-2.5 py-4 before:absolute before:left-28 before:top-28 before:h-[138px] before:w-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px] after:absolute after:inset-0 after:bg-black/80 md:px-10 md:py-20 lg:text-xl xl:text-2xl 2xl:text-3xl">
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
          <div className="relative z-10 w-full xl:max-w-[725px] 2xl:max-w-[925px]">
            {sanitizedDescription &&
              sanitizedDescription.trim().length !== 0 && (
                <div
                  className="customInsertHTML"
                  dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                ></div>
              )}
            <Button onClick={() => changeModal(!isVisibleModal)}>
              Гостевой визит <IconNotebookText />
            </Button>
          </div>
        </section>
      </ContentLoader>
      <ContentLoader
        currentStore={directionsStore}
        initialVisibleCount={2}
        skeletonComponent={BenefitsCardSkeleton}
      >
        <ul className="py-12">
          {descriptionDirection?.map(
            ({ content, imagesUrl: { jpg, webp } }, idx) => {
              if (!content && !jpg && !webp) return null;

              const sanitizedContent = xss(content);

              return (
                <li
                  key={idx}
                  className="mb-20 last:mb-0 odd:flex-row-reverse sm:flex sm:items-start sm:justify-center sm:gap-4 md:gap-8"
                >
                  {sanitizedContent && sanitizedContent.trim().length !== 0 && (
                    <div
                      className="customInsertPageHTML mb-4 lg:text-xl xl:text-2xl 2xl:max-w-[825px] 2xl:text-3xl"
                      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                    ></div>
                  )}
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
                </li>
              );
            },
          )}
        </ul>
      </ContentLoader>
      {!isLoading && directions && (
        <section className="md:px-10 md:py-12">
          <Title className="mb-3 md:mb-6 lg:mb-8 2xl:mb-12">
            <span className="text-customHeadDecor">Другие</span> направления
          </Title>
          <DirectionsList visibleElements={6} keysList={directions} />
        </section>
      )}
    </Container>
  );
});

export default CurrentDirectionPage;
