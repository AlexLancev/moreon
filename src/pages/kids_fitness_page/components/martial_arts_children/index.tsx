import { NotebookText as IconNotebookText } from "lucide-react";

import { Container, Title } from "@/components";
import { Button } from "@/components/ui/button";
import { modal_store } from "@/stores";

type MartialArtsDirectionsKeyType =
  | "бокс"
  | "тайский бокс"
  | "кикбоксинг"
  | "ММА";

type MartialArtsDirectionsType = Record<
  "description",
  MartialArtsDirectionsKeyType
>;

const martial_arts_children_directions: MartialArtsDirectionsType[] = [
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
      <Container>
        <Title className="mb-3 md:mb-6 lg:mb-8 2xl:mb-12">
          <span className="text-customHeadDecor">Единоборства</span> для детей
        </Title>
        <div className="md:flex md:items-start md:justify-evenly md:gap-x-6 xl:gap-x-8 2xl:gap-x-12">
          <picture className="flex-shrink-0">
            <source
              srcSet="/images/martial_arts_children/child_1.webp"
              type="image/webp"
            />
            <img
              className="m-auto mb-8 w-auto overflow-hidden rounded-3xl object-cover md:mb-0 md:w-80 xl:w-auto"
              src="/images/martial_arts_children/child_1.jpeg"
              alt="На изображении двое мужчин находятся в боксерском ринге. Один мужчина, одетый в черную спортивную форму и перчатки, выполняет удар правой рукой. Второй мужчина, одетый в белую футболку, стоит напротив него, защищаясь левой рукой. Оба находятся в боевой стойке, сосредоточены на тренировке. На заднем плане видны веревки ринга и зрители, хотя они размыты. Фон темный, что подчеркивает центральность действий в ринге."
              aria-label="На изображении двое мужчин находятся в боксерском ринге. Один мужчина, одетый в черную спортивную форму и перчатки, выполняет удар правой рукой. Второй мужчина, одетый в белую футболку, стоит напротив него, защищаясь левой рукой. Оба находятся в боевой стойке, сосредоточены на тренировке. На заднем плане видны веревки ринга и зрители, хотя они размыты. Фон темный, что подчеркивает центральность действий в ринге."
              loading="lazy"
            />
          </picture>
          <div className="w-full xl:text-lg 2xl:text-2xl">
            <p className="mb-3 xl:mb-7">
              Тренировки по единоборствам помогают детям обрести уверенность в
              себе и развить силу духа! В основе лежат принципы гармоничного
              физического развития ребенка с приоритетом на здоровье.
            </p>
            {martial_arts_children_directions &&
              martial_arts_children_directions.length !== 0 && (
                <>
                  <p className="mb-3 xl:mb-7">
                    Выбирайте направление, которое интереснее вашему ребенку или
                    посещайте все:
                  </p>
                  <ul className="mb-3 list-disc space-y-1 pl-5 xl:space-y-3">
                    {martial_arts_children_directions.map(
                      ({ description }, idx: number) => {
                        if (!description) return null;

                        return <li key={idx}>{description}</li>;
                      },
                    )}
                  </ul>
                </>
              )}
            <p className="mb-5">
              Занятия в Moreon Fitness становятся для детей не только
              тренировкой, а любимым досугом!
            </p>
            <Button onClick={() => change_modal(!isVisibleModal)}>
              Гостевой визит <IconNotebookText />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
