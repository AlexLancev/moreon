import { NotebookText as IconNotebookText } from "lucide-react";

import { ContentLoader } from "@/components";
import { Button } from "@/components/ui/button";
import { HeroSkeleton, directionsPageDefault } from "@/constans";
import { modal_store } from "@/stores";
import { directions_store } from "@/stores/data_store";

type HeroDirectionsPropsType = {
  data: {
    description: string;
    images_url: { jpg: string; webp: string };
  };
};

export const HeroDirections = ({ data }: HeroDirectionsPropsType) => {
  const { isVisibleModal, change_modal } = modal_store;
  const { hero } = directionsPageDefault;

  const {
    description,
    images_url: { jpg, webp },
  } = data ?? hero;

  return (
    <ContentLoader
      currentStore={directions_store}
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
          <Button onClick={() => change_modal(!isVisibleModal)}>
            Гостевой визит <IconNotebookText />
          </Button>
        </div>
      </section>
    </ContentLoader>
  );
};
