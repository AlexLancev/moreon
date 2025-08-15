import { useParams } from "react-router-dom";
import xss from "xss";

import { stockPresentationDefaultData } from "@/constans";

interface HeroItem {
  id: number;
  description_picture: string;
  description_promotion: string;
  url_images: {
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
  const numeric_Id = Number(id);

  if (!data || data.length === 0 || !numeric_Id) return null;
  const hero = data.find((el) => el.id === numeric_Id);

  const { description_picture, description_promotion, url_images } =
    hero ?? stockPresentationDefaultData;

  if (!description_picture || !description_promotion || !url_images)
    return null;

  const sanitized_description = xss(description_promotion);

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
          <source srcSet={url_images?.webp} type="image/webp" />
          <img
            className="m-auto overflow-hidden rounded-3xl"
            src={url_images?.jpg}
            alt={description_picture}
            loading="lazy"
          />
        </picture>
        <div
          className="customInsertHTML xl:text-xl 2xl:text-3xl"
          dangerouslySetInnerHTML={{ __html: sanitized_description }}
        ></div>
      </div>
    </section>
  );
};
