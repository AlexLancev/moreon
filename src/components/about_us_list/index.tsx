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
    2,
    numberVisibleAboutUsData,
  );

  if (!about_us_store || !data || data.length === 0) {
    return <div>No data available</div>;
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch data</div>;

  const renderSlide = (startIndex: number, endIndex: number) => (
    <SwiperSlide key={startIndex} className="flex flex-col gap-5">
      {data
        .slice(startIndex, endIndex)
        .map(({ title, description }, idx: number) => {
          const currentIndex = startIndex + idx;
          return (
            <button
              key={title ?? idx}
              className={classNames(
                "bg-tabs-gradient-custom hover:bg-tabs-hover-gradient-custom relative w-full py-4 px-6 pr-12 rounded-2xl text-left before:absolute before:top-6 before:right-6 before:duration-150 before:w-4 before:h-2.5 before:bg-no-repeat before:bg-[url('/images/list__blue.webp')]",
                {
                  "before:rotate-180": visibleIndex === currentIndex,
                },
              )}
              type="button"
              onClick={() =>
                setVisibleIndex(
                  visibleIndex === currentIndex ? null : currentIndex,
                )
              }
            >
              <Title className="text-base">{title}</Title>
              <p
                className={classNames("duration-300 transition-opacity", {
                  ["pt-4 h-auto"]: visibleIndex === currentIndex,
                  ["invisible p-0 opacity-0 h-0"]:
                    visibleIndex !== currentIndex,
                })}
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
