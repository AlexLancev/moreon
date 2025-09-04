type FitnessClubListType = Record<string, string>;
type ChildrensSwimmingDataType = Record<string, string>;
type KidsFitnesHeroDataType = Record<string, string>;
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
  imagesUrl?: {
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
