export const Club_cards_hero = () => {
  return (
    <div className="container">
      <section className="relative py-16 px-10 before:absolute before:left-28 before:top-28 before:w-[138px] before:h-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px]">
        <picture>
          <source
            srcSet="/images/club_cards_hero/card.webp"
            type="image/webp"
          />
          <img
            className="absolute inset-0 w-full h-full object-cover object-top -z-10"
            src="/images/club_cards_hero/card.jpg"
            alt=""
            aria-hidden
          />
        </picture>
        <div className="w-full max-w-[525px]">
          <h1 className="mb-3">Клубные карты</h1>
          <p className="mb-5 text-lg">
            С клубной картой Мореон Фитнес вы становитесь членом клуба
            профессионалов и любителей спорта и здорового образа жизни.
            Сотрудников и клиентов Мореон Фитнес объединяет общая идея -
            "Присоединись к уникальности – стань уникальным!".
          </p>
          <button
            className="inline-flex text-white py-4 px-7 mt-10 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
            type="button"
          >
            Выбрать клубную карту
          </button>
        </div>
      </section>
    </div>
  );
};
