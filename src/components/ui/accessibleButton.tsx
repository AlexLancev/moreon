import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

export const AccessibleButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      {...props}
      ref={ref}
      className={className}
      type={props.type ?? "button"}
    />
  );
});

AccessibleButton.displayName = "AccessibleButton";
