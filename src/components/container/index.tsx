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
        "mx-auto w-full max-w-[1400px] px-2.5 2xl:max-w-[1600px] 2xl:px-4 3xl:max-w-[2100px] 3xl:px-6",
        className,
      )}
    >
      {children}
    </div>
  );
};
