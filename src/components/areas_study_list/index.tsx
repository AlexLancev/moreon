type areas_study_data_type = {
  [key: string]: {
    direction: string;
    images_url: {
      jpg: string;
      webp: string;
    };
    link_path: string;
  };
};

const areas_study_data: areas_study_data_type = {
  mind_body: {
    direction: "Mind Body",
    images_url: {
      jpg: "/images/areas_study/result_direction_1.jpeg",
      webp: "/images/areas_study/result_direction_1.webp",
    },
    link_path: "",
  },
  strength_functional_training: {
    direction: "Силовые и функциональные тренировки",
    images_url: {
      jpg: "/images/areas_study/result_direction_2.jpeg",
      webp: "/images/areas_study/result_direction_2.webp",
    },
    link_path: "",
  },
  aerobics: {
    direction: "Кардиопрограммы и аэробика",
    images_url: {
      jpg: "/images/areas_study/result_direction_3.jpeg",
      webp: "/images/areas_study/result_direction_3.webp",
    },
    link_path: "",
  },
  gym: {
    direction: "Тренажерный зал",
    images_url: {
      jpg: "/images/areas_study/result_direction_4.jpeg",
      webp: "/images/areas_study/result_direction_4.webp",
    },
    link_path: "",
  },
  pool: {
    direction: "Водные программы",
    images_url: {
      jpg: "/images/areas_study/result_direction_5.jpeg",
      webp: "/images/areas_study/result_direction_5.webp",
    },
    link_path: "",
  },
  martial_arts: {
    direction: "Единоборства",
    images_url: {
      jpg: "/images/areas_study/result_direction_6.jpeg",
      webp: "/images/areas_study/result_direction_6.webp",
    },
    link_path: "",
  },
  dance: {
    direction: "Танцы",
    images_url: {
      jpg: "/images/areas_study/result_direction_7.jpeg",
      webp: "/images/areas_study/result_direction_7.webp",
    },
    link_path: "",
  },
  personal_training: {
    direction: "Персональный тренинг",
    images_url: {
      jpg: "/images/areas_study/result_direction_8.jpeg",
      webp: "/images/areas_study/result_direction_8.webp",
    },
    link_path: "",
  },
  yoga: {
    direction: "Йога",
    images_url: {
      jpg: "/images/areas_study/result_direction_9.jpeg",
      webp: "/images/areas_study/result_direction_9.webp",
    },
    link_path: "",
  },
  test: {
    direction: "Фитнес-тестирование",
    images_url: {
      jpg: "/images/areas_study/result_direction_10.jpeg",
      webp: "/images/areas_study/result_direction_10.webp",
    },
    link_path: "",
  },
  kids_fitnes: {
    direction: "Детский фитнес",
    images_url: {
      jpg: "/images/areas_study/result_direction_11.jpeg",
      webp: "/images/areas_study/result_direction_11.webp",
    },
    link_path: "",
  },
  group_training: {
    direction: "Групповые программы",
    images_url: {
      jpg: "/images/areas_study/result_direction_12.jpeg",
      webp: "/images/areas_study/result_direction_12.webp",
    },
    link_path: "",
  },
};

export const Areas_study_list = () => {
  if (!areas_study_data) return null;

  return null;
};
