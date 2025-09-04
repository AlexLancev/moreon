import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { paths } from "@/paths";

const { home } = paths;

interface LogoPropsType {
  className?: string;
}

export const Logo = ({ className }: LogoPropsType) => {
  return (
    <Link to={home} className={cn("block", className)}>
      <span className="visually-hidden">
        Логотип фитнес клуба Moreon Fitness
      </span>
      <picture>
        <source srcSet="/images/logowhite.webp" type="image/webp" />
        <img
          className="w-[100px] md:w-[120px] xl:w-[140px] 2xl:w-[180px] 3xl:w-[240px]"
          src="/images/logowhite.png"
          alt="Логотип фитнес клуба Moreon Fitness"
          title="Логотип фитнес клуба Moreon Fitness"
          loading="lazy"
        />
      </picture>
    </Link>
  );
};
