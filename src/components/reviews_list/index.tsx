import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { reviews_data_type } from "pages/about_page/components/about_reviews";

export const Reviews_list = ({ data }: { data: reviews_data_type[] }) => {
  if (!data) return null;

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
      {data.map(({ person, review, raiting }, idx: number) => {
        if (!person || !review) return null;

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
};
