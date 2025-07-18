import { Tabs_store } from "stores/tabs_store";

import { Container, Title } from "@/components";
import { childrens_swimming_data } from "@/constans";

import { Childrens_swimming_tabs } from "./components";

const childrens_swimming_store = new Tabs_store();

export const Childrens_swimming = () => {
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
        {childrens_swimming_data && childrens_swimming_data.length !== 0 && (
          <>
            <p className="mb-4">
              В Moreon Fitness есть 2 бассейна для плавания. Занятия рассчитаны
              на возрастные категории от 0 до 16 лет и делятся на 4 блока,
              учитывая возможности и подготовку ребенка
            </p>
            <ul className="mb-4 list-disc space-y-1 pl-5 lg:space-y-2 xl:space-y-3">
              {childrens_swimming_data.map(({ description }, idx: number) => {
                if (!description) return null;

                return <li key={idx}>{description}</li>;
              })}
            </ul>
          </>
        )}
        <p className="mb-10 xl:mb-12 2xl:mb-14">
          Приглашаем на занятия юных пловцов!
        </p>
        <Childrens_swimming_tabs
          tabs_store={childrens_swimming_store as Childrens_swimming_tabs_type}
        />
      </section>
    </Container>
  );
};
