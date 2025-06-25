import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

import { Title } from "@/components";

import { performance_data_store } from "@/stores/data_store";
import { isEmptyObj } from "@/utils";

export const Performance = observer(({ data_key }: Performance_type) => {
  const { data, isLoading, isError } = performance_data_store;

  const performance_bd = toJS(data?.[0]);

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

        const { arr_images, title, description } = currentData;

        return (
          <li key={idx} className="performance_item" data-decor={title}>
            <Swiper
              className="w-full max-w-[525px] mx-0"
              modules={[Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {arr_images?.map(
                ({ images_description, images_url: { jpg } }, idx: number) => (
                  <SwiperSlide
                    className="rounded-3xl overflow-hidden"
                    key={idx}
                  >
                    <picture>
                      <source srcSet={jpg} type="image/webp" />
                      <img
                        className="w-full rounded-3xl"
                        width={525}
                        height={293}
                        src={jpg}
                        alt={images_description}
                        aria-label={images_description}
                        loading="lazy"
                      />
                    </picture>
                  </SwiperSlide>
                ),
              )}
            </Swiper>
            <div className="w-full max-w-[525px] pt-8">
              <Title
                size="md"
                className="uppercase head_decor text-2xl font-bold mb-3"
              >
                {title}
              </Title>
              <p className="text-lg">{description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
});
