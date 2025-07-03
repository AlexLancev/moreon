import { createElement, type ReactNode } from "react";

import classNames from "classnames";

type Title_props_type = {
  fontSize?: TitleSize;
  headingType?: TitleSize;
  className?: string;
  children: ReactNode;
};

export const Title = ({
  children,
  fontSize = "lg",
  headingType = "lg",
  className,
}: Title_props_type) => {
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
      className: classNames(
        "mb-10 2xl:mb-16 text-white leading-[1.4] font-familyDelaGothicOne",
        className,
        mapClassNameBySize[fontSize],
      ),
    },
    children,
  );
};
