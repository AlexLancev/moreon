import { type ReactNode } from "react";
import classNames from "classnames";

type Container_props_type = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Container_props_type) => {
  return (
    <div className={classNames("mx-auto px-4 max-w-[1400px]", className)}>
      {children}
    </div>
  );
};
