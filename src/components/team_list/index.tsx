import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { observer } from "mobx-react-lite";

import { team_store } from "@/stores/data_store";
import { filterDataByActiveTab, useGetResponsiveValue } from "@/utils";
import { numberVisibleAboutUsData } from "@/constans";
import { numberVisibleTeamData } from "@/constans/numberVisibleElementsData";
import { sizeRangesTeamData } from "@/constans/sizeRangesData";

export const Team_list = observer(({ isActiveTab }: Team_key_type) => {
  const { data, isLoading, isError } = team_store;
  const indentationSlide = useGetResponsiveValue<number>(
    16,
    sizeRangesTeamData,
  );
  const quantitySlide = useGetResponsiveValue<number>(1, numberVisibleTeamData);
  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  if (!team_store || !data || data.length === 0) {
    return <div>Нет доступных данных</div>;
  }

  const selected_category_data = filterDataByActiveTab(data, isActiveTab);

  if (!selected_category_data) return null;

  const renderSlide = (startIndex: number, endIndex: number) => (
    <SwiperSlide
      key={startIndex}
      className="flex min-h-[348px] flex-col gap-4 lg:gap-6"
    >
      {selected_category_data
        .slice(startIndex, endIndex)
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

  if (!selected_category_data || selected_category_data.length === 0)
    return null;

  const slides: JSX.Element[] = [];
  for (let index = 0; index < selected_category_data.length; index += 2) {
    slides.push(renderSlide(index, index + 2));
  }

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={indentationSlide}
      slidesPerView={quantitySlide}
      pagination={{ clickable: true }}
    >
      {slides}
    </Swiper>
  );
});
