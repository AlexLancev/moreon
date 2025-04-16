export const Team_hero = () => {
  return (
    <div className="container">
      <section className="relative py-20 px-10 after:absolute after:inset-0 before:absolute before:left-28 before:top-28 before:w-[138px] before:h-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px]">
        <picture>
          <source srcSet="/images/team_hero/hero.webp" type="image/webp" />
          <img
            className="absolute inset-0 -z-10 object-cover w-full h-full opacity-10"
            src="/images/team_hero/hero.jpeg"
            alt=""
            aria-hidden
          />
        </picture>
        <div className="relative z-10">
          <h1 className="mb-1">Наша команда</h1>
          <button
            className="inline-flex text-white py-4 px-7 mt-10 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
            type="button"
          >
            Гостевой визит
          </button>
        </div>
      </section>
    </div>
  );
};
