import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { observer } from "mobx-react-lite";

import { reviews_store } from "@/stores/data_store";

export const Reviews_list = observer(() => {
  const { data, isLoading, isError } = reviews_store;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch data</div>;

  if (!reviews_store || !data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
      {data.map(({ person, review, raiting }, idx: number) => {
        if (!person && !review) return null;

        return (
          <SwiperSlide
            key={idx}
            className="bg-[rgba(255,255,255,0.19)] p-8 rounded-3xl"
          >
            <strong className="flex text-xl mb-3">{person}</strong>
            <p className="text-lg h-[305px] overflow-y-auto custom-scrollbar">
              {review}
            </p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
});
