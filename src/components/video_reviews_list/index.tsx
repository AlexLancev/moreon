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
              className="btn_review"
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
                />
              </picture>
              <PlayCircleOutlined className="play_icon" />
            </button>
            {isVideoActive === idx && (
              <iframe
                src={path}
                className="rounded-2xl overflow-hidden"
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
