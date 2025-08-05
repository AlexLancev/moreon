import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ContentLoader, Title } from "@/components";
import {
  numberVisibleElementsData,
  SkeletonServiceCard,
  sizeRangesData,
  types_services_data_decor,
} from "@/constans";
import { types_services_store } from "@/stores/data_store";
import { isEmptyObj, useGetResponsiveValue } from "@/utils";

const render_icons = (path: Types_services_key): ReactNode | null => {
  if (isEmptyObj(types_services_data_decor)) return null;

  return types_services_data_decor[path];
};

export const Types_services = observer(() => {
  const { data } = types_services_store;
  const indentationSlide = useGetResponsiveValue<number>(20, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    3,
    numberVisibleElementsData,
  );

  return (
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={indentationSlide}
        slidesPerView={quantitySlide}
        pagination={{ clickable: true }}
      >
        <ContentLoader
          currentStore={types_services_store}
          skeletonComponent={SkeletonServiceCard}
          initialVisibleCount={3}
        >
          {data.map(({ head, description, path }, idx: number) => (
            <SwiperSlide
              key={idx}
              className="relative flex h-auto flex-col items-start overflow-hidden rounded-3xl bg-[#031817] p-4 text-sm before:absolute before:left-0 before:top-0 before:z-[-1] before:h-[120px] before:w-full before:rotate-180 before:bg-[url('/images/decor_serv.svg')] before:bg-cover before:bg-no-repeat 2xl:before:h-[140px] 3xl:p-10 3xl:before:h-[160px]"
            >
              <Title
                headingType="md"
                className="mb-7 text-lg uppercase 2xl:text-2xl 3xl:text-3xl"
              >
                {head}
              </Title>
              <p className="mb-5 flex-auto text-lg lg:text-xl 2xl:mb-7 2xl:text-2xl 3xl:mb-10 3xl:text-3xl 3xl:leading-normal">
                {description}
              </p>
              <Link
                to={`/services/${path}`}
                className="text-lg duration-300 hover:text-white md:text-xl 2xl:text-2xl 3xl:text-3xl"
              >
                Узнать подробнее
              </Link>
              {render_icons(path) && (
                <div className="absolute bottom-3 right-0 -z-10 opacity-5 *:h-auto *:w-[200px] *:text-[#00a887]">
                  {render_icons(path)}
                </div>
              )}
            </SwiperSlide>
          ))}
        </ContentLoader>
      </Swiper>
    </div>
  );
});
