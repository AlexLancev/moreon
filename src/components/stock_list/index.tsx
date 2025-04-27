import { stock_data } from "@/data";
import { stock_store } from "@/stores/data_store";
import { useQuery } from "@tanstack/react-query";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

export const Stock_list = observer(() => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["stock"],
    queryFn: stock_data,
  });

  useEffect(() => {
    if (data) {
      stock_store.set_data(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: Failed to fetch data</div>;

  if (!stock_store || !stock_store.data || stock_store.data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
      {stock_store.data.map(
        ({ description, url_images: { jpg, webp } }, idx: number) => (
          <SwiperSlide key={idx} className="rounded-3xl overflow-hidden">
            <button type="button">
              <picture>
                <source srcSet={webp} type="image/webp" />
                <img
                  width={500}
                  src={jpg}
                  alt={description}
                  aria-label={description}
                />
              </picture>
            </button>
          </SwiperSlide>
        ),
      )}
    </Swiper>
  );
});
