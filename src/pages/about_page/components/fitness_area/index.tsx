import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

import { Container, Tabs } from "components";

import { fitness_area_store } from "@/stores/data_store";
import { isEmptyObj } from "@/utils";

const tab_list = [
  { key: "gym", category: "Тренажёрный зал" },
  { key: "training_room", category: "Зал групповых тренировок" },
  { key: "pool", category: "Спортивный бассейн" },
  { key: "cardio_room", category: "Зал кардио тренажёров" },
  { key: "martial_arts", category: "Зал единоборств" },
];

export const Fitness_area = observer(
  ({ tabs_store }: { tabs_store: Fitness_area_tabs_type }) => {
    const { isActiveTab, change_tabs } = tabs_store;

    const { data, isLoading, isError } = fitness_area_store;

    const fitness_area_bd = toJS(data?.[0]?.data);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: Failed to fetch data</div>;

    if (
      !fitness_area_store ||
      !fitness_area_bd ||
      isEmptyObj(fitness_area_bd) ||
      !tab_list ||
      tab_list.length === 0
    )
      return null;

    const current_data = fitness_area_bd[isActiveTab];

    const { head, description, description_images, path, images_url } =
      current_data ?? {};

    return (
      <section className="py-12">
        <Container>
          <h2 className="mb-10">
            <span className="head_decor">Зоны</span> фитнес клуба
          </h2>
          <Tabs
            isActiveTab={isActiveTab}
            change_tabs={change_tabs}
            tab_list={tab_list}
          />
          <div className="flex items-center gap-x-14 pt-8">
            <picture>
              <source srcSet={images_url?.jpg} type="image/webp" />
              <img
                className="rounded-3xl overflow-hidden h-[299px] object-cover"
                width={525}
                src={images_url?.jpg}
                alt={description_images}
                aria-label={description_images}
              />
            </picture>
            <div className="w-full max-w-[525px]">
              <h3 className="mb-3 head_decor text-3xl">{head}</h3>
              <p className="mb-7 text-lg">{description}</p>
              <a
                href={path}
                className="inline-flex text-white py-4 px-7 m-auto 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
              >
                Подробнее
              </a>
            </div>
          </div>
        </Container>
      </section>
    );
  },
);
