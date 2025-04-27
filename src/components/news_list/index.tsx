import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { news_data } from "@/data";
import { news_store } from "@/stores/data_store";

export const News_list = observer(() => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["news"],
    queryFn: news_data,
  });

  useEffect(() => {
    if (data) {
      news_store.set_data(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: Failed to fetch data</div>;

  if (!news_store || !news_store.data || news_store.data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={4}
      pagination={{ clickable: true }}
    >
      {news_store.data.map(
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
