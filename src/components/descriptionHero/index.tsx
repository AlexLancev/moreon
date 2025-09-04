import { useParams } from "react-router-dom";
import xss from "xss";

import { stockPresentationDefaultData } from "@/constans";

interface HeroItem {
  id: number;
  descriptionPicture: string;
  descriptionPromotion: string;
  urlImages: {
    webp: string;
    jpg: string;
  };
}

type DescriptionHeroPropsType<T extends HeroItem> = {
  data: T[];
};

export const DescriptionHero = <T extends HeroItem>({
  data,
}: DescriptionHeroPropsType<T>) => {
  const { id } = useParams();
  const numericId = Number(id);

  if (!data || data.length === 0 || !numericId) return null;
  const hero = data.find((el) => el.id === numericId);

  const { descriptionPicture, descriptionPromotion, urlImages } =
    hero ?? stockPresentationDefaultData;

  if (!descriptionPicture || !descriptionPromotion || !urlImages) return null;

  const sanitizedDescription = xss(descriptionPromotion);

  return (
    <section className="relative px-2.5 py-4 before:absolute before:bottom-28 before:right-28 before:z-10 before:h-[138px] before:w-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px] md:px-10 md:py-20">
      <picture>
        <source
          srcSet="/images/stock_presentation/trenerroom.webp"
          type="image/webp"
        />
        <img
          className="absolute inset-0 h-full w-full"
          src="/images/stock_presentation/trenerroom.jpg"
          alt=""
          loading="lazy"
          aria-hidden
        />
      </picture>
      <div className="relative z-10 gap-x-12 md:flex md:justify-center">
        <picture>
          <source srcSet={urlImages?.webp} type="image/webp" />
          <img
            className="m-auto overflow-hidden rounded-3xl"
            src={urlImages?.jpg}
            alt={descriptionPicture}
            loading="lazy"
          />
        </picture>
        <div
          className="customInsertHTML xl:text-xl 2xl:text-3xl"
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        ></div>
      </div>
    </section>
  );
};
