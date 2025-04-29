import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { observer } from "mobx-react-lite";

import { team_data } from "@/data";
import { team_store } from "@/stores/data_store";

export const Team_list = observer(({ isActiveTab }: Team_key_type) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["team"],
    queryFn: team_data,
  });

  useEffect(() => {
    if (data) {
      team_store.set_data(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: Failed to fetch data</div>;

  if (!team_store || !team_store.data || team_store.data.length === 0) {
    return <div>No data available</div>;
  }

  const selected_category_data = team_store.data?.filter(
    ({ type }) => type?.[isActiveTab],
  );

  const renderSlide = (startIndex: number, endIndex: number) => (
    <SwiperSlide key={startIndex} className="min-h-[348px]">
      {selected_category_data
        .slice(startIndex, endIndex)
        .map(
          (
            { name, url_images: { webp, jpg }, about_coach: { qualification } },
            idx: number,
          ) => {
            return (
              <button
                type="button"
                key={idx}
                className="relative group overflow-hidden rounded-3xl after:w-full after:h-[120px] after:absolute after:bottom-0 after:left-0 after:z-[0] after:bg-[url('/images/decor_serv.svg')] after:bg-no-repeat after:bg-cover after:opacity-80"
              >
                <>
                  <picture>
                    <source srcSet={webp} type="image/webp" />
                    <img
                      className="w-full h-full object-cover duration-700 group-hover:scale-[1.1]"
                      width={300}
                      src={jpg}
                      alt={`На фото ${qualification}, ${name}`}
                      aria-label={`На фото ${qualification}, ${name}`}
                      title={`Ознокамится подробнее с ${name}`}
                    />
                  </picture>
                  <strong className="absolute z-10 bottom-5 left-5 text-[#d6d6d6] text-lg">
                    {name}
                  </strong>
                </>
              </button>
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
      className="team_list"
      modules={[Pagination]}
      slidesPerView={4}
      spaceBetween={20}
      pagination={{ clickable: true }}
    >
      {slides}
    </Swiper>
  );
});
