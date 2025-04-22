import { modal_store } from "@/stores";

export const Services_hero = () => {
  const { isVisibleModal, change_modal } = modal_store;

  return (
    <div className="container">
      <section className="px-20 pt-12 pb-24 relative">
        <picture>
          <source
            srcSet="/images/services_hero/service_bg.webp"
            type="image/webp"
          />
          <img
            className="absolute inset-0 -z-10 w-full h-full object-cover"
            src="/images/services_hero/service_bg.png"
            alt=""
            aria-hidden
          />
        </picture>
        <div className="w-full max-w-[700px]">
          <h2 className="mb-8 text-5xl">
            Услуги <span className="head_decor">Moreon Fitness</span>
          </h2>
          <p className="mb-14 text-xl">
            Занятия фитнесом – это микс эффективных упражнений, мотивирующего
            влияния тренера, духа соревнований и общения с единомышленниками.
            Члены клуба Мореон Фитнес получают доступ к тренажерному залу,
            бассейнам, скалодрому и 40 видам групповых занятий для разного
            уровня подготовки и возраста – от начинающих до продвинутых
            спортсменов, для детей и взрослых.
          </p>
          <button
            onClick={() => change_modal(!isVisibleModal)}
            className="flex text-white py-4 px-7 mt-10 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
            type="button"
          >
            Гостевой визит!!
          </button>
        </div>
      </section>
    </div>
  );
};
