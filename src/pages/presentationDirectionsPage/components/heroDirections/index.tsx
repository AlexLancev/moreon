import { NotebookText as IconNotebookText } from "lucide-react";

import { ContentLoader } from "@/components";
import { Button } from "@/components/ui/button";
import { HeroSkeleton, directionsPageDefault } from "@/constans";
import { modalStore } from "@/stores";
import { directionsStore } from "@/stores/dataStore";

type HeroDirectionsPropsType = {
  data: {
    description: string;
    imagesUrl: { jpg: string; webp: string };
  };
};

export const HeroDirections = ({ data }: HeroDirectionsPropsType) => {
  const { isVisibleModal, changeModal } = modalStore;
  const { hero } = directionsPageDefault;

  const {
    description,
    imagesUrl: { jpg, webp },
  } = data ?? hero;

  return (
    <ContentLoader
      currentStore={directionsStore}
      skeletonComponent={HeroSkeleton}
      initialVisibleCount={1}
    >
      <section className="relative min-h-[400px] px-2.5 py-4 before:absolute before:left-28 before:top-28 before:h-[138px] before:w-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px] after:absolute after:inset-0 after:bg-black/80 md:px-10 md:py-20">
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
          <Button onClick={() => changeModal(!isVisibleModal)}>
            Гостевой визит <IconNotebookText />
          </Button>
        </div>
      </section>
    </ContentLoader>
  );
};
