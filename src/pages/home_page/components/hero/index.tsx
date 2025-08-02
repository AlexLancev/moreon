import {
  HandCoins as IconHandCoins,
  MessageCircleQuestion as IconMessageCircleQuestion,
} from "lucide-react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container, Render_image } from "@/components";
import { AnchorLink } from "@/components/ui/anchorLink";
import { Button } from "@/components/ui/button";
import { hero_store } from "@/stores/data_store";

export const Home_hero = observer(() => {
  const { data, isLoading, isError } = hero_store;

  if (!data || data.length === 0) {
    return <div>Нет доступных данных</div>;
  }

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  return (
    <section className="m-auto w-full">
      <Swiper
        className="pb-44 xxs:pb-32 lg:pb-16 2xl:pb-24"
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
      >
        {data.map(
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
                  <div className="absolute z-10 grid w-full translate-y-[1rem] items-center gap-3 text-white xxs:grid-cols-2 lg:flex lg:-translate-y-[6rem] 2xl:-translate-y-[12rem]">
                    <Button asChild className="mt-0 lg:w-fit">
                      <Link to={`/stock/${id}`}>
                        Узнать подробнее <IconMessageCircleQuestion />
                      </Link>
                    </Button>
                    <Button asChild className="mt-0 lg:w-fit">
                      <AnchorLink className="customGreyBtn">
                        Рассчитать стоимость
                        <IconHandCoins />
                      </AnchorLink>
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
