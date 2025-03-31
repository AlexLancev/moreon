export const Logo = () => {
  return (
    <picture>
      <source width={160} srcSet="/images/logowhite.webp" title="Логотип фитнес клуба Moreon Fitness" type="image/webp" />
      <img width={160} src="/images/logowhite.png" alt="Логотип фитнес клуба Moreon Fitness" title="Логотип фитнес клуба Moreon Fitness" />
    </picture>
  );
};
