import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type performance_data_type =
  | "spa"
  | "cafe_restaurant"
  | "reception"
  | "sales_department";

type Performance_type = {
  data_key: string[];
  isVisibleBtn: boolean;
};

const performance_data = {
  spa: {
    title: "СПА И ТЕРМЫ",
    description:
      "«Мореон SPA» — уникальный банный спа-комплекс в стиле острова Санторини. Это самое большое спа-пространство в Москве, где можно отдохнуть от повседневного стресса. Вас ждут бани и сауны, соляная пещера, бассейн и джакузи, а также более 70 видов спа-процедур. В «Термах Мореон» расположены русские парные, турецкие хаммамы, восточные аромасауны. Главное украшение и гордость банного комплекса – двухуровневый бассейн-лабиринт с реверсивным течением, водопадами и контрастными ваннами.",
    decor_title: "/images/performance/spa/title-center.webp",
    arr_images: [
      {
        images_description: "",
        images_url: {
          jpg: "/images/performance/spa/perfom_1.jpg",
          webp: "/images/performance/spa/perfom_1.webp",
        },
      },
      {
        images_description: "",
        images_url: {
          jpg: "/images/performance/spa/perfom_2.jpg",
          webp: "/images/performance/spa/perfom_2.webp",
        },
      },
      {
        images_description: "",
        images_url: {
          jpg: "/images/performance/spa/perfom_3.jpg",
          webp: "/images/performance/spa/perfom_3.webp",
        },
      },
      {
        images_description: "",
        images_url: {
          jpg: "/images/performance/spa/perfom_4.jpg",
          webp: "/images/performance/spa/perfom_4.webp",
        },
      },
      {
        images_description: "",
        images_url: {
          jpg: "/images/performance/spa/perfom_5.jpg",
          webp: "/images/performance/spa/perfom_5.webp",
        },
      },
      {
        images_description: "",
        images_url: {
          jpg: "/images/performance/spa/perfom_6.jpg",
          webp: "/images/performance/spa/perfom_6.webp",
        },
      },
    ],
  },
  cafe_restaurant: {
    title: "КАФЕ И РЕСТОРАНЫ",
    description:
      "После тренировки вы сможете перекусить и отдохнуть в ресторанах и кафе. В фитнесе находятся собственные барные зоны с разнообразным меню. В фито баре для вас спортивные напитки и питание, коктейли и фреши. Также в холле комплекса расположены рестораны «Порт» и «Остров».",
    decor_title: "/images/performance/cafe_restaurant/title-cafe.webp",
    arr_images: [
      {
        images_description:
          "Модерный интерьер кафе с белыми пластиковыми стульями и столами, украшенными зелеными растениями в больших деревянных кашпо. На заднем плане виден кофейный бар с подсветкой и экранами для заказов. Потолок выполнен из темного деревянного панелирования с линейными светильниками, создавая современную атмосферу.",
        images_url: {
          jpg: "/images/performance/cafe_restaurant/perfom_1.jpg",
          webp: "/images/performance/cafe_restaurant/perfom_1.webp",
        },
      },
      {
        images_description:
          "Модерный интерьер кафе или кофейни с современным дизайном. В помещении установлены белые столики и темно-синие пластиковые стулья, украшенные зелеными растениями в больших деревянных кашпо. На заднем плане виден бар с подсветкой и экранами для заказов, а также полки с товарами. Потолок выполнен из темного деревянного панелирования с линейными светильниками, создавая уютную и стильную атмосферу.",
        images_url: {
          jpg: "/images/performance/cafe_restaurant/perfom_2.jpg",
          webp: "/images/performance/cafe_restaurant/perfom_2.webp",
        },
      },
      {
        images_description:
          "Модерный интерьер общественного пространства с современным дизайном. В помещении установлены белые столики и стулья разных цветов (белые и темно-синие), украшенные зелеными растениями в больших деревянных кашпо. Потолок выполнен из темного деревянного панелирования с линейными светильниками, создавая яркое освещение. На заднем плане видны рабочие места за прозрачными перегородками, а также дополнительная зона отдыха с диваном. Пол покрыт глянцевой плиткой, отражающей свет.",
        images_url: {
          jpg: "/images/performance/cafe_restaurant/perfom_3.jpg",
          webp: "/images/performance/cafe_restaurant/perfom_3.webp",
        },
      },
    ],
  },
  reception: {
    title: "РЕСЕПШН",
    description:
      "При входе в Moreon Fitness Вас встретят и помогут с любым вопросом на ресепшене. Радушный коллектив фитнес-центра проведет экскурсию по комплексу. Также вы можете связаться с нами по телефону +7 (495) 859-03-72",
    decor_title: "/images/performance/reception/title-res.webp",
    arr_images: [
      {
        images_description: "",
        images_url: {
          jpg: "/images/performance/reception/perfom_1.jpg",
          webp: "/images/performance/reception/perfom_1.webp",
        },
      },
      {
        images_description: "",
        images_url: {
          jpg: "/images/performance/reception/perfom_2.jpg",
          webp: "/images/performance/reception/perfom_2.webp",
        },
      },
    ],
  },
  sales_department: {
    title: "ОТДЕЛ ПРОДАЖ",
    description:
      "По вопросам оформления карты и всем расценкам обращайтесь в отдел продаж.",
    decor_title: "/images/performance/sales_department/title-by.webp",
    arr_images: [
      {
        images_description: "",
        images_url: {
          jpg: "/images/performance/sales_department/perfom_1.jpg",
          webp: "/images/performance/sales_department/perfom_1.webp",
        },
      },
      {
        images_description: "",
        images_url: {
          jpg: "/images/performance/sales_department/perfom_2.jpg",
          webp: "/images/performance/sales_department/perfom_2.webp",
        },
      },
    ],
  },
};

export const isEmptyObj = (object: object): boolean => {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      return false;
    }
  }
  return true;
};

export const Performance = ({ data_key, isVisibleBtn }: Performance_type) => {
  if (
    !performance_data ||
    isEmptyObj(performance_data) ||
    !data_key ||
    data_key.length === 0
  )
    return null;

  return (
    <ul className="performance">
      {data_key.map((key, idx: number) => {
        const { decor_title, arr_images, title, description } =
          performance_data[key as performance_data_type];

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
};
