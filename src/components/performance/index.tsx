import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

import { performance_data_store } from "@/stores/data_store";
import { isEmptyObj } from "@/utils";

export const Performance = observer(
  ({ data_key, isVisibleBtn }: Performance_type) => {
    const { data, isLoading, isError } = performance_data_store;

    const performance_bd = toJS(data?.[0]?.data);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: Failed to fetch data</div>;

    if (
      !performance_data_store ||
      !performance_bd ||
      isEmptyObj(performance_bd) ||
      !data_key ||
      data_key.length === 0
    )
      return null;

    return (
      <ul className="performance">
        {data_key.map((key, idx: number) => {
          const currentData = performance_bd[key];
          if (!currentData) return null;

          const { decor_title, arr_images, title, description } = currentData;

          return (
            <li
              key={idx}
              className="performance_item"
              style={{
                backgroundImage: `url(${decor_title})`,
              }}
            >
              <Swiper
                className="w-full max-w-[525px] mx-0"
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                {arr_images?.map(
                  ({ images_description, images_url: { jpg, webp } }) => (
                    <SwiperSlide className="rounded-3xl overflow-hidden">
                      <picture>
                        <source srcSet={jpg} type="image/webp" />
                        <img
                          className="w-full rounded-3xl"
                          width={525}
                          height={293}
                          src={jpg}
                          alt={images_description}
                          aria-label={images_description}
                        />
                      </picture>
                    </SwiperSlide>
                  ),
                )}
              </Swiper>
              <div className="w-full max-w-[525px] pt-8">
                <h3 className="uppercase head_decor text-2xl font-bold mb-3">
                  {title}
                </h3>
                <p className="text-lg">{description}</p>
                {isVisibleBtn && (
                  <button
                    type="button"
                    className="text-white mt-10 py-4 px-7 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgba(255,255,255,0.2)] shadow-custom-shadows duration-300 hover:bg-[rgba(255,255,255,0.3)] hover:translate-y-[1px]"
                  >
                    Смотреть меню
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    );
  },
);
