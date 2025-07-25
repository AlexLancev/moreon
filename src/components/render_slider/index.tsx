import { Link } from "react-router-dom";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { numberVisibleElementsData, sizeRangesData } from "@/constans";
import { useGetResponsiveValue } from "@/utils";

import { Title } from "../title";

export const Render_slider = ({
  data,
  path,
  type,
}: {
  data: News_type[];
  path: number;
  type: string;
}) => {
  const indentationSlide = useGetResponsiveValue<number>(20, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    3,
    numberVisibleElementsData,
  );
  if (!data || !path || !type) return null;

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={indentationSlide}
      slidesPerView={quantitySlide}
      pagination={{ clickable: true }}
    >
      {data
        .filter(({ id }) => id !== path)
        .map(
          (
            { id, description_picture, description, url_images: { jpg, webp } },
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
    </Swiper>
  );
};
