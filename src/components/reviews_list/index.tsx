import { observer } from "mobx-react-lite";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { sizeRangesData } from "@/constans";
import { numberVisibleReviewsData } from "@/constans/numberVisibleElementsData";
import { reviews_store } from "@/stores/data_store";
import { useGetResponsiveValue } from "@/utils";

export const Reviews_list = observer(() => {
  const { data, isLoading, isError } = reviews_store;
  const indentationSlide = useGetResponsiveValue<number>(20, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    1,
    numberVisibleReviewsData,
  );

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  if (!reviews_store || !data || data.length === 0) {
    return <div>Нет доступных данных</div>;
  }

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={indentationSlide}
      slidesPerView={quantitySlide}
      autoHeight
      pagination={{ clickable: true }}
    >
      {data.map(({ person, review }, idx: number) => {
        if (!person && !review) return null;

        return (
          <SwiperSlide
            key={idx}
            className="rounded-3xl bg-[rgba(255,255,255,0.19)] p-4 xxs:p-6 lg:p-8"
          >
            <strong className="mb-2 flex text-xl text-white lg:text-2xl xl:mb-6 2xl:text-3xl">
              {person}
            </strong>
            <p className="customScrollBar overflow-y-auto pr-4 xxs:text-lg lg:text-xl 2xl:text-2xl">
              {review}
            </p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
});
