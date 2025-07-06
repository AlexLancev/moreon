import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

import { Container, Tabs, Title } from "components";

import { MessageCircleQuestion } from "lucide-react";

import { Link } from "react-router-dom";

import { fitness_area_store } from "@/stores/data_store";
import { isEmptyObj } from "@/utils";
import { Button } from "@/components/ui/button";

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

    const fitness_area_bd = toJS(data?.[0]);

    if (isLoading) return <div>Загрузка...</div>;
    if (isError) return <div>Ошибка: не удалось получить данные</div>;

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
          <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">
            <span className="customHeadDecor">Зоны</span> фитнес клуба
          </Title>
          <Tabs
            isActiveTab={isActiveTab}
            change_tabs={change_tabs}
            tab_list={tab_list}
          />
          <div className="gap-x-6 pt-4 md:flex md:items-center md:*:w-[50%]">
            <div className="mb-10 w-full">
              <Title className="customHeadDecor mb-3 xl:text-2xl 2xl:text-3xl">{head}</Title>
              <p className="mb-7 text-lg 2xl:text-2xl 3xl:text-3xl">{description}</p>
              <Button asChild>
                <Link to={path}>
                  Подробнее <MessageCircleQuestion />
                </Link>
              </Button>
            </div>
            <picture>
              <source srcSet={images_url?.jpg} type="image/webp" />
              <img
                className="h-[299px] 2xl:w-full 2xl:h-[500px] m-auto overflow-hidden rounded-3xl object-cover"
                width={525}
                src={images_url?.jpg}
                alt={description_images}
                aria-label={description_images}
                loading="lazy"
              />
            </picture>
          </div>
        </Container>
      </section>
    );
  },
);
