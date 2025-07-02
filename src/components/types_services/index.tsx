import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import { ReactNode } from "react";

import { Title } from "@/components";

import { types_services_store } from "@/stores/data_store";
import {
  numberVisibleElementsData,
  sizeRangesData,
  types_services_data_decor,
} from "@/constans";
import { isEmptyObj, useGetResponsiveValue } from "@/utils";

const render_icons = (path: Types_services_key): ReactNode | null => {
  if (isEmptyObj(types_services_data_decor)) return null;

  return types_services_data_decor[path];
};

export const Types_services = observer(() => {
  const { data, isLoading, isError } = types_services_store;
  const indentationSlide = useGetResponsiveValue<number>(20, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    3,
    numberVisibleElementsData,
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch data</div>;

  if (!types_services_store || !data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={indentationSlide}
        slidesPerView={quantitySlide}
        pagination={{ clickable: true }}
      >
        {data.map(({ head, description, path }, idx: number) => (
          <SwiperSlide
            key={head ?? idx}
            className="relative p-4 3xl:p-10 h-auto bg-[#031817] flex flex-col items-start overflow-hidden rounded-3xl text-sm before:w-full before:h-[120px] 2xl:before:h-[140px] 3xl:before:h-[160px] before:absolute before:top-0 before:left-0 before:z-[-1] before:bg-[url('/images/decor_serv.svg')] before:bg-no-repeat before:bg-cover before:rotate-180"
          >
            <Title
              size="md"
              className="uppercase mb-7 text-lg 2xl:text-2xl 3xl:text-3xl"
            >
              {head}
            </Title>
            <p className="mb-5 2xl:mb-7 3xl:mb-10 flex-auto text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl 3xl:leading-normal">
              {description}
            </p>
            <Link
              to={`/services/${path}`}
              className="duration-300 hover:text-white text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl"
            >
              Узнать подробнее
            </Link>
            {render_icons(path) && (
              <div className="absolute bottom-3 right-0 -z-10 opacity-5 *:text-[#00a887] *:w-[200px] *:h-auto">
                {render_icons(path)}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});
