import { type ReactNode } from "react";
import { Link, LinkProps, Path } from "react-router-dom";

import { cn } from "@/lib/utils";

interface AnchorLinkProps extends Omit<LinkProps, "to"> {
  children: ReactNode;
  targetId?: "price-calc";
  className?: string;
  to?: string | Partial<Path>;
}

export const AnchorLink = ({
  className,
  children,
  targetId = "price-calc",
  to = "/",
  ...props
}: AnchorLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    props.onClick?.(e);
  };

  return (
    <Link
      {...props}
      to={{
        pathname: typeof to === "string" ? to : (to?.pathname ?? "/"),
        hash: `#${targetId}`,
      }}
      className={cn("", className)}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};
