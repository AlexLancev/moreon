import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import classNames from "classnames";

const About_us_data = [
  {
    title: "14 бань и саун в СПА для гостей 14+",
    description:
      "Русская, римская, греческая баня, финская сауна, аромасауна, инфракрасная сауна, хаммам, 2 соляные пещеры, дорожка Кнайпа, бассейн, 6 гидромассажных джакузи и более 70 услуг по уходу за лицом и телом.",
  },
  {
    title: "Спортивный бассейн 25 м",
    description:
      "5 дорожек для плавания для индивидуальных и групповых тренировок, а также для свободного плавания.",
  },
  {
    title: "600+ тренажеров Matrix и Technogym",
    description:
      "Включая узкопрофильные: тренажеры для армрестлинга, тренировки предплечий, армлифтинга, динамических нагрузок.",
  },
  {
    title: "Зал для единоборств 500 м²",
    description:
      "Оснащен рингом, октагоном, клеткой BJJ, 12-ю боксерскими снарядами.",
  },
  {
    title: "Зал функциональных тренировок 200 м²",
    description:
      "Отдельный зал, где сочетается оборудование для функциональных и силовых тренировок, а также для тяжелой атлетики - штанги, стойки, брусья, широкий гантельный ряд.",
  },
  {
    title: "6 залов для групповых программ",
    description:
      "И более 40 программ тренировок по интересам в любое время, включая мировые Less Mills, Hot Iron",
  },
  {
    title: "Студия Real Ryder",
    description:
      "RealRyder благодаря своей подвижной раме даёт возможность совершать манёвры с резкими поворотами, виражами, наклонами и подъемами, а в дополнении с киноэкраном и мощной акустикой - вы попадёте в иллюзию настоящей велогонки.",
  },
  {
    title: "Высота потолков 35 м и панорамные окна",
    description:
      "Продуманное пространство с панорамным видом на березовую рощу, удобное зонирование, комфортно и нет очередей.",
  },
  {
    title: "Приточная система вентиляции",
    description:
      "26 000 м³ воздуха, который поступает с улицы, что благоприятно сказывается на жиросжигании, ведь липолиз возможен только с кислородом.",
  },
  {
    title: "Парковка",
    description: "Бесплатная просторная парковка на 300+ автомобилей.",
  },
  {
    title: "Юридическая надежность",
    description:
      "Мы всегда помогаем решить вопросы клиента - расторгнуть договор, поменять тренера, вернуть деньги за услугу, на каждую услугу предоставляется чек.",
  },
  {
    title: "Гибкая система тарифов",
    description:
      "Карты выходного дня, с фиксированным временем посещения, специальные тарифы для студентов, безлимитные, с системой “депозит”, рассрочка.",
  },
  {
    title: "Система лояльности для членов клуба",
    description:
      "-10% скидка на дополнительные услуги на ресепшн фитнеса, -10% на услуги в СПА,  -20% скидка на меню в кафе “Порт” и “Остров”, 4 вводные персональные тренировки, фитнес-тестирование.",
  },
  {
    title: "Квалифицированный тренерский состав",
    description:
      "Наша команда – это кандидаты и мастера спорта, призеры международных соревнований с высшим спортивным или профессиональным фитнес-образованием, сертифицированные специалисты.",
  },
  {
    title: "Персональный менеджер",
    description:
      "Обращаясь в наш фитнес, за вами закрепляется персональный менеджер, к которому можно обратиться за решением вопросов.",
  },
  {
    title: "Уникальный дизайн",
    description: "Живые растения, цветы и даже пальмы! Настоящий оазис!",
  },
];

export const About_us_list = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const renderSlide = (startIndex: number, endIndex: number) => (
    <SwiperSlide key={startIndex} className="flex flex-col gap-5">
      {About_us_data.slice(startIndex, endIndex).map(
        ({ title, description }, idx: number) => {
          const currentIndex = startIndex + idx;
          return (
            <button
              key={title || idx}
              className={classNames("about_slide", {
                "about_slide--active": visibleIndex === currentIndex,
              })}
              type="button"
              onClick={() =>
                setVisibleIndex(
                  visibleIndex === currentIndex ? null : currentIndex,
                )
              }
            >
              <h3 className="text-base">{title}</h3>
              <p
                className={classNames("duration-300 transition-opacity", {
                  ["activeClasses"]: visibleIndex === currentIndex,
                  ["inactiveClasses"]: visibleIndex !== currentIndex,
                })}
              >
                {description}
              </p>
            </button>
          );
        },
      )}
    </SwiperSlide>
  );

  const slides = [];
  for (let i = 0; i < About_us_data.length; i += 4) {
    slides.push(renderSlide(i, i + 4));
  }

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={2}
      pagination={{ clickable: true }}
    >
      {slides}
    </Swiper>
  );
};
