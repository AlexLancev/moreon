import { Tabs } from "components";
import { observer } from "mobx-react-lite";

type fitness_area_data_type = {
  [key: string]: {
    name_key: string;
    head: string;
    description: string;
    description_images: string;
    images_url: {
      jpg: string;
      webp: string;
    };
    to_link: string;
  };
};

const fitness_area_data: fitness_area_data_type = {
  training_room: {
    name_key: "training_room",
    head: "Зал групповых тренировок",
    description:
      "5 залов для групповых программ и более 70 видов тренировок: студия Cycle оснащенная тренажерами Real Ryder, Pilates Allegro, силовой и функциональный тренинг, программы мирового бренда Les Mills, танцевальные программы, программы Mind&Body.",
    description_images:
      "Современный фитнес-зал, где группа людей занимается групповой тренировкой. Участники стоят в линию с различным оборудованием: гантелями, скамейками и обручеми. Помещение оснащено зеркалами на задней стене и ярким освещением. Обстановка динамичная и организованная, подходящая для коллективных занятий по фитнесу или аэробике.",
    images_url: {
      jpg: "/images/fitness_area/result_zon_area_1.jpeg",
      webp: "/images/fitness_area/result_zon_area_1.webp",
    },
    to_link: "",
  },
  gym: {
    name_key: "gym",
    head: "Тренажерный зал",
    description:
      "Разделен на несколько зон: зона свободных весов, зона силовых тренажеров и кардио. Новейшее премиальное оборудование Matrix и Technogym поможет добиться лучших результатов.",
    description_images:
      "Современный фитнес-зал, где мужчина и женщина выполняют силовые упражнения на тренажере. Женщина тянет веревку с помощью тренера, который помогает ей контролировать технику выполнения. Помещение оснащено профессиональным оборудованием, зеркалами и ярким освещением. Обстановка динамичная и сфокусирована на индивидуальной тренировке.",
    images_url: {
      jpg: "/images/fitness_area/result_zon_area_2.jpeg",
      webp: "/images/fitness_area/result_zon_area_2.webp",
    },
    to_link: "",
  },
  pool: {
    name_key: "pool",
    head: "Спортивный бассейн",
    description:
      "Бассейн длиной 25 метров оборудован 5-ю дорожками для плавания. Трехуровневая система очистки воды гарантирует чистоту и безопасность. Панорамные окна наполняют помещение светом и вдохновляют на спортивные подвиги.",
    description_images:
      "Крытый бассейн с яркой голубой водой, разделенный на дорожки белыми линиями и красными плавучими разметками. В центре написано слово 'moreon' большими голубыми буквами. Над бассейном развеваются праздничные флаги разных цветов, добавляя динамичности пространству. Помещение оснащено большими окнами и современным дизайном потолка с подсветкой.",
    images_url: {
      jpg: "/images/fitness_area/result_zon_area_3.jpeg",
      webp: "/images/fitness_area/result_zon_area_3.webp",
    },
    to_link: "",
  },
  cardio_room: {
    name_key: "cardio_room",
    head: "Зал кардио тренажеров",
    description:
      "В этой зоне представлены самые актуальные мировые фитнес-тренды, тренажеры Matrix, которые предлагают интерактивный формат занятий, вы можете подключить свои устройства и отслеживать показатели на экране.",
    description_images:
      "Современный фитнес-зал с рядами беговых дорожек, оснащенных интерактивными дисплеями. Помещение оформлено в светлых тонах с большими окнами, пропускающими естественный свет. Видны живые пальмы и другие растения, добавляющие свежесть и природный комфорт. Обстановка просторная и технологичная, подходящая для индивидуальных тренировок.",
    images_url: {
      jpg: "/images/fitness_area/result_zon_area_4.jpeg",
      webp: "/images/fitness_area/result_zon_area_4.webp",
    },
    to_link: "",
  },
  martial_arts: {
    name_key: "martial_arts",
    head: "Зал единоборств",
    description:
      "Современный тренировочный зал с несколькими боксерскими мешками марки 'ALFAFIT'. Мешки подвешены на металлической конструкции, а помещение оснащено ярким освещением и спортивным оборудованием. Интерьер выполнен в темных тонах, создавая профессиональную и динамичную атмосферу для занятий боксом или другими контактными видами спорта.",
    description_images:
      "Более 500 м² для новых побед, оборудование Foreman, ринг на подиуме, Октагон, клетка BJJ, 12 боксерских мешков, 2 пневмогруши, покрытие татами, 2 груши на растяжках, 4 настенных подушки, тренажер вертушка",
    images_url: {
      jpg: "/images/fitness_area/result_zon_area_5.jpeg",
      webp: "/images/fitness_area/result_zon_area_5.webp",
    },
    to_link: "",
  },
};

type tab_list_type =
  | "training_room"
  | "gym"
  | "pool"
  | "cardio_room"
  | "martial_arts";

const tab_list = [
  { key: "gym", category: "Тренажёрный зал" },
  { key: "training_room", category: "Зал групповых тренировок" },
  { key: "pool", category: "Спортивный бассейн" },
  { key: "cardio_room", category: "Зал кардио тренажёров" },
  { key: "martial_arts", category: "Зал единоборств" },
];

export type Tabs_type = {
  isActiveTab: string;
  change_tabs: (value: string) => void;
};

export const isEmptyObj = (object: object): boolean => {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      return false;
    }
  }
  return true;
};

export const Fitness_area = observer(
  ({ tabs_store }: { tabs_store: Tabs_type }) => {
    const { isActiveTab, change_tabs } = tabs_store;

    if (
      !fitness_area_data ||
      isEmptyObj(fitness_area_data) ||
      !tab_list ||
      tab_list.length === 0
    )
      return null;

    const current_data = fitness_area_data[isActiveTab as tab_list_type];

    const { head, description, description_images, images_url } =
      current_data ?? {};

    return (
      <section className="py-12">
        <div className="container">
          <h2 className="mb-10">
            <span className="head_decor">Зоны</span> фитнес клуба
          </h2>
          <Tabs
            isActiveTab={isActiveTab as tab_list_type}
            change_tabs={change_tabs}
            tab_list={tab_list}
          />
          <div className="flex items-center gap-x-14 pt-8">
            <picture>
              <source srcSet={images_url?.jpg} type="image/webp" />
              <img
                className="rounded-3xl overflow-hidden h-[299px] object-cover"
                width={525}
                src={images_url?.jpg}
                alt={description_images}
                aria-label={description_images}
              />
            </picture>
            <div className="w-full max-w-[525px]">
              <h3 className="mb-3 head_decor text-3xl">{head}</h3>
              <p className="mb-7 text-lg">{description}</p>
              <a
                href="/"
                className="inline-flex text-white py-4 px-7 m-auto 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
              >
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  },
);
