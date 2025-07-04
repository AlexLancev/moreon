import { NotebookText } from "lucide-react";

import { Container, Title } from "@/components";
import { Button } from "@/components/ui/button";
import { kids_fitnes_hero_data } from "@/constans";
import { modal_store } from "@/stores";

export const Kids_fitnes_hero = () => {
  const { isVisibleModal, change_modal } = modal_store;

  return (
    <Container>
      <section className="relative px-10 py-20 before:absolute before:left-28 before:top-28 before:h-[138px] before:w-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px] after:absolute after:inset-0">
        <picture>
          <source
            srcSet="/images/kids_fitnes_hero/kids_hero.webp"
            type="image/webp"
          />
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-10"
            src="/images/kids_fitnes_hero/kids_hero.jpeg"
            alt=""
            loading="lazy"
            aria-hidden
          />
        </picture>
        <div className="relative z-10 w-full max-w-[625px] text-lg">
          <Title className="mb-3">Детский фитнес</Title>
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
          <Button onClick={() => change_modal(!isVisibleModal)}>
            Гостевой визит <NotebookText />
          </Button>
        </div>
      </section>
    </Container>
  );
};
