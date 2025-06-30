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
        "w-full max-w-[1400px] mx-auto md:px-4 xxs:px-2.5 2xl:max-w-[1700px] 2xl:px-6 3xl:max-w-[2100px] 3xl:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
};
