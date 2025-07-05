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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch data</div>;

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
            className="relative md:*:w-1/2 overflow-hidden flex flex-col-reverse md:flex-row md:justify-center gap-10 bg-[90%_0] bg-no-repeat px-0 py-5 md:py-8 xl:py-10 3xl:py-12 after:absolute after:top-0 after:left-0 md:after:right-10 md:after:left-auto after:font-familyGroticTitulOtlHv after:text-5xl lg:after:text-7xl xl:after:text-8xl after:text-[rgba(23,101,97,0.1)] after:content-[attr(data-decor)] md:odd:flex-row-reverse md:odd:after:left-10"
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
              <Title className="customHeadDecor mb-2 lg:mb-6 2xl:mb-10 text-base font-bold uppercase md:mb-6 lg:text-lg xl:text-2xl 3xl:text-4xl">
                {title}
              </Title>
              <p className="text-base lg:text-lg xl:text-2xl 3xl:text-4xl">{description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
});
