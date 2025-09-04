import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerPropsType = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerPropsType) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1400px] px-2.5 2xl:max-w-[1600px] 2xl:px-4 3xl:max-w-[2100px] 3xl:px-6",
        className,
      )}
    >
      {children}
    </div>
  );
};
