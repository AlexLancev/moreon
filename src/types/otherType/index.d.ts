type TitleSize = "xs" | "sm" | "md" | "lg" | "xl";

interface DescriptionItemType {
  description: string;
}

interface sizeRangesType {
  min?: number;
  max?: number;
  meaning: TitleSize | number;
}

interface HeroDataTypes {
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
}

interface HeroPropsTypes {
  data: HeroDataTypes;
  isOpaque?: boolean;
  children?: ReactNode;
  className?: string;
}
