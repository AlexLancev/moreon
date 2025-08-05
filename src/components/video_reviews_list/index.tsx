import { PlayCircleOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { numberVisibleVideoReviewsData, sizeRangesData } from "@/constans";
import { SkeletonVideoReviews } from "@/constans/skeletons";
import { video_reviews_store } from "@/stores/data_store";
import { useGetResponsiveValue } from "@/utils";

import { ContentLoader } from "../contentLoader";
import { AccessibleButton } from "../ui/accessibleButton";

export const Video_reviews_list = observer(() => {
  const [isVideoActive, setIsVideoActive] = useState<null | number>(null);
  const { data } = video_reviews_store;
  const indentationSlide = useGetResponsiveValue<number>(15, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    1,
    numberVisibleVideoReviewsData,
  );

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={indentationSlide}
      slidesPerView={quantitySlide}
      pagination={{ clickable: true }}
    >
      <ContentLoader
        currentStore={video_reviews_store}
        skeletonComponent={SkeletonVideoReviews}
        initialVisibleCount={4}
      >
        {data.map(
          (
            {
              description,
              person_about_club,
              preview_image: { jpg, webp },
              path,
            },
            idx: number,
          ) => (
            <SwiperSlide key={idx} className="h-auto min-h-full">
              <AccessibleButton
                className="group w-full overflow-hidden rounded-3xl"
                style={{
                  display: `${isVideoActive === idx ? "none" : "block"}`,
                }}
                onClick={() =>
                  setIsVideoActive(isVideoActive === idx ? null : idx)
                }
              >
                <picture>
                  <source srcSet={webp} type="image/webp" />
                  <img
                    className="block h-[400px] w-full object-cover duration-700 hover:scale-[1.1] lg:h-auto"
                    src={jpg}
                    alt={description}
                    aria-label={description}
                    title={person_about_club}
                    loading="lazy"
                  />
                </picture>
                <PlayCircleOutlined className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-6xl text-[#33b0aa] after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-[150%] after:w-[150%] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-[rgba(191,191,191,0.278)] after:duration-500 group-hover:after:h-[180%] group-hover:after:w-[180%] group-hover:after:bg-[rgba(255,255,255,0.3)]" />
              </AccessibleButton>
              {isVideoActive === idx && (
                <iframe
                  src={path}
                  className="min-h-full w-full overflow-hidden rounded-2xl"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                  allowFullScreen
                ></iframe>
              )}
            </SwiperSlide>
          ),
        )}
      </ContentLoader>
    </Swiper>
  );
});
