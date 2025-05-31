import { Link } from "react-router-dom";
import classNames from "classnames";

import { paths } from "@/paths";

const { home } = paths;

type Logo_props_type = {
  className?: string;
};

export const Logo = ({ className }: Logo_props_type) => {
  return (
    <Link to={home} className={classNames("block", className)}>
      <span className="visually-hidden">
        Логотип фитнес клуба Moreon Fitness
      </span>
      <picture>
        <source srcSet="/images/logowhite.webp" type="image/webp" />
        <img
          className="w-[160px] 2xl:w-[200px]"
          src="/images/logowhite.png"
          alt="Логотип фитнес клуба Moreon Fitness"
          title="Логотип фитнес клуба Moreon Fitness"
        />
      </picture>
    </Link>
  );
};
