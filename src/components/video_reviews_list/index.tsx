import { PlayCircleOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { numberVisibleAboutUsData, sizeRangesData } from "@/constans";
import { video_reviews_store } from "@/stores/data_store";
import { useGetResponsiveValue } from "@/utils";

export const Video_reviews_list = observer(() => {
  const [isVideoActive, setIsVideoActive] = useState<null | number>(null);
  const { data, isLoading, isError } = video_reviews_store;
  const indentationSlide = useGetResponsiveValue<number>(20, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    1,
    numberVisibleAboutUsData,
  );

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  if (!video_reviews_store || !data || data.length === 0) {
    return <div>Нет доступных данных</div>;
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
          {
            description,
            person_about_club,
            preview_image: { jpg, webp },
            path,
          },
          idx: number,
        ) => (
          <SwiperSlide key={idx} className="h-auto min-h-full">
            <button
              type="button"
              className="group w-full overflow-hidden rounded-3xl"
              style={{ display: `${isVideoActive === idx ? "none" : "block"}` }}
              onClick={() =>
                setIsVideoActive(isVideoActive === idx ? null : idx)
              }
            >
              <picture>
                <source srcSet={webp} type="image/webp" />
                <img
                  className="block w-full duration-700 hover:scale-[1.1]"
                  width={320}
                  height={570}
                  src={jpg}
                  alt={description}
                  aria-label={description}
                  title={person_about_club}
                  loading="lazy"
                />
              </picture>
              <PlayCircleOutlined className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-6xl text-[#33b0aa] after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-[150%] after:w-[150%] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-[rgba(191,191,191,0.278)] after:duration-500 group-hover:after:h-[180%] group-hover:after:w-[180%] group-hover:after:bg-[rgba(255,255,255,0.3)]" />
            </button>
            {isVideoActive === idx && (
              <iframe
                src={path}
                className="min-h-full w-full overflow-hidden rounded-2xl"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                allowFullScreen
              ></iframe>
            )}
          </SwiperSlide>
        ),
      )}
    </Swiper>
  );
});
