import { NotebookText } from "lucide-react";

import { Container, Hero, Title } from "@/components";
import { Button } from "@/components/ui/button";
import { kids_fitnes_hero_data } from "@/constans";
import { modal_store } from "@/stores";
import { kidsFitnesData } from "@/constans/heroData";

export const Kids_fitnes_hero = () => {
  return (
    <Hero data={kidsFitnesData} isOpaque>
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
                <li key={idx} className="mb-2 last:mb-0">
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
    </Hero>
  );
};
