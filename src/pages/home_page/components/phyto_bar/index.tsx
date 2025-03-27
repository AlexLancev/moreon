import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Swiper_slide_data = [
  {
    description:
      "Модерный интерьер кафе с белыми пластиковыми стульями и столами, украшенными зелеными растениями в больших деревянных кашпо. На заднем плане виден кофейный бар с подсветкой и экранами для заказов. Потолок выполнен из темного деревянного панелирования с линейными светильниками, создавая современную атмосферу.",
    images_url: {
      jpg: "/images/phyto_bar/result_bar_1.jpg",
      webp: "/images/phyto_bar/result_bar_1.webp",
    },
  },
  {
    description:
      "Модерный интерьер кафе или кофейни с современным дизайном. В помещении установлены белые столики и темно-синие пластиковые стулья, украшенные зелеными растениями в больших деревянных кашпо. На заднем плане виден бар с подсветкой и экранами для заказов, а также полки с товарами. Потолок выполнен из темного деревянного панелирования с линейными светильниками, создавая уютную и стильную атмосферу.",
    images_url: {
      jpg: "/images/phyto_bar/result_bar_2.jpg",
      webp: "/images/phyto_bar/result_bar_2.webp",
    },
  },
  {
    description:
      "Модерный интерьер общественного пространства с современным дизайном. В помещении установлены белые столики и стулья разных цветов (белые и темно-синие), украшенные зелеными растениями в больших деревянных кашпо. Потолок выполнен из темного деревянного панелирования с линейными светильниками, создавая яркое освещение. На заднем плане видны рабочие места за прозрачными перегородками, а также дополнительная зона отдыха с диваном. Пол покрыт глянцевой плиткой, отражающей свет.",
    images_url: {
      jpg: "/images/phyto_bar/result_bar_3.jpg",
      webp: "/images/phyto_bar/result_bar_3.webp",
    },
  },
];

export const Phyto_bar = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-10">
          Фито <span className="head_decor">бар</span>
        </h2>
        <div className="flex gap-x-10">
          <Swiper
            className="w-full max-w-[525px] mx-0"
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {Swiper_slide_data?.map(
              ({ description, images_url: { jpg, webp } }) => (
                <SwiperSlide className="rounded-3xl overflow-hidden">
                  <picture>
                    <source srcSet={webp} type="image/webp" />
                    <img
                      className="w-full"
                      width={525}
                      height={293}
                      src={jpg}
                      alt={description}
                      aria-label={description}
                    />
                  </picture>
                </SwiperSlide>
              ),
            )}
          </Swiper>
          <div className="w-full max-w-[525px]">
            <h3 className="uppercase head_decor text-base font-bold mb-3">
              Фито бар
            </h3>
            <p>
              Зарядитесь энергией перед тренировкой и восстановите силы после! В
              нашем фитнес-баре для вас спортивные напитки и питание, а также
              коктейли, фреши, чай и кофе. Вы сможете повысить результативность
              тренировок, уменьшить чувство усталости, снизить вес благодаря
              продукции из ассортимента фитобара. Поможем построить тело мечты!
            </p>
            <p className="mb-10">
              А персональные тренер подскажет, какой продукт повысит
              эффективность вашего тренировочного процесса.
            </p>
            <button
              type="button"
              className="text-white py-4 px-7 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgba(255,255,255,0.2)] shadow-custom-shadows duration-300 hover:bg-[rgba(255,255,255,0.3)] hover:translate-y-[1px]"
            >
              Смотреть меню
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
