import { createElement, type ReactNode } from "react";

import { sizeTitleData } from "@/constans";
import { cn } from "@/lib/utils";
import { useGetResponsiveValue } from "@/utils";

type TitlePropsType = {
  headingType?: TitleSize;
  className?: string;
  children: ReactNode;
  defaultValue?: TitleSize;
  typeObj?: sizeRangesType[];
};

export const Title = ({
  children,
  className,
  headingType = "lg",
  defaultValue = "md",
}: TitlePropsType) => {
  const fontSize = useGetResponsiveValue<TitleSize>(
    defaultValue,
    sizeTitleData,
  );

  const mapTagBySize = {
    xs: "h5",
    sm: "h4",
    md: "h3",
    lg: "h2",
    xl: "h1",
  } as const;

  const mapClassNameBySize = {
    xs: "text-[18px]",
    sm: "text-[20px]",
    md: "text-[24px]",
    lg: "text-[30px]",
    xl: "text-[54px]",
  } as const;

  return createElement(
    mapTagBySize[headingType],
    {
      className: cn(
        "text-white leading-[1.4] font-familyDelaGothicOne",
        mapClassNameBySize?.[fontSize],
        className,
      ),
    },
    children,
  );
};
