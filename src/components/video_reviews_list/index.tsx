import { PlayCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Video_reviews_data = [
  {
    description:
      "На изображении представлен Дмитрий Яшанькин, одетый в черную майку и оранжевые шорты. Он стоит в помещении с большими окнами и пальмами на заднем плане. Дмитрий улыбается и жестикулирует руками. На его запястье виден браслет и часы. Фон оформлен в светлых тонах с элементами декора.",
    person_about_club: "Смотреть видео отзыв от Дмитрия Яшанькина",
    preview_image: {
      jpg: "/images/video_reviews/review_1.jpg",
      webp: "/images/video_reviews/review_1.webp",
    },
    link_to_video:
      "https://vk.com/video_ext.php?oid=-72055975&id=456239671&hd=2&autoplay=1",
  },
  {
    description:
      "На изображении представлена Дарья Плужникова, одетая в черный спортивный топ и темные лосины с надписью 'NEBBIA'. Она стоит на балконе фитнес-клуба, держась за перила. На заднем плане видны тренажеры и пальмы. Дарья улыбается и смотрит в камеру. Фон оформлен в светлых тонах с элементами декора.",
    person_about_club: "Смотреть видео отзыв от Дарий Плужниковой",
    preview_image: {
      jpg: "/images/video_reviews/review_2.jpg",
      webp: "/images/video_reviews/review_2.webp",
    },
    link_to_video:
      "https://vk.com/video_ext.php?oid=-72055975&id=456240157&hd=2&autoplay=1",
  },
  {
    description:
      "На изображении представлен Дмитрий Яшанькин, который выполняет упражнение тяна в наклоне со штангой в тренажерном зале. Он одет в черную майку и оранжевые шорты, на ногах белые кроссовки. Дмитрий сосредоточен на выполнении упражнения, его руки согнуты под углом, а гантели держатся горизонтально. На заднем плане видны различные тренажеры и оборудование для фитнеса.",
    person_about_club: "Смотреть видео отзыв от Дмиртия Яшанькина",
    preview_image: {
      jpg: "/images/video_reviews/review_3.jpg",
      webp: "/images/video_reviews/review_3.webp",
    },
    link_to_video:
      "https://vk.com/video_ext.php?oid=-72055975&id=456239665&hd=2&autoplay=1",
  },
  {
    description:
      "На изображении представлен Сергей Югай, который выполняет упражнение на тренажере в тренажерном зале. Он одет в светло-серую футболку и черные брюки. Сергей сидит на скамье, держась за рукоятки тренажера, его руки вытянуты вверх. На заднем плане видны различные тренажеры и оборудование для фитнеса.",
    person_about_club: "Смотреть видео отзыв от Сергея Югай",
    preview_image: {
      jpg: "/images/video_reviews/review_4.jpg",
      webp: "/images/video_reviews/review_4.webp",
    },
    link_to_video:
      "https://vk.com/video_ext.php?oid=-72055975&id=456239681&hd=2&autoplay=1",
  },
  {
    description:
      "На изображении представлен Павел Попов, который стоит в помещении с большими окнами и пальмами на заднем плане. Он одет в светло-серую футболку с надписью 'CARNITY WARRIOR' и черные брюки. На его запястье виден смарт-часы и браслет. Павел улыбается и смотрит в камеру. Фон оформлен в светлых тонах с элементами декора.",
    person_about_club: "Смотреть видео отзыв от Павла Попова",
    preview_image: {
      jpg: "/images/video_reviews/review_5.jpg",
      webp: "/images/video_reviews/review_5.webp",
    },
    link_to_video:
      "https://vk.com/video_ext.php?oid=-72055975&id=456240062&hd=2&autoplay=1",
  },
  {
    description:
      "На изображении представлены два мужчины в тренажерном зале. Один из них, одетый в черную майку с черепом и черные шорты, держит световой меч. Второй мужчина, одетый в желтую майку и темно-синие шорты, показывает жест 'лайк'. Оба улыбаются и смотрят в камеру. На заднем плане видны различные тренажеры и оборудование для фитнеса.",
    person_about_club: "Смотреть видео отзыв от Романа Могучий",
    preview_image: {
      jpg: "/images/video_reviews/review_6.jpg",
      webp: "/images/video_reviews/review_6.webp",
    },
    link_to_video:
      "https://vk.com/video_ext.php?oid=-72055975&id=456240018&hd=2&autoplay=1",
  },
  {
    description:
      "На изображении представлены два человека в тренажерном зале. Слева стоит молодой человек, одетый в белую футболку и черные шорты, показывая бицепс. Справа стоит Максим Битаров, одетый в черную футболку с принтом и черную кепку, также показывая бицепс. Оба улыбаются и смотрят в камеру. На заднем плане видны различные тренажеры и оборудование для фитнеса.",
    person_about_club: "Смотреть видео отзыв от Максима Битарова",
    preview_image: {
      jpg: "/images/video_reviews/review_7.jpg",
      webp: "/images/video_reviews/review_7.webp",
    },
    link_to_video:
      "https://vk.com/video_ext.php?oid=-72055975&id=456239913&hd=2&autoplay=1",
  },
  {
    description:
      "На изображении представлен Гога Тупурия, который стоит в помещении с большими окнами и пальмами на заднем плане. Он одет в черную майку и желтые шорты. Гога улыбается и жестикулирует руками. На его запястье виден браслет. Фон оформлен в светлых тонах с элементами декора.",
    person_about_club: "Смотреть видео отзыв от Гога Топурия",
    preview_image: {
      jpg: "/images/video_reviews/review_8.jpg",
      webp: "/images/video_reviews/review_8.webp",
    },
    link_to_video:
      "https://vk.com/video_ext.php?oid=-72055975&id=456239856&hd=2&autoplay=1",
  },
  {
    description:
      "На изображении представлен Владимир Московченко, который стоит в тренажерном зале. Он одет в ярко-желтую майку с надписью 'KIPSTA' и черные шорты. У Владимира борода и татуировки на руках. На его запястье виден смарт-часы. Владимир жестикулирует руками и смотрит в камеру. На заднем плане видны различные тренажеры и оборудование для фитнеса.",
    person_about_club: "Смотреть видео отзыв от Владимира Московченко",
    preview_image: {
      jpg: "/images/video_reviews/review_9.jpg",
      webp: "/images/video_reviews/review_9.webp",
    },
    link_to_video:
      "https://vk.com/video_ext.php?oid=-72055975&id=456239713&hd=2&autoplay=1",
  },
  {
    description:
      "На изображении представлен Александр Фёдоров, который стоит в помещении с большими окнами и пальмами на заднем плане. Он одет в белую футболку с логотипом 'AF-Club'. Александр жестикулирует руками и смотрит в камеру. На его запястье виден браслет. Фон оформлен в светлых тонах с элементами декора.",
    person_about_club: "Смотреть видео отзыв от Александра Фёдорова",
    preview_image: {
      jpg: "/images/video_reviews/review_10.jpg",
      webp: "/images/video_reviews/review_10.webp",
    },
    link_to_video:
      "https://vk.com/video_ext.php?oid=-72055975&id=456239701&hd=2&autoplay=1",
  },
  {
    description:
      "На изображении представлен Станислав Линдовер, который стоит в помещении с большими окнами и пальмами на заднем плане. Он одет в зеленую рубашку-поло и темные джинсы. Станислав жестикулирует рукой и смотрит в камеру. На его запястье виден браслет. Фон оформлен в светлых тонах с элементами декора.",
    person_about_club: "Смотреть видео отзыв от Станислава Линдовер",
    preview_image: {
      jpg: "/images/video_reviews/review_11.jpg",
      webp: "/images/video_reviews/review_11.webp",
    },
    link_to_video:
      "https://vk.com/video_ext.php?oid=-72055975&id=456239664&hd=2&autoplay=1",
  },
  {
    description:
      "На изображении представлен Дмитрий Голубочкин, который стоит в помещении с большими окнами и пальмами на заднем плане. Он одет в черную футболку с надписью 'NO GENETICS NO GAIN' и черную кепку с логотипом 'GORILLA WEAR'. У Дмитрия борода, и он улыбается, смотря в камеру. На его запястье виден браслет. Фон оформлен в светлых тонах с элементами декора.",
    person_about_club: "Смотреть видео отзыв от Дмитрия Голубочкина",
    preview_image: {
      jpg: "/images/video_reviews/review_12.jpg",
      webp: "/images/video_reviews/review_12.webp",
    },
    link_to_video:
      "https://vk.com/video_ext.php?oid=-72055975&id=456240243&hd=2&autoplay=1",
  },
  {
    description:
      "На изображении представлен Виктор Симкин, который стоит в помещении с большими окнами и пальмами на заднем плане. Он одет в черную майку и черные шорты, на ногах белые кроссовки. Виктор показывает жест 'лайк' и улыбается, смотря в камеру. На его запястье виден браслет. Фон оформлен в светлых тонах с элементами декора.",
    person_about_club: "Смотреть видео отзыв от Виктора Симкина",
    preview_image: {
      jpg: "/images/video_reviews/review_13.jpg",
      webp: "/images/video_reviews/review_13.webp",
    },
    link_to_video:
      "https://vk.com/video_ext.php?oid=-72055975&id=456240220&hd=2&autoplay=1",
  },
  {
    description:
      "На изображении представлен Денис Цыпленков, который стоит в помещении с большими окнами и пальмами на заднем плане. Он одет в серую толстовку с принтом черепа и черные штаны с надписью 'Inferno'. На голове у Дениса черная кепка. Он смотрит в сторону и держится за перила. Фон оформлен в светлых тонах с элементами декора.",
    person_about_club: "Смотреть видео отзыв от Дениса Цыпленкова",
    preview_image: {
      jpg: "/images/video_reviews/review_14.jpg",
      webp: "/images/video_reviews/review_14.webp",
    },
    link_to_video:
      "https://vk.com/video_ext.php?oid=-72055975&id=456240222&hd=2&autoplay=1",
  },
];

export const Video_reviews_list = () => {
  const [isVideoActive, setIsVideoActive] = useState<null | number>(null);

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
      {Video_reviews_data?.map(
        (
          {
            description,
            person_about_club,
            preview_image: { jpg, webp },
            link_to_video,
          },
          idx: number,
        ) => (
          <SwiperSlide key={idx}>
            <button
              type="button"
              className="btn_review"
              onClick={() =>
                setIsVideoActive(isVideoActive === idx ? null : idx)
              }
            >
              <picture>
                <source srcSet={jpg} type="image/webp" />
                <img
                  className="block w-full"
                  width={370}
                  src={jpg}
                  alt={description}
                  aria-label={description}
                  title={person_about_club}
                />
              </picture>
              <PlayCircleOutlined className="play_icon" />
            </button>
            {isVideoActive === idx && (
              <iframe
                src={link_to_video}
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                allowFullScreen
              ></iframe>
            )}
          </SwiperSlide>
        ),
      )}
    </Swiper>
  );
};
