import { useState } from "react";

import { observer } from "mobx-react-lite";

import { Tabs } from "components";
import { isEmptyObj } from "@/utils";

export type personal_format_data_key_type =
  | "gym"
  | "group_training"
  | "childrens_programs"
  | "beauty_health"
  | "authors_programs";

export type tabs_store_type = {
  isActiveTab: string;
  change_tabs: (value: string) => void;
};

type personal_format_tabs_type = {
  data_key: personal_format_data_key_type[];
  tabs_store: tabs_store_type;
};

type tab_list_type = {
  key: string;
  category: string;
};

type key_list_type = {
  [key: string]: { description: string };
};

type personal_format_data_type = {
  [key: string]: {
    key_name: personal_format_data_key_type;
    category: string;
    tab_list: tab_list_type[];
    key_list: key_list_type;
  };
};

const personal_format_data: personal_format_data_type = {
  gym: {
    key_name: "gym",
    category: "Тренажёрный зал",
    tab_list: [
      { key: "cardio_zone", category: "Кардиозона" },
      {
        key: "block_trainers",
        category: "Зона блочных тренажеров линейки Selection",
      },
      { key: "free_weights", category: "Зона свободных весов" },
      {
        key: "stretching_functional_training",
        category: "Зона стретчинга и функционального тренинга",
      },
      { key: "kinesis_simulators", category: "Зона тренажеров KINESIS" },
    ],
    key_list: {
      cardio_zone: {
        description:
          "Беговые дорожки, велотренажеры, эллипсы, гребные тренажеры. Все кардиотренажеры оснащены панелями с сенсорным управлением, телевидением и выходом в интернет.",
      },
      block_trainers: {
        description:
          "Тренажеры для полной проработки всех групп мышц, увеличения мышечной массы и улучшения выносливости.",
      },
      free_weights: {
        description:
          "Гантели и штанги, скамьи для жима, тренажер 'Смита', силовые рамы и даже помост для тяги. Удовлетворит запросы любого, даже профессионального атлета",
      },
      stretching_functional_training: {
        description:
          "Оборудование для тренировок на все группы мышц и растяжки. Коврики, фитболы, BOSU, амортизаторы, бодибары, утяжелители",
      },
      kinesis_simulators: {
        description:
          "Тренажеры подходят для пользователей с любым уровнем подготовки, для различных тренировочных целей, в том числе реабилитации",
      },
    },
  },
  group_training: {
    key_name: "group_training",
    category: "Групповые тренировки",
    tab_list: [
      { key: "group_training", category: "Групповые занятия" },
      {
        key: "aerobic_programs",
        category: "Аэробные программы",
      },
      { key: "mind_dody", category: "Mind&Dody" },
      {
        key: "aerobic_strength_programs",
        category: "Аэробно-силовые программы",
      },
      { key: "dance_programs", category: "Танцевальные программы" },
      { key: "strength_programs", category: "Силовые программы" },
      { key: "functional_training", category: "Функциональный тренинг" },
      { key: "martial_arts", category: "Боевые искуства" },
    ],
    key_list: {
      group_training: {
        description:
          "Групповые занятия – отличный способ освоить упражнения и комплексы. Базовые программы направлены на оздоровление всего тела, снижение веса и коррекцию фигуры.",
      },
      aerobic_programs: {
        description:
          "Предназначены для повышения выносливости организма, способствуют снижению веса и ускорению метаболических процессов. Положительно влияют на сердечно-сосудистую систему.",
      },
      mind_dody: {
        description:
          "Осознанная работа над созданием красивого и здорового тела. Программа включает в себя как физические упражнения, так и дыхательные упражнения, направленные на единение тела с разумом.т",
      },
      aerobic_strength_programs: {
        description:
          "Объединяют в себе все фитнес-программы. За счет использования дополнительного оборудования прорабатывается мышечный каркас.",
      },
      dance_programs: {
        description:
          "Способствуют укреплению мышечного каркаса, повышают выносливость и улучшают настроение. В клубе представлены различные виды танцев: от современных до латины и зумбы.",
      },
      strength_programs: {
        description:
          "Помогают скорректировать осанку, модернизируют пропорции тела, повышают скоростно-силовые качества организма. В нашей зоне силовых тренировок Вы найдете множество тренажеров, которые подходят как для любителей, так и для профессиональных спортсменов.",
      },
      functional_training: {
        description:
          "Комплекс упражнений, направленных на создание Вашего идеального тела. За счет постоянных занятий развиваются такие качества, как: мышечная сила, ловкость, быстрота реакции, выносливость, гибкость и координация, уходит лишний вес, улучшается композиция тела.",
      },
      martial_arts: {
        description:
          "Специальные тренировки, направленные на всестороннее развитие тела и уникальных навыков. В Мореон Фитнес представлены такие виды боевых искусств, как: бокс, тайский бокс, кикбоксинг, грепплинг, ММА.",
      },
    },
  },
  childrens_programs: {
    key_name: "childrens_programs",
    category: "Детские программы",
    tab_list: [
      { key: "childrens_swimming", category: "Детское плавание" },
      {
        key: "childrens_martial_arts",
        category: "Детские единоборства",
      },
    ],
    key_list: {
      childrens_swimming: {
        description:
          "Плавание в комплексе Мореон рассчитано на  возрастные категории от 0 до 16 лет и делятся на 4 блока, учитывая возможности и подготовку ребенка",
      },
      childrens_martial_arts: {
        description:
          "Занятия для детей от 6 лет: ММА и кикбоксинг. Для юниоров доступны занятия по боксу",
      },
    },
  },
  beauty_health: {
    key_name: "beauty_health",
    category: "Красота и здоровье",
    tab_list: [
      { key: "beauty_health", category: "Красота и здоровье" },
      {
        key: "spa_center",
        category: "SPA-центр",
      },
      {
        key: "thermal_complex",
        category: "Термальный комплекс",
      },
      {
        key: "solarium",
        category: "Солярий",
      },
    ],
    key_list: {
      beauty_health: {
        description:
          "В Мореон Фитнес Вы можете посетить зону SPA. СПА-процедуры оказывает омолаживающие и релаксационное воздействие на кожу, заряжая позитивной энергией на длительное время! Кроме того, вы можете посетить наш термальный комплекс, где представлены 19 видов бань и саун со всего света!",
      },
      spa_center: {
        description:
          "Уникальный спа-комплекс в стиле острова Санторини для взрослых и детей старше 14 лет. 13 бань и саун, 6 гидромассажных бассейнов, соляная пещера",
      },
      thermal_complex: {
        description:
          "19 бань и саун разных мировых традиций, двухуровневый бассейн-лабиринт с контрастными ваннами, водопадами и рекой с реверсивным течением, лежаки с панорамным видом на березовую рощу",
      },
      solarium: {
        description: "",
      },
    },
  },
  authors_programs: {
    key_name: "authors_programs",
    category: "Авторские программы",
    tab_list: [
      {
        key: "authors_programs",
        category: "Авторские программы",
      },
    ],
    key_list: {
      authors_programs: {
        description:
          "В нашем фитнес-клубе вы можете купить пакет индивидуальных занятий у личного тренера, и он разработает для Вас комплексную авторскую программу тренировок, которая учитывает Ваши физические особенности и цели.",
      },
    },
  },
};


