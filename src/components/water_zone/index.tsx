import { Tabs } from "components";

import { observer } from "mobx-react-lite";

import { type Tabs_type } from "../../pages/about_page/components/fitness_area";

import { modal_store } from "@/stores";

const water_zone_data = {
  baths_swimming: {
    head: "Бани и бассейны",
    description:
      "Мореон Фитнес предоставляет своим клиентам уникальные возможности для отдыха и оздоровления. Члены клуба Мореон получают доступ к спортивному бассейну, бассейну «Золотые рыбки», банному комплексу «Термы» и пространству Мореон SPA. В раздевалках фитнес-клуба работает солярий. В этом разделе Вы можете подробнее ознакомиться с велнесс-возможностями Мореон Фитнес.",
    images_description: "",
    images_url: {
      jpg: "/images/water_zone/result_zone_1.jpeg",
      webp: "/images/water_zone/result_zone_1.webp",
    },
  },
  sports_pool: {
    head: "Спортивный бассейн",
    description:
      "Спортивный бассейн Мореон Фитнес рассчитан на проведение групповых программ, занятий школы плавания, персональных тренировок и свободного плавания для всех членов клуба. Здесь же регулярно проходят соревнования по плаванию среди взрослых и детей. Трехуровневая система очистки воды гарантирует чистоту и безопасность. Панорамные окна наполняют помещение светом и вдохновляют на спортивные подвиги. Длина бассейна 25 м, количество дорожек — 5.",
    images_description: "",
    images_url: {
      jpg: "/images/water_zone/result_zone_2.jpeg",
      webp: "/images/water_zone/result_zone_2.webp",
    },
  },
  spa: {
    head: "СПА",
    description:
      "Мореон SPA – самое спокойное и красивое место в комплексе, открыто только для взрослых и детей старше 14 лет. Оформлено в стиле легендарного греческого острова Санторини. В переулках и террасах этого пространства хочется затеряться. Здесь тоже есть разнообразие бань – римская, хаммам, аромасауна, русская травяная, русская кедровая, греческие бани, ИК-сауны, а также небольшой бассейн, дорожка Кнайпа и соляная пещера. Работает SPA-бар с вкусным и полезным меню. За дополнительную плату можно заказать услуги косметолога, массажиста и СПА-терапевта. Здесь регулярно проводятся масштабные мероприятия с участием медийных членов клуба Мореон SPA, можно устроить свое мероприятие – например, свидание, мальчишник или девичник, доступны премиум-студии для индивидуального использования.",
    images_description: "",
    images_url: {
      jpg: "/images/water_zone/result_zone_3.jpeg",
      webp: "/images/water_zone/result_zone_3.webp",
    },
  },
  thermal_baths: {
    head: "Термы",
    description:
      "ермы – масштабный банный комплекс. По формату напоминает общественные бани, но намного интереснее. За один визит вы можете посетить 19 бань и саун разных мировых традиций – русская баня, финская сауна, хаммам, восточные аромасауны, греческие деликатные бани – тепидариум и лакониум. Главное украшение зоны – двухуровневый бассейн-лабиринт с контрастными ваннами, водопадами и рекой с реверсивным течением. Никогда не пустует античный аэрогидромассажный бассейн. После парной гости освежаются в фригидариуме и ледяных купелях, а отдыхают на лежаках с панорамным видом на березовую рощу или на летней веранде. В Термах можно отдыхать целый день, а перекусить можно здесь же – в кафе с европейской кухней. Есть услуга отдельной русской парной со своим предбанником, купелью и выходом на веранду.",
    images_description: "",
    images_url: {
      jpg: "/images/water_zone/result_zone_4.jpeg",
      webp: "/images/water_zone/result_zone_4.webp",
    },
  },
  goldfish: {
    head: "Золотые рыбки",
    description:
      "В бассейне «Золотые рыбки» проводятся оздоровительные и профилактические занятия в группах, а также занятия по детскому плаванию. Доступен только для занятий с инструктором. Находится на территории аквапарка «Мореон».",
    images_description: "",
    images_url: {
      jpg: "/images/water_zone/result_zone_5.jpeg",
      webp: "/images/water_zone/result_zone_5.webp",
    },
  },
};

type key_list_type =
  | "baths_swimming"
  | "sports_pool"
  | "spa"
  | "thermal_baths"
  | "goldfish";

const tab_list = [
  { key: "baths_swimming", category: "Бани и бассейны" },
  { key: "sports_pool", category: "Спортивный бассейн" },
  { key: "spa", category: "СПА" },
  { key: "thermal_baths", category: "Термы" },
  { key: "goldfish", category: "Золотые рыбки" },
];

export const isEmptyObj = (object: object): boolean => {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      return false;
    }
  }
  return true;
};

export const Water_zone = observer(
  ({ tabs_store }: { tabs_store: Tabs_type }) => {
    const { isActiveTab, change_tabs } = tabs_store;
    const { isVisibleModal, change_modal } = modal_store;

    if (
      !water_zone_data ||
      isEmptyObj(water_zone_data) ||
      !tab_list ||
      tab_list.length === 0
    )
      return null;

    const current_data = water_zone_data[isActiveTab as key_list_type];

    const { head, description, images_url, images_description } =
      current_data ?? {};

    return (
      <section className="py-12">
        <div className="container">
          <div className="water_zone">
            <picture>
              <source
                srcSet="/images/water_zone/result_zone_bg.webp"
                type="image/webp"
              />
              <img
                className="absolute inset-0 -z-10 w-full h-full object-cover rounded-3xl overflow-hidden"
                src="/images/water_zone/result_zone_bg.jpeg"
                alt=""
                aria-hidden
              />
            </picture>
            <h2 className="visually-hidden">
              Откройте для себя мир релаксации и здоровья
            </h2>
            <Tabs
              isActiveTab={isActiveTab}
              change_tabs={change_tabs}
              tab_list={tab_list}
            />
            <div className="pt-10 flex items-center justify-between gap-x-5">
              <div className="w-full max-w-[625px]">
                <h3 className="text-3xl mb-5">{head}</h3>
                <p className="mb-8 text-lg">{description}</p>
                <button
                  onClick={() => change_modal(!isVisibleModal)}
                  className="inline-flex text-white py-4 px-7 m-auto 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
                  type="button"
                >
                  Записаться на гостевой визит
                </button>
              </div>
              <picture>
                <source srcSet={images_url?.jpg} type="image/webp" />
                <img
                  className="h-[350px] object-cover rounded-3xl overflow-hidden"
                  width={525}
                  src={images_url?.jpg}
                  alt={images_description}
                  aria-label={images_description}
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    );
  },
);
