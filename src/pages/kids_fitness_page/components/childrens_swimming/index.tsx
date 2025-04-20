import { Tabs_store } from "stores/tabs_store";

import { Childrens_swimming_tabs } from "./components";

type childrens_swimming_data_type = Record<string, string>;

const childrens_swimming_data: childrens_swimming_data_type[] = [
  {
    description: "грудничковое плавание от 2 месяцев до 1 года",
  },
  {
    description: "раннее плавание 1 — 3 года",
  },
  {
    description: "детское плавание 3 года — 7 лет",
  },
  {
    description: "спортивное плавание 7 — 13 лет",
  },
];

const childrens_swimming_store = new Tabs_store();

export const Childrens_swimming = () => {
  return (
    <div className="container">
      <section className="py-12 px-10 text-lg">
        <h2 className="mb-10">
          <span className="head_decor">Детское плавание</span> от 0 до 13 лет
        </h2>
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
                  <li key={idx} className="[&:not(:last-child)]:mb-2">
                    {description}
                  </li>
                );
              })}
            </ul>
          </>
        )}
        <p className="mb-10">Приглашаем на занятия юных пловцов!</p>
        <Childrens_swimming_tabs tabs_store={childrens_swimming_store} />
      </section>
    </div>
  );
};
