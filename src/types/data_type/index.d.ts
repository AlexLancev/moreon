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
  head: string;
  images_url: {
    png: string;
    webp: string;
  };
};

type Gallery_list_type = {
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
