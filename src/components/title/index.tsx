import { createElement, type ReactNode } from "react";

import classNames from "classnames";

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl";

type Title_props_type = {
  size?: TitleSize;
  className?: string;
  children: ReactNode;
};

export const Title = ({
  children,
  size = "lg",
  className = "mb-10 text-white leading-[1.4] font-[DelaGothicOne]",
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
    lg: "text-[40px]",
    xl: "text-[54px]",
  } as const;

  return createElement(
    mapTagBySize[size],
    { className: classNames(className, mapClassNameBySize[size]) },
    children,
  );
};
