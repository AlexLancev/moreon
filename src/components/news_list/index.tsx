import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Title } from "@/components";
import { numberVisibleElementsData, sizeRangesData } from "@/constans";
import { news_store } from "@/stores/data_store";
import { useGetResponsiveValue } from "@/utils";

export const News_list = observer(() => {
  const { data, isLoading, isError } = news_store;
  const indentationSlide = useGetResponsiveValue<number>(20, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    4,
    numberVisibleElementsData,
  );

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  if (!news_store || !data || data.length === 0) {
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
          { id, description, description_picture, url_images: { webp, jpg } },
          idx: number,
        ) => (
          <SwiperSlide key={idx}>
            <Link to={`/news/${id}`}>
              <picture>
                <source srcSet={webp} type="image/webp" />
                <img
                  className="mb-3 block w-full overflow-hidden rounded-3xl"
                  width={370}
                  src={jpg}
                  alt={description_picture}
                  aria-label={description_picture}
                  loading="lazy"
                />
              </picture>
              <Title
                headingType="md"
                className="px-1 text-center text-lg opacity-70 xl:text-xl 2xl:text-3xl"
              >
                {description}
              </Title>
            </Link>
          </SwiperSlide>
        ),
      )}
    </Swiper>
  );
});
