import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import { ReactNode } from "react";

import { Title } from "@/components";

import { types_services_store } from "@/stores/data_store";
import { types_services_data_decor } from "@/constans";
import { isEmptyObj } from "@/utils";

const render_icons = (path: Types_services_key): ReactNode | null => {
  if (isEmptyObj(types_services_data_decor)) return null;

  return types_services_data_decor[path];
};

export const Types_services = observer(() => {
  const { data, isLoading, isError } = types_services_store;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch data</div>;

  if (!types_services_store || !data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        {data.map(({ head, description, path }, idx: number) => (
          <SwiperSlide
            key={head ?? idx}
            className="relative p-7 bg-[#031817] flex flex-col overflow-hidden rounded-3xl text-sm min-h-[430px] before:w-full before:h-[120px] before:absolute before:top-0 before:left-0 before:z-[-1] before:bg-[url('/images/decor_serv.svg')] before:bg-no-repeat before:bg-cover before:rotate-180"
          >
            <Title size="md" className="uppercase mb-20 text-xl">
              {head}
            </Title>
            <p className="mb-2 flex-auto text-lg">{description}</p>
            <Link
              to={`/services/${path}`}
              className="duration-300 hover:text-white"
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
