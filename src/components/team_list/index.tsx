import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SkeletonTeam } from "@/constans";
import { numberVisibleTeamData } from "@/constans/numberVisibleElementsData";
import { sizeRangesTeamData } from "@/constans/sizeRangesData";
import { team_store } from "@/stores/data_store";
import {
  filterDataByActiveTab,
  renderNumberSlides,
  useGetResponsiveValue,
} from "@/utils";

import { ContentLoader } from "../contentLoader";

export const Team_list = observer(({ isActiveTab }: Team_key_type) => {
  const { data } = team_store;
  const indentationSlide = useGetResponsiveValue<number>(
    16,
    sizeRangesTeamData,
  );
  const quantitySlide = useGetResponsiveValue<number>(1, numberVisibleTeamData);

  const selected_category_data = filterDataByActiveTab(data, isActiveTab);

  const renderSlide = (startIndex: number, endIndex: number) => (
    <SwiperSlide
      key={startIndex}
      className="flex min-h-[348px] flex-col gap-4 lg:gap-6"
    >
      {selected_category_data
        ?.slice(startIndex, endIndex)
        .map(
          (
            { name, url_images: { webp, jpg }, about_coach: { qualification } },
            idx: number,
          ) => {
            return (
              <Link
                to={`/team/${name}`}
                key={idx}
                className="group relative overflow-hidden rounded-3xl after:absolute after:bottom-0 after:left-0 after:z-[0] after:h-[120px] after:w-full after:bg-[url('/images/decor_serv.svg')] after:bg-cover after:bg-no-repeat after:opacity-80 xs:after:h-[90px] md:after:h-[120px] 3xl:after:h-[160px]"
              >
                <>
                  <picture>
                    <source srcSet={webp} type="image/webp" />
                    <img
                      className="h-full w-full object-cover duration-700 group-hover:scale-[1.1]"
                      width={300}
                      src={jpg}
                      alt={`На фото ${qualification}, ${name}`}
                      aria-label={`На фото ${qualification}, ${name}`}
                      title={`Ознокамится подробнее с ${name}`}
                      loading="lazy"
                    />
                  </picture>
                  <strong className="absolute bottom-5 left-5 z-10 text-[#d6d6d6] md:text-xl 2xl:text-2xl 3xl:text-3xl">
                    {name}
                  </strong>
                </>
              </Link>
            );
          },
        )}
    </SwiperSlide>
  );

  const slides = renderNumberSlides(selected_category_data, 2, renderSlide);

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={indentationSlide}
      slidesPerView={quantitySlide}
      pagination={{ clickable: true }}
    >
      <ContentLoader
        currentStore={{ ...team_store, data: selected_category_data }}
        skeletonComponent={SkeletonTeam}
        initialVisibleCount={4}
      >
        {slides}
      </ContentLoader>
    </Swiper>
  );
});
