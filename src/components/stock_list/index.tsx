import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { numberVisibleElementsData, sizeRangesData } from "@/constans";
import { stock_store } from "@/stores/data_store";
import { useGetResponsiveValue } from "@/utils";

export const Stock_list = observer(() => {
  const { data, isLoading, isError } = stock_store;
  const indentationSlide = useGetResponsiveValue<number>(20, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    3,
    numberVisibleElementsData,
  );

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  if (!stock_store || !data || data.length === 0) {
    return <div>Нет доступных данных</div>;
  }
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={indentationSlide}
      slidesPerView={quantitySlide}
      pagination={{ clickable: true }}
    >
      {stock_store.data.map(
        ({ id, description, url_images: { jpg, webp } }, idx: number) => (
          <SwiperSlide key={idx} className="overflow-hidden rounded-3xl">
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
