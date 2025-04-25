import { isEmptyObj } from "@/utils";
import { Link } from "react-router-dom";

type directions_data_type = {
  [key: string]: {
    direction: string;
    description: "";
    images_url: {
      jpg: string;
      webp: string;
    };
    link_path: string;
  };
};

const directions_data: directions_data_type = {
  mind_body: {
    direction: "Mind Body",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_1.jpeg",
      webp: "/images/directions/result_direction_1.webp",
    },
    link_path: "",
  },
  strength_functional_training: {
    direction: "Силовые и функциональные тренировки",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_2.jpeg",
      webp: "/images/directions/result_direction_2.webp",
    },
    link_path: "",
  },
  aerobics: {
    direction: "Кардиопрограммы и аэробика",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_3.jpeg",
      webp: "/images/directions/result_direction_3.webp",
    },
    link_path: "",
  },
  gym: {
    direction: "Тренажерный зал",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_4.jpeg",
      webp: "/images/directions/result_direction_4.webp",
    },
    link_path: "",
  },
  pool: {
    direction: "Водные программы",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_5.jpeg",
      webp: "/images/directions/result_direction_5.webp",
    },
    link_path: "",
  },
  martial_arts: {
    direction: "Единоборства",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_6.jpeg",
      webp: "/images/directions/result_direction_6.webp",
    },
    link_path: "",
  },
  dance: {
    direction: "Танцы",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_7.jpeg",
      webp: "/images/directions/result_direction_7.webp",
    },
    link_path: "",
  },
  personal_training: {
    direction: "Персональный тренинг",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_8.jpeg",
      webp: "/images/directions/result_direction_8.webp",
    },
    link_path: "",
  },
  yoga: {
    direction: "Йога",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_9.jpeg",
      webp: "/images/directions/result_direction_9.webp",
    },
    link_path: "",
  },
  test: {
    direction: "Фитнес-тестирование",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_10.jpeg",
      webp: "/images/directions/result_direction_10.webp",
    },
    link_path: "",
  },
  kids_fitnes: {
    direction: "Детский фитнес",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_11.jpeg",
      webp: "/images/directions/result_direction_11.webp",
    },
    link_path: "",
  },
  group_training: {
    direction: "Групповые программы",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_12.jpg",
      webp: "/images/directions/result_direction_12.webp",
    },
    link_path: "",
  },
  stretching: {
    direction: "МФР+Stretching",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_13.jpeg",
      webp: "/images/directions/result_direction_13.webp",
    },
    link_path: "",
  },
  pranayama_meditation: {
    direction: "ПРАНАЯМА И МЕДИТАЦИЯ",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_14.jpeg",
      webp: "/images/directions/result_direction_14.webp",
    },
    link_path: "",
  },
  yoga_intensiv_90: {
    direction: "YOGA INTENSIV-90",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_15.jpeg",
      webp: "/images/directions/result_direction_15.webp",
    },
    link_path: "",
  },
  pilates_allegro: {
    direction: "PILATES ALLEGRO",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_16.jpeg",
      webp: "/images/directions/result_direction_16.webp",
    },
    link_path: "",
  },
  healthy_back: {
    direction: "Здоровая спина",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_17.jpeg",
      webp: "/images/directions/result_direction_17.webp",
    },
    link_path: "",
  },
  pilates_mat: {
    direction: "PILATES MAT",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_18.jpeg",
      webp: "/images/directions/result_direction_18.webp",
    },
    link_path: "",
  },
  soft_balance: {
    direction: "SOFT BALANCE",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_19.jpeg",
      webp: "/images/directions/result_direction_19.webp",
    },
    link_path: "",
  },
  hatha_yoga: {
    direction: "HATHA YOGA",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_20.jpeg",
      webp: "/images/directions/result_direction_20.webp",
    },
    link_path: "",
  },
  cross_training: {
    direction: "КроссТренинг",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_21.jpeg",
      webp: "/images/directions/result_direction_21.webp",
    },
    link_path: "",
  },
  abs_streth: {
    direction: "ABS+STRETH",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_22.jpeg",
      webp: "/images/directions/result_direction_22.webp",
    },
    link_path: "",
  },
  les_mills_body_pump: {
    direction: "LES MILLS BODY PUMP",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_23.jpeg",
      webp: "/images/directions/result_direction_23.webp",
    },
    link_path: "",
  },
  hot_iron_1: {
    direction: "HOT IRON 1",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_24.jpeg",
      webp: "/images/directions/result_direction_24.webp",
    },
    link_path: "",
  },
  hot_iron_2: {
    direction: "HOT IRON 2",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_25.jpeg",
      webp: "/images/directions/result_direction_25.webp",
    },
    link_path: "",
  },
  les_mills_grit: {
    direction: "LES MILLS GRIT",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_26.jpeg",
      webp: "/images/directions/result_direction_26.webp",
    },
    link_path: "",
  },
  thinner: {
    direction: "Похудей-ка",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_27.jpeg",
      webp: "/images/directions/result_direction_27.webp",
    },
    link_path: "",
  },
  les_mills_core: {
    direction: "LES MILLS CORE",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_28.jpeg",
      webp: "/images/directions/result_direction_28.webp",
    },
    link_path: "",
  },
  real_ryder: {
    direction: "REAL RYDER",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_29.jpeg",
      webp: "/images/directions/result_direction_29.webp",
    },
    link_path: "",
  },
  step: {
    direction: "STEP",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_30.jpeg",
      webp: "/images/directions/result_direction_30.webp",
    },
    link_path: "",
  },
  step_pro: {
    direction: "STEP PRO",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_31.jpeg",
      webp: "/images/directions/result_direction_31.webp",
    },
    link_path: "",
  },
  pro_jumping: {
    direction: "PRO JUMPING",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_32.jpeg",
      webp: "/images/directions/result_direction_32.webp",
    },
    link_path: "",
  },
  step_interval: {
    direction: "STEP-INTERVAL",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_33.jpeg",
      webp: "/images/directions/result_direction_33.webp",
    },
    link_path: "",
  },
  infant_swimming: {
    direction: "Грудничковое плавание",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_34.jpeg",
      webp: "/images/directions/result_direction_34.webp",
    },
    link_path: "",
  },
  swimming_children: {
    direction: "Плавание для детей",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_35.jpeg",
      webp: "/images/directions/result_direction_35.webp",
    },
    link_path: "",
  },
  school_competitive_swimming: {
    direction: "Школа спортивного плавания",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_36.jpeg",
      webp: "/images/directions/result_direction_36.webp",
    },
    link_path: "",
  },
  swimming_adults: {
    direction: "Плавание для взрослых",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_37.jpeg",
      webp: "/images/directions/result_direction_37.webp",
    },
    link_path: "",
  },
  aqua_aerobics: {
    direction: "Аквааэробика",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_38.jpeg",
      webp: "/images/directions/result_direction_38.webp",
    },
    link_path: "",
  },
  aqua_mom: {
    direction: "Aqua Mama",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_39.jpeg",
      webp: "/images/directions/result_direction_39.webp",
    },
    link_path: "",
  },
  work_apparatus: {
    direction: "Работа на снарядах",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_40.jpeg",
      webp: "/images/directions/result_direction_40.webp",
    },
    link_path: "",
  },
  box: {
    direction: "Бокс",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_41.jpeg",
      webp: "/images/directions/result_direction_41.webp",
    },
    link_path: "",
  },
  grappling: {
    direction: "Грепплинг",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_42.jpeg",
      webp: "/images/directions/result_direction_42.webp",
    },
    link_path: "",
  },
  kickboxing: {
    direction: "Кикбоксинг",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_43.jpeg",
      webp: "/images/directions/result_direction_43.webp",
    },
    link_path: "",
  },
  mma: {
    direction: "ММА",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_44.jpeg",
      webp: "/images/directions/result_direction_44.webp",
    },
    link_path: "",
  },
  latina: {
    direction: "LATINA",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_45.jpeg",
      webp: "/images/directions/result_direction_45.webp",
    },
    link_path: "",
  },
  multidance: {
    direction: "MULTI DANCE",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_46.jpeg",
      webp: "/images/directions/result_direction_46.webp",
    },
    link_path: "",
  },
  oriental: {
    direction: "ORIENTAL",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_47.jpeg",
      webp: "/images/directions/result_direction_47.webp",
    },
    link_path: "",
  },
  zumba: {
    direction: "ZUMBA",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_48.jpeg",
      webp: "/images/directions/result_direction_48.webp",
    },
    link_path: "",
  },
  dance_mix: {
    direction: "DANCE MIX",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_49.jpeg",
      webp: "/images/directions/result_direction_49.webp",
    },
    link_path: "",
  },
  childrens_swimming: {
    direction: "Детское плавание",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_54.jpeg",
      webp: "/images/directions/result_direction_54.webp",
    },
    link_path: "",
  },
  martial_arts_children: {
    direction: "Детские единоборства",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_55.jpeg",
      webp: "/images/directions/result_direction_55.webp",
    },
    link_path: "",
  },
  children_center: {
    direction: "Детский центр",
    description: "",
    images_url: {
      jpg: "/images/directions/result_direction_56.jpeg",
      webp: "/images/directions/result_direction_56.webp",
    },
    link_path: "",
  },
  baths_swimming: {
    direction: "Бани и бассейны",
    description: "",
    images_url: {
      jpg: "/images/water_zone/result_zone_1.jpeg",
      webp: "/images/water_zone/result_zone_1.webp",
    },
    link_path: "",
  },
  sports_pool: {
    direction: "Спортивный бассейн",
    description: "",
    images_url: {
      jpg: "/images/water_zone/result_zone_2.jpeg",
      webp: "/images/water_zone/result_zone_2.webp",
    },
    link_path: "",
  },
  spa: {
    direction: "СПА",
    description: "",
    images_url: {
      jpg: "/images/water_zone/result_zone_3.jpeg",
      webp: "/images/water_zone/result_zone_3.webp",
    },
    link_path: "",
  },
  thermal_baths: {
    direction: "Термы",
    description: "",
    images_url: {
      jpg: "/images/water_zone/result_zone_4.jpeg",
      webp: "/images/water_zone/result_zone_4.webp",
    },
    link_path: "",
  },
  goldfish: {
    direction: "Золотые рыбки",
    description: "",
    images_url: {
      jpg: "/images/water_zone/result_zone_5.jpeg",
      webp: "/images/water_zone/result_zone_5.webp",
    },
    link_path: "",
  },
};

