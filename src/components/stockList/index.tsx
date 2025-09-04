import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  numberVisibleElementsData,
  sizeRangesData,
  SkeletonGrid,
} from "@/constans";
import { stockStore } from "@/stores/dataStore";
import { useGetResponsiveValue } from "@/utils";

import { ContentLoader } from "../contentLoader";

export const StockList = observer(() => {
  const { data } = stockStore;
  const indentationSlide = useGetResponsiveValue<number>(20, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    3,
    numberVisibleElementsData,
  );

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={indentationSlide}
      slidesPerView={quantitySlide}
      pagination={{ clickable: true }}
    >
      <ContentLoader currentStore={stockStore} skeletonComponent={SkeletonGrid}>
        {data.map(
          (
            { id, descriptionPicture, urlImages: { jpg, webp } },
            idx: number,
          ) => (
            <SwiperSlide key={idx} className="overflow-hidden rounded-3xl">
              <Link to={`/stock/${id}`}>
                <picture>
                  <source srcSet={webp} type="image/webp" />
                  <img
                    className="w-full"
                    src={jpg}
                    alt={descriptionPicture}
                    aria-label={descriptionPicture}
                    loading="lazy"
                  />
                </picture>
              </Link>
            </SwiperSlide>
          ),
        )}
      </ContentLoader>
    </Swiper>
  );
});
