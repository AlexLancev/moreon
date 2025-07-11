import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { observer } from "mobx-react-lite";

import { reviews_store } from "@/stores/data_store";

export const Reviews_list = observer(() => {
  const { data, isLoading, isError } = reviews_store;

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  if (!reviews_store || !data || data.length === 0) {
    return <div>Нет доступных данных</div>;
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
            className="rounded-3xl bg-[rgba(255,255,255,0.19)] p-8"
          >
            <strong className="mb-2 flex text-xl text-white">{person}</strong>
            <p className="customScrollBar overflow-y-auto pr-4 text-lg">
              {review}
            </p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
});
