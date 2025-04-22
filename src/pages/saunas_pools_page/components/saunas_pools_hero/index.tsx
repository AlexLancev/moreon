import { modal_store } from "@/stores";

export const Saunas_pools_hero = () => {
  const { isVisibleModal, change_modal } = modal_store;

  return (
    <div className="container">
      <section className="relative py-20 px-10 after:absolute after:inset-0 before:absolute before:left-28 before:top-28 before:w-[138px] before:h-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px]">
        <picture>
          <source srcSet="/images/saunas_pools_hero/hero_bg.webp" />
          <img
            className="absolute inset-0 -z-10 w-full h-full object-cover opacity-10"
            src="/images/saunas_pools_hero/hero_bg.jpeg"
            alt=""
            aria-hidden
          />
        </picture>
        <div className="relative z-10 w-full max-w-[625px] text-lg">
          <h1 className="mb-6">Бани и бассейны</h1>
          <p className="mb-4">
            Мореон Фитнес предоставляет своим клиентам уникальные возможности
            для отдыха и оздоровления.
          </p>
          <p className="mb-4">
            Члены клуба Мореон получают доступ к спортивному бассейну, бассейну
            «Золотые рыбки», банному комплексу «Термы» и пространству Мореон
            SPA. В раздевалках фитнес-клуба работает солярий.
          </p>
          <p className="mb-6">
            В этом разделе Вы можете подробнее ознакомиться с
            велнесс-возможностями Мореон Фитнес.
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
