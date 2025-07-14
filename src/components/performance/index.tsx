import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

import { Title } from "@/components";

import { performance_data_store } from "@/stores/data_store";
import { isEmptyObj, useGetResponsiveValue } from "@/utils";
import { numberVisiblePerformanceData } from "@/constans/numberVisibleElementsData";
import { sizeRangesData } from "@/constans";

export const Performance = observer(({ data_key }: Performance_type) => {
  const { data, isLoading, isError } = performance_data_store;
  const indentationSlide = useGetResponsiveValue<number>(20, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    1,
    numberVisiblePerformanceData,
  );

  const performance_bd = toJS(data?.[0]);

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  if (
    !performance_data_store ||
    !performance_bd ||
    isEmptyObj(performance_bd) ||
    !data_key ||
    data_key.length === 0
  )
    return null;

  return (
    <ul>
      {data_key.map((key, idx: number) => {
        const currentData = performance_bd[key];
        if (!currentData) return null;

        const { arr_images, title, description } = currentData;

        return (
          <li
            key={idx}
            className="relative flex flex-col-reverse gap-10 overflow-hidden bg-[90%_0] bg-no-repeat px-0 py-5 after:absolute after:left-0 after:top-0 after:font-familyGroticTitulOtlHv after:text-5xl after:text-[rgba(23,101,97,0.1)] after:content-[attr(data-decor)] md:flex-row md:justify-center md:py-8 md:*:w-1/2 md:after:left-auto md:after:right-10 md:odd:flex-row-reverse md:odd:after:left-10 lg:after:text-7xl xl:py-10 xl:after:text-8xl 3xl:py-12"
            data-decor={title}
          >
            <Swiper
              className="mx-0 pb-16"
              modules={[Pagination]}
              spaceBetween={indentationSlide}
              slidesPerView={quantitySlide}
              pagination={{ clickable: true }}
            >
              {arr_images?.map(
                ({ images_description, images_url: { jpg } }, idx: number) => (
                  <SwiperSlide
                    className="overflow-hidden rounded-3xl"
                    key={idx}
                  >
                    <picture>
                      <source srcSet={jpg} type="image/webp" />
                      <img
                        className="w-full rounded-3xl"
                        width={525}
                        height={293}
                        src={jpg}
                        alt={images_description}
                        aria-label={images_description}
                        loading="lazy"
                      />
                    </picture>
                  </SwiperSlide>
                ),
              )}
            </Swiper>
            <div>
              <Title className="mb-2 text-base font-bold uppercase text-customHeadDecor md:mb-6 lg:mb-6 lg:text-lg xl:text-2xl 2xl:mb-10 3xl:text-4xl">
                {title}
              </Title>
              <p className="text-base lg:text-lg xl:text-2xl 3xl:text-4xl">
                {description}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
});
