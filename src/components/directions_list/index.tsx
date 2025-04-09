import { Link } from "react-router-dom";

type directions_data_type = {
  [key: string]: {
    direction: string;
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
    images_url: {
      jpg: "/images/directions/result_direction_1.jpeg",
      webp: "/images/directions/result_direction_1.webp",
    },
    link_path: "",
  },
  strength_functional_training: {
    direction: "Силовые и функциональные тренировки",
    images_url: {
      jpg: "/images/directions/result_direction_2.jpeg",
      webp: "/images/directions/result_direction_2.webp",
    },
    link_path: "",
  },
  aerobics: {
    direction: "Кардиопрограммы и аэробика",
    images_url: {
      jpg: "/images/directions/result_direction_3.jpeg",
      webp: "/images/directions/result_direction_3.webp",
    },
    link_path: "",
  },
  gym: {
    direction: "Тренажерный зал",
    images_url: {
      jpg: "/images/directions/result_direction_4.jpeg",
      webp: "/images/directions/result_direction_4.webp",
    },
    link_path: "",
  },
  pool: {
    direction: "Водные программы",
    images_url: {
      jpg: "/images/directions/result_direction_5.jpeg",
      webp: "/images/directions/result_direction_5.webp",
    },
    link_path: "",
  },
  martial_arts: {
    direction: "Единоборства",
    images_url: {
      jpg: "/images/directions/result_direction_6.jpeg",
      webp: "/images/directions/result_direction_6.webp",
    },
    link_path: "",
  },
  dance: {
    direction: "Танцы",
    images_url: {
      jpg: "/images/directions/result_direction_7.jpeg",
      webp: "/images/directions/result_direction_7.webp",
    },
    link_path: "",
  },
  personal_training: {
    direction: "Персональный тренинг",
    images_url: {
      jpg: "/images/directions/result_direction_8.jpeg",
      webp: "/images/directions/result_direction_8.webp",
    },
    link_path: "",
  },
  yoga: {
    direction: "Йога",
    images_url: {
      jpg: "/images/directions/result_direction_9.jpeg",
      webp: "/images/directions/result_direction_9.webp",
    },
    link_path: "",
  },
  test: {
    direction: "Фитнес-тестирование",
    images_url: {
      jpg: "/images/directions/result_direction_10.jpeg",
      webp: "/images/directions/result_direction_10.webp",
    },
    link_path: "",
  },
  kids_fitnes: {
    direction: "Детский фитнес",
    images_url: {
      jpg: "/images/directions/result_direction_11.jpeg",
      webp: "/images/directions/result_direction_11.webp",
    },
    link_path: "",
  },
  group_training: {
    direction: "Групповые программы",
    images_url: {
      jpg: "/images/directions/result_direction_12.jpeg",
      webp: "/images/directions/result_direction_12.webp",
    },
    link_path: "",
  },
  stretching: {
    direction: "МФР+Stretching",
    images_url: {
      jpg: "/images/directions/result_direction_13.jpeg",
      webp: "/images/directions/result_direction_13.webp",
    },
    link_path: "",
  },
  pranayama_meditation: {
    direction: "ПРАНАЯМА И МЕДИТАЦИЯ",
    images_url: {
      jpg: "/images/directions/result_direction_14.jpeg",
      webp: "/images/directions/result_direction_14.webp",
    },
    link_path: "",
  },
  yoga_intensiv_90: {
    direction: "YOGA INTENSIV-90",
    images_url: {
      jpg: "/images/directions/result_direction_15.jpeg",
      webp: "/images/directions/result_direction_15.webp",
    },
    link_path: "",
  },
  pilates_allegro: {
    direction: "PILATES ALLEGRO",
    images_url: {
      jpg: "/images/directions/result_direction_16.jpeg",
      webp: "/images/directions/result_direction_16.webp",
    },
    link_path: "",
  },
  healthy_back: {
    direction: "Здоровая спина",
    images_url: {
      jpg: "/images/directions/result_direction_17.jpeg",
      webp: "/images/directions/result_direction_17.webp",
    },
    link_path: "",
  },
  pilates_mat: {
    direction: "PILATES MAT",
    images_url: {
      jpg: "/images/directions/result_direction_18.jpeg",
      webp: "/images/directions/result_direction_18.webp",
    },
    link_path: "",
  },
  soft_balance: {
    direction: "SOFT BALANCE",
    images_url: {
      jpg: "/images/directions/result_direction_19.jpeg",
      webp: "/images/directions/result_direction_19.webp",
    },
    link_path: "",
  },
  hatha_yoga: {
    direction: "HATHA YOGA",
    images_url: {
      jpg: "/images/directions/result_direction_20.jpeg",
      webp: "/images/directions/result_direction_20.webp",
    },
    link_path: "",
  },
  cross_training: {
    direction: "КроссТренинг",
    images_url: {
      jpg: "/images/directions/result_direction_21.jpeg",
      webp: "/images/directions/result_direction_21.webp",
    },
    link_path: "",
  },
  abs_streth: {
    direction: "ABS+STRETH",
    images_url: {
      jpg: "/images/directions/result_direction_22.jpeg",
      webp: "/images/directions/result_direction_22.webp",
    },
    link_path: "",
  },
  les_mills_body_pump: {
    direction: "LES MILLS BODY PUMP",
    images_url: {
      jpg: "/images/directions/result_direction_23.jpeg",
      webp: "/images/directions/result_direction_23.webp",
    },
    link_path: "",
  },
  hot_iron_1: {
    direction: "HOT IRON 1",
    images_url: {
      jpg: "/images/directions/result_direction_24.jpeg",
      webp: "/images/directions/result_direction_24.webp",
    },
    link_path: "",
  },
  hot_iron_2: {
    direction: "HOT IRON 2",
    images_url: {
      jpg: "/images/directions/result_direction_25.jpeg",
      webp: "/images/directions/result_direction_25.webp",
    },
    link_path: "",
  },
  les_mills_grit: {
    direction: "LES MILLS GRIT",
    images_url: {
      jpg: "/images/directions/result_direction_26.jpeg",
      webp: "/images/directions/result_direction_26.webp",
    },
    link_path: "",
  },
  thinner: {
    direction: "Похудей-ка",
    images_url: {
      jpg: "/images/directions/result_direction_27.jpeg",
      webp: "/images/directions/result_direction_27.webp",
    },
    link_path: "",
  },
  les_mills_core: {
    direction: "LES MILLS CORE",
    images_url: {
      jpg: "/images/directions/result_direction_28.jpeg",
      webp: "/images/directions/result_direction_28.webp",
    },
    link_path: "",
  },
  real_ryder: {
    direction: "REAL RYDER",
    images_url: {
      jpg: "/images/directions/result_direction_29.jpeg",
      webp: "/images/directions/result_direction_29.webp",
    },
    link_path: "",
  },
  step: {
    direction: "STEP",
    images_url: {
      jpg: "/images/directions/result_direction_30.jpeg",
      webp: "/images/directions/result_direction_30.webp",
    },
    link_path: "",
  },
  step_pro: {
    direction: "STEP PRO",
    images_url: {
      jpg: "/images/directions/result_direction_31.jpeg",
      webp: "/images/directions/result_direction_31.webp",
    },
    link_path: "",
  },
  pro_jumping: {
    direction: "PRO JUMPING",
    images_url: {
      jpg: "/images/directions/result_direction_32.jpeg",
      webp: "/images/directions/result_direction_32.webp",
    },
    link_path: "",
  },
  step_interval: {
    direction: "STEP-INTERVAL",
    images_url: {
      jpg: "/images/directions/result_direction_33.jpeg",
      webp: "/images/directions/result_direction_33.webp",
    },
    link_path: "",
  },
  infant_swimming: {
    direction: "Грудничковое плавание",
    images_url: {
      jpg: "/images/directions/result_direction_34.jpeg",
      webp: "/images/directions/result_direction_34.webp",
    },
    link_path: "",
  },
  swimming_children: {
    direction: "Плавание для детей",
    images_url: {
      jpg: "/images/directions/result_direction_35.jpeg",
      webp: "/images/directions/result_direction_35.webp",
    },
    link_path: "",
  },
  school_competitive_swimming: {
    direction: "Школа спортивного плавания",
    images_url: {
      jpg: "/images/directions/result_direction_36.jpeg",
      webp: "/images/directions/result_direction_36.webp",
    },
    link_path: "",
  },
  swimming_adults: {
    direction: "Плавание для взрослых",
    images_url: {
      jpg: "/images/directions/result_direction_37.jpeg",
      webp: "/images/directions/result_direction_37.webp",
    },
    link_path: "",
  },
  aqua_aerobics: {
    direction: "Аквааэробика",
    images_url: {
      jpg: "/images/directions/result_direction_38.jpeg",
      webp: "/images/directions/result_direction_38.webp",
    },
    link_path: "",
  },
  aqua_mom: {
    direction: "Aqua Mama",
    images_url: {
      jpg: "/images/directions/result_direction_39.jpeg",
      webp: "/images/directions/result_direction_39.webp",
    },
    link_path: "",
  },
  work_apparatus: {
    direction: "Работа на снарядах",
    images_url: {
      jpg: "/images/directions/result_direction_40.jpeg",
      webp: "/images/directions/result_direction_40.webp",
    },
    link_path: "",
  },
  box: {
    direction: "Бокс",
    images_url: {
      jpg: "/images/directions/result_direction_41.jpeg",
      webp: "/images/directions/result_direction_41.webp",
    },
    link_path: "",
  },
  grappling: {
    direction: "Грепплинг",
    images_url: {
      jpg: "/images/directions/result_direction_42.jpeg",
      webp: "/images/directions/result_direction_42.webp",
    },
    link_path: "",
  },
  kickboxing: {
    direction: "Кикбоксинг",
    images_url: {
      jpg: "/images/directions/result_direction_43.jpeg",
      webp: "/images/directions/result_direction_43.webp",
    },
    link_path: "",
  },
  mma: {
    direction: "ММА",
    images_url: {
      jpg: "/images/directions/result_direction_44.jpeg",
      webp: "/images/directions/result_direction_44.webp",
    },
    link_path: "",
  },
  latina: {
    direction: "LATINA",
    images_url: {
      jpg: "/images/directions/result_direction_45.jpeg",
      webp: "/images/directions/result_direction_45.webp",
    },
    link_path: "",
  },
  multidance: {
    direction: "MULTI DANCE",
    images_url: {
      jpg: "/images/directions/result_direction_46.jpeg",
      webp: "/images/directions/result_direction_46.webp",
    },
    link_path: "",
  },
  oriental: {
    direction: "ORIENTAL",
    images_url: {
      jpg: "/images/directions/result_direction_47.jpeg",
      webp: "/images/directions/result_direction_47.webp",
    },
    link_path: "",
  },
  zumba: {
    direction: "ZUMBA",
    images_url: {
      jpg: "/images/directions/result_direction_48.jpeg",
      webp: "/images/directions/result_direction_48.webp",
    },
    link_path: "",
  },
  dance_mix: {
    direction: "DANCE MIX",
    images_url: {
      jpg: "/images/directions/result_direction_49.jpeg",
      webp: "/images/directions/result_direction_49.webp",
    },
    link_path: "",
  },
  childrens_swimming: {
    direction: "Детское плавание",
    images_url: {
      jpg: "/images/directions/result_direction_54.jpeg",
      webp: "/images/directions/result_direction_54.webp",
    },
    link_path: "",
  },
  martial_arts_children: {
    direction: "Детские единоборства",
    images_url: {
      jpg: "/images/directions/result_direction_55.jpeg",
      webp: "/images/directions/result_direction_55.webp",
    },
    link_path: "",
  },
  children_center: {
    direction: "Детский центр",
    images_url: {
      jpg: "/images/directions/result_direction_56.jpeg",
      webp: "/images/directions/result_direction_56.webp",
    },
    link_path: "",
  },
};

type keys_list_type = {
  keys_list: string[];
};

export const isEmptyObj = (object: object): boolean => {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      return false;
    }
  }
  return true;
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
    <ul className="grig grid-cols-3 gap-4">
      {keys_list.map((current_key) => {
        const { direction, images_url, link_path } =
          directions_data[current_key] ?? {};

        return (
          <li>
            <Link
              to={link_path}
              className="relative overflow-hidden rounded-3xl after:w-full after:h-[120px] after:absolute after:bottom-0 after:left-0 after:z-[0] after:bg-[url('/images/decor_serv.svg')] after:bg-no-repeat after:bg-cover after:opacity-80"
            ></Link>
          </li>
        );
      })}
    </ul>
  );
};
