import { observer } from "mobx-react-lite";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { sizeRangesData, SkeletonGymAndGroupPrograms } from "@/constans";
import { numberVisibleEveryCardData } from "@/constans/numberVisibleElementsData";
import { everyCardStore } from "@/stores/dataStore";
import { renderNumberSlides, useGetResponsiveValue } from "@/utils";

import { ContentLoader } from "../contentLoader";

export const EveryCardList = observer(() => {
  const { data } = everyCardStore;
  const indentationSlide = useGetResponsiveValue<number>(15, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    1,
    numberVisibleEveryCardData,
  );

  const renderSlide = (startIndex: number, endIndex: number) => {
    if (startIndex < 0 || endIndex > data.length || startIndex >= endIndex) {
      console.error("Некорректные индексы:", {
        startIndex,
        endIndex,
        dataLength: data.length,
      });
      return <></>;
    }

    return (
      <SwiperSlide key={startIndex} className="h-auto">
        <ul className="flex h-full min-h-[348px] flex-col gap-4 lg:gap-8">
          {data
            .slice(startIndex, endIndex)
            .map(({ head, imagesUrl }, idx: number) => {
              if (!head && !imagesUrl) return null;

              return (
                <li
                  key={idx}
                  className="grid h-full place-items-center gap-y-4 overflow-hidden rounded-3xl bg-[rgba(255,255,255,0.19)] p-10 duration-300 hover:bg-[rgba(255,255,255,0.12)] 2xl:p-12 3xl:p-14"
                >
                  <picture>
                    <source srcSet={imagesUrl?.webp} type="image/webp" />
                    <img
                      src={imagesUrl?.png}
                      alt=""
                      loading="lazy"
                      aria-hidden
                    />
                  </picture>
                  <strong className="text-center xl:text-xl 2xl:text-2xl 3xl:text-3xl">
                    {head}
                  </strong>
                </li>
              );
            })}
        </ul>
      </SwiperSlide>
    );
  };

  const slides = renderNumberSlides(data, 2, renderSlide);

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={indentationSlide}
      slidesPerView={quantitySlide}
      pagination={{ clickable: true }}
    >
      <ContentLoader
        currentStore={everyCardStore}
        skeletonComponent={SkeletonGymAndGroupPrograms}
        initialVisibleCount={4}
      >
        {slides}
      </ContentLoader>
    </Swiper>
  );
});
