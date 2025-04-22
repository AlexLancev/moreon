import { modal_store } from "@/stores";

type kids_fitnes_hero_data_type = Record<string, string>;

const kids_fitnes_hero_data: kids_fitnes_hero_data_type[] = [
  {
    description: "Грудничковое плавание",
  },
  {
    description: "Спортивное плавание",
  },
  {
    description: "Единоборства, бокс, кикбоксинг и MMA",
  },
  {
    description: "Групповые и индивидуальные тренировки",
  },
  {
    description: "Спортивные мероприятия и соревнования",
  },
];

export const Kids_fitnes_hero = () => {
  const { isVisibleModal, change_modal } = modal_store;

  return (
    <div className="container">
      <section className="relative py-20 px-10 after:absolute after:inset-0 before:absolute before:left-28 before:top-28 before:w-[138px] before:h-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px]">
        <picture>
          <source
            srcSet="/images/kids_fitnes_hero/kids_hero.webp"
            type="image/webp"
          />
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-10"
            src="/images/kids_fitnes_hero/kids_hero.jpeg"
            alt=""
            aria-hidden
          />
        </picture>
        <div className="relative z-10 w-full max-w-[625px] text-lg">
          <h1 className="mb-3">Детский фитнес</h1>
          <p className="mb-4">
            Детский возраст – лучшее время, для того чтобы приучать ребенка к
            здоровому образу жизни.
          </p>
          {kids_fitnes_hero_data && kids_fitnes_hero_data.length !== 0 && (
            <>
              <p className="mb-4">
                Увлечем и заинтересуем юных спортсменов, в Moreon Fitness есть:
              </p>
              <ul className="mb-4 list-disc pl-5">
                {kids_fitnes_hero_data.map(({ description }, idx: number) => {
                  if (!description) return null;

                  return (
                    <li key={idx} className="[&:not(:last-child)]:mb-2">
                      {description}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          <p className="mb-5">
            Пусть ваши дети растут сильными, здоровыми и активными!
          </p>
          <button
            onClick={() => change_modal(!isVisibleModal)}
            className="inline-flex will-change-transform text-white py-4 px-7 mt-10 m-auto 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
            type="button"
          >
            Гостевой визит
          </button>
        </div>
      </section>
    </div>
  );
};
