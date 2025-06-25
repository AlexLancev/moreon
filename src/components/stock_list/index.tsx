import { observer } from "mobx-react-lite";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { stock_store } from "@/stores/data_store";

export const Stock_list = observer(() => {
  const { data, isLoading, isError } = stock_store;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch data</div>;

  if (!stock_store || !data || data.length === 0) {
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
        ({ id, description, url_images: { jpg, webp } }, idx: number) => (
          <SwiperSlide key={idx} className="rounded-3xl overflow-hidden">
            <Link to={`/stock/${id}`}>
              <picture>
                <source srcSet={webp} type="image/webp" />
                <img
                  className="w-full"
                  src={jpg}
                  alt={description}
                  aria-label={description}
                  loading="lazy"
                />
              </picture>
            </Link>
          </SwiperSlide>
        ),
      )}
    </Swiper>
  );
});
