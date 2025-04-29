type Types_services_type = {
  id: number;
  head: string;
  description: string;
  path: string;
};

type About_us_type = {
  id: number;
  title: string;
  description: string;
};

type Every_card_type = {
  id: number;
  head: string;
  images_url: {
    png: string;
    webp: string;
  };
};

type Gallery_list_type = {
  id: number;
  description: string;
  images_url: {
    jpg: string;
    webp: string;
  };
};

type Performance_key_type =
  | "spa"
  | "cafe_restaurant"
  | "reception"
  | "sales_department";

type Performance_type = {
  data_key: string[];
  isVisibleBtn: boolean;
};

type Performance_images_type = {
  images_description: string;
  images_url: {
    jpg: string;
    webp: string;
  };
};

type Performance_data_type = {
  data: Record<
    Performance_key_type,
    {
      title: string;
      description: string;
      decor_title: string;
      arr_images: Performance_images_type[];
    }
  >;
};

type Video_reviews_type = {
  id: number;
  description: string;
  person_about_club: string;
  preview_image: {
    jpg: string;
    webp: string;
  };
  path: string;
};

type About_question_type = {
  id: number;
  head: string;
  description: string;
};

type Personal_format_key_type =
  | "gym"
  | "group_training"
  | "childrens_programs"
  | "beauty_health"
  | "authors_programs";

type Tabs_store_type = {
  isActiveTab: string;
  change_tabs: (value: string) => void;
};

type Personal_format_tabs_type = {
  data_key: Personal_format_key_type[];
  tabs_store: Tabs_store_type;
};

type Tab_list_type = {
  key: string;
  category: string;
};

type Key_list_type = {
  [key: string]: { description: string };
};

type Personal_format_data_type = {
  data: Record<
    Personal_format_key_type,
    {
      key_name: Personal_format_key_type;
      category: string;
      tab_list: Tab_list_type[];
      key_list: Key_list_type;
    }
  >;
};

type Fitness_area_tabs_type = {
  isActiveTab: Tab_fitness_type;
  change_tabs: (value: string) => void;
};

type Tab_fitness_type =
  | "training_room"
  | "gym"
  | "pool"
  | "cardio_room"
  | "martial_arts";

type Fitness_area_type = {
  data: Record<
    Tab_fitness_type,
    {
      name_key: Tab_fitness_type;
      head: string;
      description: string;
      description_images: string;
      images_url: {
        jpg: string;
        webp: string;
      };
      path: string;
    }
  >;
};

type Water_zone_key_type =
  | "baths_swimming"
  | "sports_pool"
  | "spa"
  | "thermal_baths"
  | "goldfish";

type Water_zone_tabs_type = {
  isActiveTab: Water_zone_key_type;
  change_tabs: (value: string) => void;
};

type Water_zone_type = {
  data: Record<
    Water_zone_key_type,
    {
      head: string;
      description: string;
      images_description: string;
      images_url: {
        jpg: string;
        webp: string;
      };
    }
  >;
};

type Club_cards_tabs_type = {
  isActiveTab: Club_cards_key_type;
  change_tabs: (value: string) => void;
};

type Club_cards_key_type =
  | "fitnes"
  | "fitnes_spa"
  | "corporate_card"
  | "flexible"
  | "premium";

type Club_cards_type = {
  data: Record<
    Club_cards_key_type,
    {
      head: string;
      description: string;
      images_url: {
        jpg: string;
        webp: string;
      };
      path: string;
    }
  >;
};

type Childrens_swimming_tabs_type = {
  isActiveTab: Childrens_swimming_key_type;
  change_tabs: (value: string) => void;
};

type Childrens_swimming_key_type =
  | "infant_swimming"
  | "early_swimming"
  | "childrens_swimming"
  | "competitive_swimming";

type Childrens_swimming_type = {
  data: Record<
    Childrens_swimming_key_type,
    {
      head: string;
      description: string;
      image_description: string;
      path: string;
      images_url: {
        jpg: string;
        webp: string;
      };
    }
  >;
};

type News_type = {
  id: number;
  description: string;
  description_picture: string;
  url_images: {
    jpg: string;
    webp: string;
  };
};

type Stock_type = Omit<News_type, "description_picture">;

type Team_tab_key_type = "martial_arts" | "gym" | "group_training" | "pool";

type Team_key_type = {
  isActiveTab: Team_tab_key_type;
  change_tabs?: (value: string) => void;
};

type Team_type = {
  name: string;
  type: Partial<Record<string, boolean>>;
  url_images: {
    jpg: string;
    webp: string;
  };
  about_coach: {
    qualification: string;
    work_experience: string;
    contacts: {
      phone: string;
    };
    specialization: string;
    education: string;
    achievements: string;
  };
};

type Reviews_type = {
  id: number;
  person: string;
  review: string;
  raiting: string;
};

type Profitable_visits_type = {
  id: number;
  head: string;
  profitable_visits_list: string[];
  images_url: {
    png: string;
    webp: string;
  };
};

type Other_directions_type = {
  id: number;
  path: string;
  descriptions: string;
  images_url: {
    png: string;
    webp: string;
  };
};

type Direct_keys_type =
  | "mind_body"
  | "strength_functional_training"
  | "aerobics"
  | "gym"
  | "pool"
  | "martial_arts"
  | "dance"
  | "personal_training"
  | "yoga"
  | "test"
  | "kids_fitnes"
  | "group_training"
  | "stretching"
  | "pranayama_meditation"
  | "yoga_intensiv_90"
  | "pilates_allegro"
  | "healthy_back"
  | "pilates_mat"
  | "soft_balance"
  | "hatha_yoga"
  | "cross_training"
  | "abs_streth"
  | "les_mills_body_pump"
  | "hot_iron_1"
  | "hot_iron_2"
  | "les_mills_grit"
  | "thinner"
  | "les_mills_core"
  | "real_ryder"
  | "step"
  | "step_pro"
  | "pro_jumping"
  | "step_interval"
  | "infant_swimming"
  | "swimming_children"
  | "school_competitive_swimming"
  | "swimming_adults"
  | "aqua_aerobics"
  | "aqua_mom"
  | "work_apparatus"
  | "box"
  | "grappling"
  | "kickboxing"
  | "mma"
  | "latina"
  | "multidance"
  | "oriental"
  | "zumba"
  | "dance_mix"
  | "childrens_swimming"
  | "martial_arts_children"
  | "children_center"
  | "baths_swimming"
  | "sports_pool"
  | "spa"
  | "thermal_baths"
  | "goldfish";

type Directions_type = {
  data: Record<
    Direct_keys_type,
    {
      direction: string;
      description: string;
      images_url: {
        jpg: string;
        webp: string;
      };
      path: string;
    }
  >;
};

type Directions_keys_type = {
  keys_list: Direct_keys_type[];
};
