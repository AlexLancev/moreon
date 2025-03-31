import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type performance_data_type = "spa" | "cafe_restaurant" | "reception" | "sales_department";

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
        images_description:
          "Современный интерьер с термальными зонами, включая джакузи и бассейны. Помещение украшено живыми пальмами и другими растениями, создавая ощущение свежести. Видны ряды шезлонгов для отдыха и большие окна, пропускающие естественный свет. Дизайн просторный и функциональный, идеально подходящий для расслабления и активного отдыха.",
        images_url: {
          jpg: "/images/performance/spa/perfom_1.jpg",
          webp: "/images/performance/spa/perfom_1.webp",
        },
      },
      {
        images_description:
          "Уютная парилка с деревянным интерьером, освещенная теплым светом. В помещении установлены скамейки разных уровней для комфортного отдыха. Стены выполнены из натурального дерева и каменной кладки, а окно пропускает естественный свет. Обстановка создает расслабляющую и спокойную атмосферу.",
        images_url: {
          jpg: "/images/performance/spa/perfom_2.jpg",
          webp: "/images/performance/spa/perfom_2.webp",
        },
      },
      {
        images_description:
          "Крытый бассейн с яркой голубой водой, окруженный живыми растениями и пальмами. Помещение оснащено большими окнами, пропускающими естественный свет, что создает ощущение свежести и природы. Видны лестница для входа в воду и дополнительные термальные зоны рядом с бассейном. Обстановка выглядит расслабляющей и комфортной.",
        images_url: {
          jpg: "/images/performance/spa/perfom_3.jpg",
          webp: "/images/performance/spa/perfom_3.webp",
        },
      },
      {
        images_description:
          "Современный интерьер с ярким и просторным дизайном. В помещении расположены бассейны, термальные зоны и шезлонги для отдыха. Помещение украшено живыми растениями, включая пальмы, что создает ощущение свежести и природы. Большие окна пропускают естественный свет, а вторые этажи добавляют просторности пространству. Обстановка выглядит расслабляющей и комфортной.",
        images_url: {
          jpg: "/images/performance/spa/perfom_4.jpg",
          webp: "/images/performance/spa/perfom_4.webp",
        },
      },
      {
        images_description:
          "Современный интерьер с ярким и уютным дизайном. В помещении расположены ряды белых шезлонгов для отдыха, украшенных живыми растениями и пальмами. Помещение оснащено большими окнами, пропускающими естественный свет, что создает ощущение свежести и открытости. Обстановка выглядит расслабляющей и комфортной, идеально подходящей для отдыха.",
        images_url: {
          jpg: "/images/performance/spa/perfom_5.jpg",
          webp: "/images/performance/spa/perfom_5.webp",
        },
      },
      {
        images_description:
          "Современный интерьер с термальными зонами, включая джакузи и бассейны. Помещение украшено живыми растениями и пальмами, создавая ощущение свежести и природы. Видны ряды шезлонгов для отдыха и большие окна, пропускающие естественный свет. Обстановка выглядит расслабляющей и комфортной.",
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
          "Современный интерьер с ярким и уютным дизайном. В помещении расположены мягкие диваны, столики и стулья для отдыха, украшенные живыми растениями. Помещение оснащено стильной подсветкой и большими окнами, пропускающими естественный свет. Обстановка выглядит расслабляющей и комфортной, идеально подходящей для отдыха или работы.",
        images_url: {
          jpg: "/images/performance/cafe_restaurant/perfom_1.jpg",
          webp: "/images/performance/cafe_restaurant/perfom_1.webp",
        },
      },
      {
        images_description:
          "Миниатюрный интерьер кафе или бара с морской тематикой. В центре — белый барный стол с красной полосой и надписью 'SO5N1116 RUS'. На столе стоит декоративная модель яхты, а рядом висит оранжевый круглый спасательный круг. Помещение украшено живыми растениями и деревянными полками с посудой и алкоголем. Обстановка выглядит уютной и стилизованной под морскую тему.",
        images_url: {
          jpg: "/images/performance/cafe_restaurant/perfom_2.jpg",
          webp: "/images/performance/cafe_restaurant/perfom_2.webp",
        },
      },
      {
        images_description:
          "Современный интерьер с ярким и уютным дизайном. В помещении расположены столики и стулья для отдыха, украшенные живыми растениями. Помещение оснащено стильной подвесной люстрой в форме капель и большими окнами, пропускающими естественный свет. На переднем плане виден оранжевый спасательный круг, добавляющий акцент к оформлению. Обстановка выглядит расслабляющей и комфортной, идеально подходящей для отдыха или работы.",
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
        images_description:
          "Минималистичный офисный интерьер с современным дизайном. В центре — белый приемный стол с черной вставкой, украшенный цветами на столе. За ним установлен большой экран, демонстрирующий изображение. Потолок выполнен из деревянных балок, добавляя теплоту пространству. Обстановка выглядит профессиональной и уютной, подходящей для встреч или работы.",
        images_url: {
          jpg: "/images/performance/reception/perfom_1.jpg",
          webp: "/images/performance/reception/perfom_1.webp",
        },
      },
      {
        images_description:
          "Минималистичный интерьер офисного или спортивного пространства с современным дизайном. В центре — белый приемный стол с черной вставкой, украшенный цветами на столе. За ним расположен большой экран, демонстрирующий изображение боксера в ринге. Потолок выполнен из деревянных балок, добавляя теплоту пространству. Обстановка выглядит профессиональной и уютной, подходящей для встреч или работы.",
        images_url: {
          jpg: "/images/performance/reception/perfom_2.jpg",
          webp: "/images/performance/reception/perfom_2.webp",
        },
      },
    ],
  },
  sales_department: {
    title: "ОТДЕЛ ПРОДАЖ",
    description: "По вопросам оформления карты и всем расценкам обращайтесь в отдел продаж.",
    decor_title: "/images/performance/sales_department/title-by.webp",
    arr_images: [
      {
        images_description:
          "Современный офисный интерьер с открытым пространством. Помещение оснащено стеклянными перегородками, разделяющими рабочие зоны. Видны столы с компьютерами и удобные кресла для сотрудников. Обстановка украшена живыми растениями, добавляющими свежесть и природу. Потолок выполнен из темных балок с линейной подсветкой, создавая современный и функциональный дизайн.",
        images_url: {
          jpg: "/images/performance/sales_department/perfom_1.jpg",
          webp: "/images/performance/sales_department/perfom_1.webp",
        },
      },
      {
        images_description:
          "Современный офисный интерьер с открытым пространством и стеклянными перегородками. В центре — круглый стол для встреч, окруженный мягкими креслами. Помещение оснащено современной мебелью и компьютерами на рабочих местах. Обстановка оформлена живыми растениями, добавляющими свежесть. Потолок выполнен из темных балок с линейной подсветкой, создавая функциональную и элегантную атмосферу.",
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
  if (!performance_data || isEmptyObj(performance_data) || !data_key || data_key.length === 0) return null;

  return (
    <ul className="performance">
      {data_key.map((key, idx: number) => {
        const currentData = performance_data[key as performance_data_type];
        if (!currentData) return null;

        const { decor_title, arr_images, title, description } = currentData;

        return (
          <li
            key={idx}
            className="performance_item"
            style={{
              backgroundImage: `url(${decor_title})`,
            }}
          >
            <Swiper className="w-full max-w-[525px] mx-0" modules={[Pagination]} spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }}>
              {arr_images?.map(({ images_description, images_url: { jpg, webp } }) => (
                <SwiperSlide className="rounded-3xl overflow-hidden">
                  <picture>
                    <source srcSet={jpg} type="image/webp" />
                    <img className="w-full rounded-3xl" width={525} height={293} src={jpg} alt={images_description} aria-label={images_description} />
                  </picture>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="w-full max-w-[525px] pt-8">
              <h3 className="uppercase head_decor text-2xl font-bold mb-3">{title}</h3>
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
