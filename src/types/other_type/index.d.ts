type Fitness_club_list_type = Record<string, string>;
type Childrens_swimming_data_type = Record<string, string>;
type Kids_fitnes_hero_data_type = Record<string, string>;
type TitleSize = "xs" | "sm" | "md" | "lg" | "xl";
type sizeRangesType = {
  min?: number;
  max?: number;
  meaning: TitleSize | number;
};
type HeroDataTypes = {
  title: {
    general: string;
    decor?: string;
  };
  images_url?: {
    webp: string;
    png?: string;
    jpg?: string;
  };
  button: {
    label: string;
    iconBtn: ReactNode;
  };
};

type HeroPropsTypes = {
  data: HeroDataTypes;
  isOpaque?: boolean;
  children?: ReactNode;
  className?: string;
};
