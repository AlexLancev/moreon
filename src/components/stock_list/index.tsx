import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  numberVisibleElementsData,
  sizeRangesData,
  SkeletonGrid,
} from "@/constans";
import { stock_store } from "@/stores/data_store";
import { useGetResponsiveValue } from "@/utils";

import { ContentLoader } from "../contentLoader";

export const Stock_list = observer(() => {
  const { data } = stock_store;
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
      <ContentLoader
        currentStore={stock_store}
        skeletonComponent={SkeletonGrid}
      >
        {data.map(
          (
            { id, description_picture, url_images: { jpg, webp } },
            idx: number,
          ) => (
            <SwiperSlide key={idx} className="overflow-hidden rounded-3xl">
              <Link to={`/stock/${id}`}>
                <picture>
                  <source srcSet={webp} type="image/webp" />
                  <img
                    className="w-full"
                    src={jpg}
                    alt={description_picture}
                    aria-label={description_picture}
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