export const Personal_format_tabs = observer(
  ({ data_key, tabs_store }: personal_format_tabs_type) => {
    const { isActiveTab, change_tabs } = tabs_store;
    const [currentChangeTab, setCurrentChangeTab] =
      useState<personal_format_data_key_type>("gym");

    if (
      !personal_format_data ||
      isEmptyObj(personal_format_data) ||
      !data_key ||
      data_key.length === 0
    )
      return null;

    const current_data = personal_format_data[currentChangeTab];
    if (!current_data) return null;

    const { tab_list, key_list } = current_data;

    return (
      <div>
        <ul className="flex flex-wrap">
          {data_key.map((key, idx: number) => {
            const currentData =
              personal_format_data[key as personal_format_data_key_type];
            if (!currentData) return null;

            const { key_name, category } = currentData;

            if (!category) return null;

            return (
              <li key={idx} className="w-[20%] text-center">
                <label className="personal_tabs">
                  <input
                    className="visually-hidden"
                    type="radio"
                    value={key_name}
                    onChange={() => setCurrentChangeTab(key_name)}
                    checked={currentChangeTab === key}
                  />
                  <span className="block h-full py-5 px-8 rounded-t-3xl">
                    {category}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
        <div className="min-h-[260px] px-10 py-14 bg-[rgba(255,255,255,4%)] rounded-b-3xl">
          <Tabs
            isActiveTab={isActiveTab as personal_format_data_key_type}
            change_tabs={change_tabs}
            tab_list={tab_list}
          />
          <p>{key_list?.[isActiveTab]?.description}</p>
        </div>
      </div>
    );
  },
);
