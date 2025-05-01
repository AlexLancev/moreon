import { observer } from "mobx-react-lite";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { news_store } from "@/stores/data_store";

export const News_list = observer(() => {
  const { data, isLoading, isError } = news_store;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch data</div>;

  if (!news_store || !data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={4}
      pagination={{ clickable: true }}
    >
      {data.map(
        (
          { description, description_picture, url_images: { webp, jpg } },
          idx: number,
        ) => (
          <SwiperSlide key={idx}>
            <button type="button">
              <picture>
                <source srcSet={webp} type="image/webp" />
                <img
                  className="block w-full mb-3 rounded-3xl overflow-hidden"
                  width={370}
                  src={jpg}
                  alt={description_picture}
                  aria-label={description_picture}
                />
              </picture>
              <h3 className="text-base text-[rgb(176,176,176)] px-1 text-center">
                {description}
              </h3>
            </button>
          </SwiperSlide>
        ),
      )}
    </Swiper>
  );
});
