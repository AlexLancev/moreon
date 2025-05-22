import { Tabs_store } from "stores/tabs_store";

import { Childrens_swimming_tabs } from "./components";

import { childrens_swimming_data } from "@/constans";
import { Container, Title } from "@/components";

const childrens_swimming_store = new Tabs_store();

export const Childrens_swimming = () => {
  return (
    <Container>
      <section className="py-12 px-10 text-lg">
        <Title>
          <span className="head_decor">Детское плавание</span> от 0 до 13 лет
        </Title>
        <p className="mb-4">
          Приучите ребенка к здоровому образу жизни с первых шагов!
        </p>
        <p className="mb-4">
          Плавание – навык, который останется на всю жизнь!
        </p>
        {childrens_swimming_data && childrens_swimming_data.length !== 0 && (
          <>
            <p className="mb-4">
              В Moreon Fitness есть 2 бассейна для плавания. Занятия рассчитаны
              на возрастные категории от 0 до 16 лет и делятся на 4 блока,
              учитывая возможности и подготовку ребенка
            </p>
            <ul className="mb-4 list-disc pl-5">
              {childrens_swimming_data.map(({ description }, idx: number) => {
                if (!description) return null;

                return (
                  <li key={idx} className="last:mb-2">
                    {description}
                  </li>
                );
              })}
            </ul>
          </>
        )}
        <p className="mb-10">Приглашаем на занятия юных пловцов!</p>
        <Childrens_swimming_tabs
          tabs_store={childrens_swimming_store as Childrens_swimming_tabs_type}
        />
      </section>
    </Container>
  );
};
