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
        "w-full mx-auto max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[2100px] 3xl:px-6 2xl:px-4 px-2.5",
        className,
      )}
    >
      {children}
    </div>
  );
};
