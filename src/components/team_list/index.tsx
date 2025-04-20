import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export type Tab_type = "martial_arts" | "gym" | "group_training" | "pool";

type Team_list_type = {
  isActiveTab: Tab_type;
};

export const team_data = [
  {
    name: "Бобровник Ольга",
    type: {
      martial_arts: true,
    },
    url_images: {
      jpg: "/images/team/martial_arts/result_coach_1.jpg",
      webp: "/images/team/martial_arts/result_coach_1.webp",
    },
    about_coach: {
      qualification: "Мастер-тренер",
      work_experience: "с 2016 года",
      contacts: { phone: "+7 905 581-67-35" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Карпушин Алексей",
    type: {
      martial_arts: true,
    },
    url_images: {
      jpg: "/images/team/martial_arts/result_coach_2.jpg",
      webp: "/images/team/martial_arts/result_coach_2.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Смирнова Алина",
    type: {
      martial_arts: true,
    },
    url_images: {
      jpg: "/images/team/martial_arts/result_coach_3.jpg",
      webp: "/images/team/martial_arts/result_coach_3.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Власюк Илья",
    type: {
      martial_arts: true,
    },
    url_images: {
      jpg: "/images/team/martial_arts/result_coach_4.jpg",
      webp: "/images/team/martial_arts/result_coach_4.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Весновский Владислав",
    type: {
      martial_arts: true,
    },
    url_images: {
      jpg: "/images/team/martial_arts/result_coach_5.jpg",
      webp: "/images/team/martial_arts/result_coach_5.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Сафиев Сабир",
    type: {
      martial_arts: true,
    },
    url_images: {
      jpg: "/images/team/martial_arts/result_coach_6.jpg",
      webp: "/images/team/martial_arts/result_coach_6.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Самойленко Дарья",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_1.jpg",
      webp: "/images/team/gym/result_coach_1.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Джус Дмитрий",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_2.jpg",
      webp: "/images/team/gym/result_coach_2.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Гурвич Светлана",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_3.jpg",
      webp: "/images/team/gym/result_coach_3.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Бредов Никита",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_4.jpg",
      webp: "/images/team/gym/result_coach_4.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Туренко Ольга",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_5.jpg",
      webp: "/images/team/gym/result_coach_5.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Соколов Артём",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_6.jpg",
      webp: "/images/team/gym/result_coach_6.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Чугайнова Дарья",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_7.jpg",
      webp: "/images/team/gym/result_coach_7.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Хисамиева Полина",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_8.jpg",
      webp: "/images/team/gym/result_coach_8.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Лященко Игорь",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_9.jpg",
      webp: "/images/team/gym/result_coach_9.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Летуновский Сергей",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_10.jpg",
      webp: "/images/team/gym/result_coach_10.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Игнатов Константин",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_11.jpg",
      webp: "/images/team/gym/result_coach_11.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Хорин Александр",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_12.jpg",
      webp: "/images/team/gym/result_coach_12.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Мхитарян Арес",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_13.jpg",
      webp: "/images/team/gym/result_coach_13.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Занин Сергей",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_14.jpg",
      webp: "/images/team/gym/result_coach_14.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Карпов Сергей",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_15.jpg",
      webp: "/images/team/gym/result_coach_15.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Мазайлова Евгения",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_16.jpg",
      webp: "/images/team/gym/result_coach_16.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Колешко Вадим",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_17.jpg",
      webp: "/images/team/gym/result_coach_17.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Якименко Эдуард",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_18.jpg",
      webp: "/images/team/gym/result_coach_18.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Зыков Александр",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_19.jpg",
      webp: "/images/team/gym/result_coach_19.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Ширяев Владислав",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_20.jpg",
      webp: "/images/team/gym/result_coach_20.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Шевченко Алёна",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_21.jpg",
      webp: "/images/team/gym/result_coach_21.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Астапенко Дмитрий",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_22.jpg",
      webp: "/images/team/gym/result_coach_22.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Ходжеванова Мария",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_23.jpg",
      webp: "/images/team/gym/result_coach_23.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Юнисов Тимур",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_24.jpg",
      webp: "/images/team/gym/result_coach_24.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Бабченко Ирина",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_25.jpg",
      webp: "/images/team/gym/result_coach_25.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Казанова Анна",
    type: {
      gym: true,
    },
    url_images: {
      jpg: "/images/team/gym/result_coach_26.jpg",
      webp: "/images/team/gym/result_coach_26.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Макаренко Екатерина",
    type: {
      group_training: true,
    },
    url_images: {
      jpg: "/images/team/group_training/result_coach_1.jpg",
      webp: "/images/team/group_training/result_coach_1.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Краснояружская Карина",
    type: {
      group_training: true,
    },
    url_images: {
      jpg: "/images/team/group_training/result_coach_2.jpg",
      webp: "/images/team/group_training/result_coach_2.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Чечулина Татьяна",
    type: {
      group_training: true,
    },
    url_images: {
      jpg: "/images/team/group_training/result_coach_3.jpg",
      webp: "/images/team/group_training/result_coach_3.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Пепик Наталья",
    type: {
      group_training: true,
    },
    url_images: {
      jpg: "/images/team/group_training/result_coach_4.jpg",
      webp: "/images/team/group_training/result_coach_4.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Гуль Юлия",
    type: {
      group_training: true,
    },
    url_images: {
      jpg: "/images/team/group_training/result_coach_5.jpg",
      webp: "/images/team/group_training/result_coach_5.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Любченко Илья",
    type: {
      group_training: true,
    },
    url_images: {
      jpg: "/images/team/group_training/result_coach_6.jpg",
      webp: "/images/team/group_training/result_coach_6.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Чевтаева Анна",
    type: {
      group_training: true,
    },
    url_images: {
      jpg: "/images/team/group_training/result_coach_7.jpg",
      webp: "/images/team/group_training/result_coach_7.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Глебова Полина",
    type: {
      group_training: true,
    },
    url_images: {
      jpg: "/images/team/group_training/result_coach_8.jpg",
      webp: "/images/team/group_training/result_coach_8.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Лемеза Галина",
    type: {
      group_training: true,
    },
    url_images: {
      jpg: "/images/team/group_training/result_coach_9.jpg",
      webp: "/images/team/group_training/result_coach_9.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Торсунов Илья",
    type: {
      pool: true,
    },
    url_images: {
      jpg: "/images/team/pool/result_coach_1.jpg",
      webp: "/images/team/pool/result_coach_1.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Колесникова Алиса",
    type: {
      pool: true,
    },
    url_images: {
      jpg: "/images/team/pool/result_coach_2.jpg",
      webp: "/images/team/pool/result_coach_2.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Чуешков Владислав",
    type: {
      pool: true,
    },
    url_images: {
      jpg: "/images/team/pool/result_coach_3.jpg",
      webp: "/images/team/pool/result_coach_3.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Алексеев Илья",
    type: {
      pool: true,
    },
    url_images: {
      jpg: "/images/team/pool/result_coach_4.jpg",
      webp: "/images/team/pool/result_coach_4.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Лебедева Александра",
    type: {
      pool: true,
    },
    url_images: {
      jpg: "/images/team/pool/result_coach_5.jpg",
      webp: "/images/team/pool/result_coach_5.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Захаров Дмитрий",
    type: {
      pool: true,
    },
    url_images: {
      jpg: "/images/team/pool/result_coach_6.jpg",
      webp: "/images/team/pool/result_coach_6.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Черенкова Юлия",
    type: {
      pool: true,
    },
    url_images: {
      jpg: "/images/team/pool/result_coach_7.jpg",
      webp: "/images/team/pool/result_coach_7.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Казаков Максим",
    type: {
      pool: true,
    },
    url_images: {
      jpg: "/images/team/pool/result_coach_8.jpg",
      webp: "/images/team/pool/result_coach_8.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Шапошникова Надежда",
    type: {
      pool: true,
    },
    url_images: {
      jpg: "/images/team/pool/result_coach_9.jpg",
      webp: "/images/team/pool/result_coach_9.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Гордеев Александр",
    type: {
      pool: true,
    },
    url_images: {
      jpg: "/images/team/pool/result_coach_10.jpg",
      webp: "/images/team/pool/result_coach_10.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Пономарёв Евгений",
    type: {
      pool: true,
    },
    url_images: {
      jpg: "/images/team/pool/result_coach_11.jpg",
      webp: "/images/team/pool/result_coach_11.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
  {
    name: "Глориозова Яна",
    type: {
      pool: true,
    },
    url_images: {
      jpg: "/images/team/pool/result_coach_12.jpg",
      webp: "/images/team/pool/result_coach_12.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "",
      education: "",
      achievements: "",
    },
  },
];

export const Team_list = ({ isActiveTab }: Team_list_type) => {
  const selected_category_data = team_data?.filter(
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
              <Link
                key={idx}
                to="/"
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
              </Link>
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
};
