import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import classNames from "classnames";

import { about_us_store } from "@/stores/data_store";

export const About_us_list = observer(() => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const { data, isLoading, isError } = about_us_store;

  if (!about_us_store || !data || data.length === 0) {
    return <div>No data available</div>;
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch data</div>;

  const renderSlide = (startIndex: number, endIndex: number) => (
    <SwiperSlide key={startIndex} className="flex flex-col gap-5">
      {data
        .slice(startIndex, endIndex)
        .map(({ title, description }: About_us_type, idx: number) => {
          const currentIndex = startIndex + idx;
          return (
            <button
              key={title || idx}
              className={classNames("about_slide", {
                "about_slide--active": visibleIndex === currentIndex,
              })}
              type="button"
              onClick={() =>
                setVisibleIndex(
                  visibleIndex === currentIndex ? null : currentIndex,
                )
              }
            >
              <h3 className="text-base">{title}</h3>
              <p
                className={classNames("duration-300 transition-opacity", {
                  ["activeClasses"]: visibleIndex === currentIndex,
                  ["inactiveClasses"]: visibleIndex !== currentIndex,
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
      spaceBetween={20}
      slidesPerView={2}
      pagination={{ clickable: true }}
    >
      {slides}
    </Swiper>
  );
});
