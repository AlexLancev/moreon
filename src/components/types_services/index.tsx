import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const data = [
  {
    head: "Тренажерный зал",
    description:
      "Площадь тренажерного зала 1500 м², потолок 35 м. Светлый и просторный зал с панорамными окнами, приточная система вентиляции, вид на березовую рощу. Оборудование премиум-класса Matrix и TechnoGym. Всё для комфортных тренировок",
    to_link: "/uslugi/trenazhernyj-zal/",
  },
  {
    head: "СПА и Термы",
    description:
      "25 бань и саун, более 70 спа-услуг, джакузи, соляная пещера, двухуровневый бассейн, массаж, контрастные ванны. Панорамные окна и веранда. Всё для полного расслабления после отличных тренировок",
    to_link: "/uslugi/bani-i-bassejny/",
  },
  {
    head: "Единоборства",
    description:
      "Более 500 м² для вашей уверенности в себе! Зона оборудована в соответствии с требованиям профессионального спорта: ринг, октагон, клетка BJJ, настенные боксерские подушки для отработки прямых ударов, подвесные снаряды, татами для борьбы.",
    to_link: "/uslugi/edinoborstva/",
  },
  {
    head: "Групповые занятия",
    description:
      "Популярные групповые тренировки мировых брендов проводят сертифицированные тренеры. Разнообразие программ позволяет каждому найти направление на свой вкус, выбери свою продуктивную тренировку!",
    to_link: "/uslugi/gruppovye-programmy/",
  },
];

export const Types_services = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        {data?.map(({ head, description, to_link }, idx: number) => (
          <SwiperSlide
            key={head ?? idx}
            className="relative p-7 bg-[#031817] flex flex-col overflow-hidden rounded-3xl text-sm min-h-[430px] before:w-full before:h-[120px] before:absolute before:top-0 before:left-0 before:z-[-1] before:bg-[url('/images/decor_serv.svg')] before:bg-no-repeat before:bg-cover before:rotate-180"
          >
            <h3 className="uppercase mb-20 text-xl">{head}</h3>
            <p className="mb-2 flex-auto text-lg">{description}</p>
            <Link to={to_link} className="duration-300 hover:text-white">
              Узнать подробнее
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
