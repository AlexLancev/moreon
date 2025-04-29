import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { reviews_data } from "@/data";
import { reviews_store } from "@/stores/data_store";
import { observer } from "mobx-react-lite";

export const Reviews_list = observer(() => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["reviews"],
    queryFn: reviews_data,
  });

  useEffect(() => {
    if (data) {
      reviews_store.set_data(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: Failed to fetch data</div>;

  if (
    !reviews_store ||
    !reviews_store.data ||
    reviews_store.data.length === 0
  ) {
    return <div>No data available</div>;
  }

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
      {reviews_store.data.map(({ person, review, raiting }, idx: number) => {
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
});
