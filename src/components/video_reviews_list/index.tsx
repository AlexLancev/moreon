import { PlayCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { observer } from "mobx-react-lite";

import { video_reviews_store } from "@/stores/data_store";

export const Video_reviews_list = observer(() => {
  const [isVideoActive, setIsVideoActive] = useState<null | number>(null);
  const { data, isLoading, isError } = video_reviews_store;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch data</div>;

  if (!video_reviews_store || !data || data.length === 0) {
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
          {
            description,
            person_about_club,
            preview_image: { jpg, webp },
            path,
          },
          idx: number,
        ) => (
          <SwiperSlide key={idx}>
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
                className="overflow-hidden rounded-2xl"
                width={320}
                height={570}
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
