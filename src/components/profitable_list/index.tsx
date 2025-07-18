import { observer } from "mobx-react-lite";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { sizeRangesData } from "@/constans";
import { numberVisibleProfitablesData } from "@/constans/numberVisibleElementsData";
import { profitable_visits_store } from "@/stores/data_store";

import { useGetResponsiveValue } from "@/utils";

export const Profitable_list = observer(() => {
  const { data, isLoading, isError } = profitable_visits_store;
  const indentationSlide = useGetResponsiveValue<number>(15, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    1,
    numberVisibleProfitablesData,
  );

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  if (!profitable_visits_store || !data || data.length === 0) {
    return <div>Нет доступных данных</div>;
  }

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={indentationSlide}
      slidesPerView={quantitySlide}
      pagination={{ clickable: true }}
    >
      <ul className="grid grid-cols-4 gap-6 py-5">
        {data.map(
          ({ head, profitable_visits_list, images_url }, idx: number) => {
            if (!head && !profitable_visits_list && !images_url) return null;

            return (
              <li key={idx}>
                <SwiperSlide className="group flex h-auto flex-col overflow-hidden rounded-3xl bg-[url('/images/profitable_visits/profit_decor.svg')] bg-[100%_auto] bg-left-bottom bg-no-repeat px-10 py-5">
                  <picture>
                    <source srcSet={images_url?.webp} type="image/webp" />
                    <img
                      className="m-auto mb-5 block opacity-70 duration-300 group-hover:opacity-100 2xl:w-36 3xl:mb-12 3xl:w-44"
                      width={96}
                      src={images_url?.png}
                      alt=""
                      loading="lazy"
                      aria-hidden
                    />
                  </picture>
                  <strong className="mb-3 flex-1 text-center text-2xl xl:mb-8 2xl:text-3xl">
                    {head}
                  </strong>
                  <ul className="list-disc pb-2">
                    {profitable_visits_list.map((profit, idx: number) => (
                      <li
                        key={idx}
                        className="mb-2 last:mb-0 xl:text-xl 2xl:text-2xl"
                      >
                        {profit}
                      </li>
                    ))}
                  </ul>
                </SwiperSlide>
              </li>
            );
          },
        )}
      </ul>
    </Swiper>
  );
});
