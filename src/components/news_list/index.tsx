import { observer } from "mobx-react-lite";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Title } from "@/components";

import { news_store } from "@/stores/data_store";
import { useGetResponsiveValue } from "@/utils";
import { numberVisibleElementsData, sizeRangesData } from "@/constans";

export const News_list = observer(() => {
  const { data, isLoading, isError } = news_store;
  const indentationSlide = useGetResponsiveValue<number>(20, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    4,
    numberVisibleElementsData,
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch data</div>;

  if (!news_store || !data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={indentationSlide}
      slidesPerView={quantitySlide}
      pagination={{ clickable: true }}
    >
      {data.map(
        (
          { id, description, description_picture, url_images: { webp, jpg } },
          idx: number,
        ) => (
          <SwiperSlide key={idx}>
            <Link to={`/news/${id}`}>
              <picture>
                <source srcSet={webp} type="image/webp" />
                <img
                  className="block w-full mb-3 rounded-3xl overflow-hidden"
                  width={370}
                  src={jpg}
                  alt={description_picture}
                  aria-label={description_picture}
                  loading="lazy"
                />
              </picture>
              <Title
                fontSize="md"
                headingType="md"
                className="text-[rgb(176,176,176)] px-1 text-center"
              >
                {description}
              </Title>
            </Link>
          </SwiperSlide>
        ),
      )}
    </Swiper>
  );
});
