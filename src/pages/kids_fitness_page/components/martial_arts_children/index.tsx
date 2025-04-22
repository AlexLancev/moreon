import { modal_store } from "@/stores";

const martial_arts_children_directions = [
  {
    description: "бокс",
  },
  {
    description: "тайский бокс",
  },
  {
    description: "кикбоксинг",
  },
  {
    description: "ММА",
  },
];

export const Martial_arts_children = () => {
  const { isVisibleModal, change_modal } = modal_store;

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-10">
          <span className="head_decor">Единоборства</span> для детей
        </h2>
        <div className="flex items-center justify-between gap-x-12">
          <picture>
            <source
              srcSet="/images/martial_arts_children/child_1.webp"
              type="image/webp"
            />
            <img
              width={525}
              height={350}
              className="object-cover rounded-3xl overflow-hidden"
              src="/images/martial_arts_children/child_1.jpeg"
              alt="На изображении двое мужчин находятся в боксерском ринге. Один мужчина, одетый в черную спортивную форму и перчатки, выполняет удар правой рукой. Второй мужчина, одетый в белую футболку, стоит напротив него, защищаясь левой рукой. Оба находятся в боевой стойке, сосредоточены на тренировке. На заднем плане видны веревки ринга и зрители, хотя они размыты. Фон темный, что подчеркивает центральность действий в ринге."
              aria-label="На изображении двое мужчин находятся в боксерском ринге. Один мужчина, одетый в черную спортивную форму и перчатки, выполняет удар правой рукой. Второй мужчина, одетый в белую футболку, стоит напротив него, защищаясь левой рукой. Оба находятся в боевой стойке, сосредоточены на тренировке. На заднем плане видны веревки ринга и зрители, хотя они размыты. Фон темный, что подчеркивает центральность действий в ринге."
            />
          </picture>
          <div className="w-full max-w-[725px]">
            <p className="mb-3">
              Тренировки по единоборствам помогают детям обрести уверенность в
              себе и развить силу духа! В основе лежат принципы гармоничного
              физического развития ребенка с приоритетом на здоровье.
            </p>
            {martial_arts_children_directions &&
              martial_arts_children_directions.length !== 0 && (
                <>
                  <p className="mb-3">
                    Выбирайте направление, которое интереснее вашему ребенку или
                    посещайте все:
                  </p>
                  <ul className="mb-3 list-disc pl-5">
                    {martial_arts_children_directions.map(
                      ({ description }, idx: number) => {
                        if (!description) return null;

                        return (
                          <li key={idx} className="[&:not(:last-child)]:mb-1">
                            {description}
                          </li>
                        );
                      },
                    )}
                  </ul>
                </>
              )}
            <p className="mb-5">
              Занятия в Moreon Fitness становятся для детей не только
              тренировкой, а любимым досугом!
            </p>
            <button
              onClick={() => change_modal(!isVisibleModal)}
              className="inline-flex will-change-transform text-white py-4 px-7 m-auto 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
              type="button"
            >
              Гостевой визит
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
