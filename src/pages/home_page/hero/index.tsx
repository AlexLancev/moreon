import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const data_action = [
  {
    label:
      "Мужчина и женщина в белых футболках улыбаются и занимаются фитнесом с гантелями. На заднем плане зеленовато-черная градиентная заставка с надписью 'Скидка 30% на вторую карту'",
    url_img_webp: "/images/home_hero/hero_1.webp",
    url_img_jpg: "/images/home_hero/hero_1.jpg",
  },
  {
    label:
      "Мускулистый мужчина с татуировками на руках и груди в белой майке с надписью 'LAM' сидит на скамье в тренажерном зале. На заднем плане темная заставка с надписью 'Я выбираю Премиум Фитнес'.",
    url_img_webp: "/images/home_hero/hero_2.webp",
    url_img_jpg: "/images/home_hero/hero_2.jpg",
  },
  {
    label:
      "Скачивайте новое приложение Moreon Fitness&Spa! На заднем плане темная волнистая заставка с изображением гантелей и фитнес-мяча. Справа расположен смартфон с открытым экраном, на котором виден логотип 'Moreon Fitness'.",
    url_img_webp: "/images/home_hero/hero_3.webp",
    url_img_jpg: "/images/home_hero/hero_3.jpg",
  },
  {
    label:
      "Скидка -30% на клубные карты для школьников и студентов! На заднем плане темная заставка с математическими символами и рисунками. Справа улыбающаяся девушка в джинсовой куртке и белой футболке, держит ручку и тетрадь, над её головой нарисована ученическая шапочка.",
    url_img_webp: "/images/home_hero/hero_4.webp",
    url_img_jpg: "/images/home_hero/hero_4.jpg",
  },
  {
    label:
      "Фитнес для всей семьи. На заднем плане виден интерьер фитнес-центра с тренажерами и бассейном. Справа мальчик в боксерских перчатках и спортивных шортах стоит рядом с мужчиной в черной футболке. Под заголовком расположены иконки и подписи: 'Тренажерный зал', 'Бассейн', 'Единоборства', 'Кроссфит'.",
    url_img_webp: "/images/home_hero/hero_5.webp",
    url_img_jpg: "/images/home_hero/hero_5.jpg",
  },
  {
    label:
      "Фитнес Trade-In: меняем старый клуб на новый! Скидка -30%. На заднем плане виден интерьер фитнес-центра с тренажерами. Справа мужчина в серой футболке и черных шортах выполняет упражнение.",
    url_img_webp: "/images/home_hero/hero_6.webp",
    url_img_jpg: "/images/home_hero/hero_6.jpg",
  },
  {
    label:
      "Детский фитнес на суше и в воде. На заднем плане виден интерьер фитнес-центра с тренажерами и бассейном. Справа мальчик в боксерских перчатках с надписью 'Moreon Fitness'. Под заголовком указаны направления: 'Единоборства' и 'Плавание'.",
    url_img_webp: "/images/home_hero/hero_7.webp",
    url_img_jpg: "/images/home_hero/hero_7.jpg",
  },
  {
    label:
      "Скидка до -50% на клубную карту при покупке тарифа «Депозит». Повлияй на свою выгоду! На заднем плане темная заставка с дымом. Справа женщина в спортивном костюме держит мяч.",
    url_img_webp: "/images/home_hero/hero_8.webp",
    url_img_jpg: "/images/home_hero/hero_8.jpg",
  },
];

export const Home_hero = () => {
  return (
    <div className="w-full max-w-[1600px] m-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        {data_action?.map(
          ({ url_img_webp, url_img_jpg, label }, idx: number) => (
            <SwiperSlide key={idx} className="relative">
              <picture>
                <source srcSet={url_img_webp} type="image/webp" />
                <img src={url_img_jpg} alt={label} className="w-full m-auto" />
              </picture>
              <div className="absolute left-10 bottom-10 z-10 flex items-center gap-x-5 text-white">
                <Link
                  to="/"
                  className="py-4 px-7 rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
                >
                  Узнать подробнее
                </Link>
                <button
                  type="button"
                  className="py-4 px-7 rounded-xl bg-[rgba(255,255,255,0.2)] shadow-custom-shadows duration-300 hover:bg-[rgba(255,255,255,0.3)] hover:translate-y-[1px]"
                >
                  Рассчитать стоимость
                </button>
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </div>
  );
};
