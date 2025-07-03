import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import { HandCoins, MessageCircleQuestion } from "lucide-react";

import { observer } from "mobx-react-lite";

import { Container, Render_image } from "@/components";
import { Button } from "@/components/ui/button";
import { hero_store } from "@/stores/data_store";

export const Home_hero = observer(() => {
  const { data, isLoading, isError } = hero_store;

  if (!hero_store || !data || data.length === 0) {
    return <div>No data available</div>;
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch data</div>;

  return (
    <section className="w-full m-auto ">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
      >
        {data?.map(
          (
            {
              url_xxxl_img_webp,
              url_xxxl_img_jpg,
              url_xxl_img_webp,
              url_xxl_img_jpg,
              url_xl_img_webp,
              url_xl_img_jpg,
              label,
              id,
            },
            idx: number,
          ) => (
            <SwiperSlide key={idx} className="relative">
              <Render_image
                data_image={{
                  url_xxxl_img_webp,
                  url_xxxl_img_jpg,
                  url_xxl_img_webp,
                  url_xxl_img_jpg,
                  url_xl_img_webp,
                  url_xl_img_jpg,
                  label,
                }}
              />
              <Container>
                <div className="relative">
                  <div className="absolute z-10 flex items-center gap-x-5 text-white -translate-y-[8rem] 2xl:-translate-y-[12rem]">
                    <Button asChild>
                      <Link to={`/stock/${id}`}>
                        Узнать подробнее <MessageCircleQuestion />
                      </Link>
                    </Button>
                    <Button asChild>
                      <a className="customGreyBtn" href="#price-calc">
                        Рассчитать стоимость
                        <HandCoins />
                      </a>
                    </Button>
                  </div>
                </div>
              </Container>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </section>
  );
});
