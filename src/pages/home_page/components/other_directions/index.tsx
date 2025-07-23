import { observer } from "mobx-react-lite";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "@/components";
import { sizeRangesData } from "@/constans";
import { numberVisibleOtherDirectionsData } from "@/constans/numberVisibleElementsData";
import { other_directions_store } from "@/stores/data_store";
import { useGetResponsiveValue } from "@/utils";

export const Other_directions = observer(() => {
  const { data, isLoading, isError } = other_directions_store;
  const indentationSlide = useGetResponsiveValue<number>(20, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    2,
    numberVisibleOtherDirectionsData,
  );

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  if (!other_directions_store || !data || data.length === 0) {
    return <div>Нет доступных данных</div>;
  }

  return (
    <section className="py-12">
      <h2 className="visually-hidden">Наши другие направления</h2>
      <Container>
        <Swiper
          modules={[Pagination]}
          spaceBetween={indentationSlide}
          slidesPerView={quantitySlide}
          pagination={{ clickable: true }}
        >
          <ul className="flex items-center justify-around gap-4">
            {data.map(
              (
                { path, descriptions, images_url: { png, webp } },
                idx: number,
              ) => (
                <li key={idx}>
                  <SwiperSlide>
                    <a
                      href={path}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={descriptions}
                    >
                      <span className="visually-hidden">{descriptions}</span>
                      <picture>
                        <source srcSet={webp} type="image/webp" />
                        <img
                          src={png}
                          className="m-auto"
                          alt=""
                          loading="lazy"
                          aria-hidden
                        />
                      </picture>
                    </a>
                  </SwiperSlide>
                </li>
              ),
            )}
          </ul>
        </Swiper>
      </Container>
    </section>
  );
});
