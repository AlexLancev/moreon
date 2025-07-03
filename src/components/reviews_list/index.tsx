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
      slidesPerView={2}
      autoHeight={true}
      pagination={{ clickable: true }}
    >
      {data.map(({ person, review }, idx: number) => {
        if (!person && !review) return null;

        return (
          <SwiperSlide
            key={idx}
            className="bg-[rgba(255,255,255,0.19)] p-8 rounded-3xl"
          >
            <strong className="flex text-xl mb-2 text-white">{person}</strong>
            <p className="text-lg overflow-y-auto customScrollbar">{review}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
});
