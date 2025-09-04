import { observer } from "mobx-react-lite";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { RewiewsSkeleton, sizeRangesData } from "@/constans";
import { numberVisibleReviewsData } from "@/constans/numberVisibleElementsData";
import { cn } from "@/lib/utils";
import { reviewsStore } from "@/stores/dataStore";
import { useGetResponsiveValue } from "@/utils";

import { ContentLoader } from "../contentLoader";

export const ReviewsList = observer(() => {
  const { data, isLoading } = reviewsStore;
  const indentationSlide = useGetResponsiveValue<number>(20, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    1,
    numberVisibleReviewsData,
  );

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={indentationSlide}
      slidesPerView={quantitySlide}
      autoHeight={!isLoading && data.length > 0}
      pagination={{ clickable: true }}
      className="[&>.swiper-wrapper]:items-start"
    >
      <ContentLoader
        currentStore={reviewsStore}
        skeletonComponent={RewiewsSkeleton}
        initialVisibleCount={quantitySlide}
      >
        {data.map(({ person, review }, idx: number) => {
          if (!person && !review) return null;

          return (
            <SwiperSlide
              key={idx}
              className={cn(
                "rounded-3xl bg-[rgba(255,255,255,0.19)] p-4 xxs:p-6 lg:p-8",
                !isLoading && data.length > 0 && "h-auto",
              )}
            >
              <strong className="mb-2 flex text-xl text-white lg:text-2xl xl:mb-6 2xl:text-3xl">
                {person}
              </strong>
              <p className="customScrollBar overflow-y-auto pr-4 xxs:text-lg lg:text-xl 2xl:text-2xl">
                {review}
              </p>
            </SwiperSlide>
          );
        })}
      </ContentLoader>
    </Swiper>
  );
});
