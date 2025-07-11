import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import classNames from "classnames";

import { Title } from "@/components";

import { about_us_store } from "@/stores/data_store";
import { useGetResponsiveValue } from "@/utils";
import { numberVisibleAboutUsData, sizeRangesData } from "@/constans";

export const About_us_list = observer(() => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const { data, isLoading, isError } = about_us_store;
  const indentationSlide = useGetResponsiveValue<number>(20, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    1,
    numberVisibleAboutUsData,
  );

  if (!about_us_store || !data || data.length === 0) {
    return <div>Нет доступных данных</div>;
  }

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  const renderSlide = (startIndex: number, endIndex: number) => (
    <SwiperSlide key={startIndex} className="flex flex-col gap-3 lg:gap-5">
      {data
        .slice(startIndex, endIndex)
        .map(({ title, description }, idx: number) => {
          const currentIndex = startIndex + idx;
          return (
            <button
              key={title ?? idx}
              className="w-full rounded-2xl bg-tabs-gradient-custom p-3 pr-10 text-left hover:bg-tabs-hover-gradient-custom xl:p-4 xl:pr-12 2xl:p-6 2xl:pr-14"
              type="button"
              onClick={() =>
                setVisibleIndex(
                  visibleIndex === currentIndex ? null : currentIndex,
                )
              }
            >
              <Title
                className={classNames(
                  "relative text-sm before:absolute before:-right-5 before:top-1/2 before:h-2.5 before:w-4 before:-translate-y-1/2 before:bg-[url('/images/list__blue.webp')] before:bg-[center_center] before:bg-no-repeat before:duration-150 xs:text-base xl:text-lg xl:before:-right-4 2xl:text-xl 2xl:before:h-6 2xl:before:w-8 2xl:before:bg-[auto_16px] 3xl:text-2xl",
                  {
                    "before:rotate-180": visibleIndex === currentIndex,
                  },
                )}
              >
                {title}
              </Title>
              <p
                className={classNames(
                  "transition-opacity duration-300 2xl:text-xl 3xl:text-2xl",
                  {
                    ["h-auto pt-4"]: visibleIndex === currentIndex,
                    ["invisible h-0 p-0 opacity-0"]:
                      visibleIndex !== currentIndex,
                  },
                )}
              >
                {description}
              </p>
            </button>
          );
        })}
    </SwiperSlide>
  );

  const slides = [];

  for (let i = 0; i < about_us_store.data.length; i += 4) {
    slides.push(renderSlide(i, i + 4));
  }

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={indentationSlide}
      slidesPerView={quantitySlide}
      pagination={{ clickable: true }}
    >
      {slides}
    </Swiper>
  );
});
