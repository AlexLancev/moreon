import { Link, useParams } from "react-router-dom";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  numberVisibleElementsData,
  sizeRangesData,
  SkeletonGrid,
} from "@/constans";
import { useGetResponsiveValue } from "@/utils";

import { ContentLoader } from "../contentLoader";
import { Title } from "../title";

export const Render_slider = ({
  heroData,
  type,
}: {
  heroData: Hero_type;
  type: string;
}) => {
  const indentationSlide = useGetResponsiveValue<number>(20, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    3,
    numberVisibleElementsData,
  );
  const { id } = useParams();
  const numeric_Id = Number(id);

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={indentationSlide}
      slidesPerView={quantitySlide}
      pagination={{ clickable: true }}
    >
      <ContentLoader currentStore={heroData} skeletonComponent={SkeletonGrid}>
        {numeric_Id &&
          heroData?.data
            ?.filter(({ id }) => id !== numeric_Id)
            .map(
              (
                {
                  id,
                  description_picture,
                  description,
                  url_images: { jpg, webp },
                },
                idx: number,
              ) => (
                <SwiperSlide key={idx} className="overflow-hidden rounded-3xl">
                  <Link to={`/${type}/${id}`}>
                    <picture>
                      <source srcSet={webp} type="image/webp" />
                      <img
                        className="mb-3 w-full"
                        src={jpg}
                        alt={description_picture}
                        aria-label={description_picture}
                        loading="lazy"
                      />
                    </picture>
                    {description && (
                      <Title
                        headingType="md"
                        className="px-1 text-center text-lg opacity-70 xl:text-xl 2xl:text-3xl"
                      >
                        {description}
                      </Title>
                    )}
                  </Link>
                </SwiperSlide>
              ),
            )}
      </ContentLoader>
    </Swiper>
  );
};
