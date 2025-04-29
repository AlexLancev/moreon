import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <picture>
        <source width={160} srcSet="/images/logowhite.webp" type="image/webp" />
        <img
          src="/images/logowhite.png"
          alt="Логотип фитнес клуба Moreon Fitness"
          title="Логотип фитнес клуба Moreon Fitness"
        />
      </picture>
    </Link>
  );
};
