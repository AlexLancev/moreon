import { useQuery } from "@tanstack/react-query";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import { types_services_data } from "@/data";
import { types_services_store } from "@/stores/data_store";

export const Types_services = observer(() => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["types_services"],
    queryFn: types_services_data,
  });

  useEffect(() => {
    if (data) {
      types_services_store.set_data(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: Failed to fetch data</div>;

  if (
    !types_services_store ||
    !types_services_store.data ||
    types_services_store.data.length === 0
  ) {
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
        {types_services_store.data.map(
          ({ head, description, path }: Types_services_type, idx: number) => (
            <SwiperSlide
              key={head ?? idx}
              className="relative p-7 bg-[#031817] flex flex-col overflow-hidden rounded-3xl text-sm min-h-[430px] before:w-full before:h-[120px] before:absolute before:top-0 before:left-0 before:z-[-1] before:bg-[url('/images/decor_serv.svg')] before:bg-no-repeat before:bg-cover before:rotate-180"
            >
              <h3 className="uppercase mb-20 text-xl">{head}</h3>
              <p className="mb-2 flex-auto text-lg">{description}</p>
              <Link to={path} className="duration-300 hover:text-white">
                Узнать подробнее
              </Link>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </div>
  );
});
