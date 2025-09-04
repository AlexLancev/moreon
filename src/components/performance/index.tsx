import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ContentLoader, Title } from "@/components";
import { sizeRangesData, SkeletonPerformance } from "@/constans";
import { numberVisiblePerformanceData } from "@/constans/numberVisibleElementsData";
import { performanceDataStore } from "@/stores/dataStore";
import { isEmptyObj, useGetResponsiveValue } from "@/utils";

export const Performance = observer(({ dataKey }: PerformanceType) => {
  const { data } = performanceDataStore;
  const indentationSlide = useGetResponsiveValue<number>(20, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    1,
    numberVisiblePerformanceData,
  );

  if (!dataKey?.length) return null;

  return (
    <ul>
      <ContentLoader
        skeletonComponent={SkeletonPerformance}
        isEmpty={!toJS(data?.[0]) || isEmptyObj(data?.[0], dataKey)}
        currentStore={{ ...performanceDataStore, data: dataKey }}
      >
        {dataKey.map((key, idx: number) => {
          const currentData = toJS(data?.[0])?.[key];
          if (!currentData) return null;

          const { arrImages, title, description } = currentData;

          return (
            <li
              key={idx}
              className="relative flex flex-col-reverse gap-10 overflow-hidden bg-[90%_0] bg-no-repeat px-0 py-5 after:absolute after:left-0 after:top-0 after:font-familyGroticTitulOtlHv after:text-5xl after:text-[rgba(23,101,97,0.1)] after:content-[attr(data-decor)] md:flex-row md:justify-center md:py-8 md:*:w-1/2 md:after:left-auto md:after:right-10 md:odd:flex-row-reverse md:odd:after:left-10 lg:after:text-7xl xl:py-10 xl:after:text-8xl 3xl:py-12"
              data-decor={title}
            >
              <Swiper
                className="mx-0 pb-16 lg:pb-20 2xl:pb-24"
                modules={[Pagination]}
                spaceBetween={indentationSlide}
                slidesPerView={quantitySlide}
                pagination={{ clickable: true }}
              >
                {arrImages?.map(
                  ({ imagesDescription, imagesUrl: { jpg } }, idx: number) => (
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
                          alt={imagesDescription}
                          aria-label={imagesDescription}
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
      </ContentLoader>
    </ul>
  );
});
