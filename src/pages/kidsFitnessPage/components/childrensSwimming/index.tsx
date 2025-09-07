import { Container, Title } from "@/components";
import { childrensSwimmingData } from "@/constans";

import { useTabsStore } from "@/hooks";

import { ChildrensSwimmingTabs } from "./components";

export const ChildrensSwimming = () => {
  const childrensSwimminStore =
    useTabsStore<ChildrensSwimmingKeyType>("infantSwimming");

  return (
    <Container>
      <section className="p-2.5 text-lg md:p-5 lg:p-8 lg:text-xl xl:text-2xl 2xl:text-3xl">
        <Title className="mb-3 md:mb-6 lg:mb-8 2xl:mb-12">
          <span className="text-customHeadDecor">Детское плавание</span> от 0 до
          13 лет
        </Title>
        <p className="mb-4 xl:mb-6 2xl:mb-8">
          Приучите ребенка к здоровому образу жизни с первых шагов!
        </p>
        <p className="mb-4 xl:mb-6 2xl:mb-8">
          Плавание – навык, который останется на всю жизнь!
        </p>
        <p className="mb-4">
          В Moreon Fitness есть 2 бассейна для плавания. Занятия рассчитаны на
          возрастные категории от 0 до 16 лет и делятся на 4 блока, учитывая
          возможности и подготовку ребенка
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-5 lg:space-y-2 xl:space-y-3">
          {childrensSwimmingData.map(({ description }, idx: number) => (
            <li key={idx}>{description}</li>
          ))}
        </ul>
        <p className="mb-10 xl:mb-12 2xl:mb-14">
          Приглашаем на занятия юных пловцов!
        </p>
        <ChildrensSwimmingTabs tabsStore={childrensSwimminStore} />
      </section>
    </Container>
  );
};
