import { type ReactNode } from "react";
import classNames from "classnames";

type Container_props_type = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Container_props_type) => {
  return (
    <div
      className={classNames(
        "w-full max-w-[1400px] 2xl:max-w-[1700px] mx-auto px-4",
        className,
      )}
    >
      {children}
    </div>
  );
};