export type keys_list_type = {
  keys_list: string[];
};


export const Directions_list = ({ keys_list }: keys_list_type) => {
  if (
    !directions_data ||
    isEmptyObj(directions_data) ||
    !keys_list ||
    keys_list.length === 0
  )
    return null;

  return (
    <ul className="grid grid-cols-3 gap-6">
      {keys_list.map((current_key) => {
        const { description, direction, images_url, link_path } =
          directions_data[current_key] ?? {};

        return (
          <li className="min-h-[350px] overflow-hidden rounded-3xl group">
            <Link
              to={link_path}
              className="relative after:absolute after:bottom-0 after:left-0 after:z-0 after:w-full after:h-[140px] after:bg-[url('/images/decor_serv.svg')] after:bg-no-repeat after:bg-cover after:opacity-80"
            >
              <picture>
                <source srcSet={images_url?.webp} type="image/webp" />
                <img
                  width={340}
                  height={350}
                  className="overflow-hidden rounded-3xl object-cover h-full w-full duration-700 group-hover:scale-[1.1]"
                  src={images_url?.jpg}
                  alt={description}
                  aria-label={description}
                />
              </picture>
              <strong className="absolute z-10 bottom-5 left-5 text-[#d6d6d6] text-lg">
                {direction}
              </strong>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
