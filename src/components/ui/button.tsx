import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "2xl:px-10 2xl:py-5 2xl:text-xl 2xl:[&_svg]:size-6 2xl:rounded-xl 2xl:gap-x-4 2xl:mt-16 mt-12 inline-flex items-center justify-center gap-x-2 whitespace-nowrap rounded-md will-change-transform text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "customGreenBtn text-white duration-300 hover:translate-y-[1px]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-2 py-4 text-xs",
        lg: "px-5 py-3",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const updatedProps = asChild ? props : { type: "button", ...props };
    return (
      <Comp
        {...(updatedProps as React.ComponentProps<typeof Comp>)}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
