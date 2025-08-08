import { Hero } from "@/components";
import { kids_fitnes_hero_data } from "@/constans";
import { kidsFitnesData } from "@/constans/heroData";

export const Kids_fitnes_hero = () => {
  return (
    <Hero data={kidsFitnesData} isOpaque>
      <div className="text-xl xl:text-lg 2xl:text-2xl 3xl:text-3xl">
        <p className="mb-4">
          Детский возраст – лучшее время, для того чтобы приучать ребенка к
          здоровому образу жизни.
        </p>
        <p className="mb-4">
          Увлечем и заинтересуем юных спортсменов, в Moreon Fitness есть:
        </p>
        <ul className="mb-4 list-disc pl-5">
          {kids_fitnes_hero_data.map(({ description }, idx: number) => (
            <li key={idx} className="mb-2 last:mb-0">
              {description}
            </li>
          ))}
        </ul>
        <p className="mb-5 md:mb-8 xl:mb-12">
          Пусть ваши дети растут сильными, здоровыми и активными!
        </p>
      </div>
    </Hero>
  );
};
