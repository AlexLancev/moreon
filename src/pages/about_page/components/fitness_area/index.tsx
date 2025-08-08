import { Container, ContentLoader, Tabs, Title } from "components";
import { MessageCircleQuestion as IconMessageCircleQuestion } from "lucide-react";

import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { fitnessAreaDefaultData, SkeletonGymSection } from "@/constans";
import { fitness_area_store } from "@/stores/data_store";
import { isEmptyObj } from "@/utils";

const tab_list: Tab_list_type<Tab_fitness_type>[] = [
  { key: "gym", category: "Тренажёрный зал" },
  { key: "training_room", category: "Зал групповых тренировок" },
  { key: "pool", category: "Спортивный бассейн" },
  { key: "cardio_room", category: "Зал кардио тренажёров" },
  { key: "martial_arts", category: "Зал единоборств" },
];

const fitnessAreaKeys = tab_list.map(({ key }) => key);

export const Fitness_area = observer(
  ({ tabs_store }: { tabs_store: Fitness_area_tabs_type }) => {
    const { isActiveTab, change_tabs } = tabs_store;

    const { data } = fitness_area_store;

    const currentData = toJS(data?.[0])?.[isActiveTab];

    const {
      head,
      description,
      description_images,
      path,
      images_url: { webp, jpg },
    } = currentData ?? fitnessAreaDefaultData;

    return (
      <section className="py-12">
        <Container>
          <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">
            <span className="text-customHeadDecor">Зоны</span> фитнес клуба
          </Title>
          <Tabs
            currentStore={{ ...fitness_area_store, data: fitnessAreaKeys }}
            isActiveTab={isActiveTab}
            change_tabs={change_tabs}
            tab_list={tab_list}
          />
          <ContentLoader
            currentStore={fitness_area_store}
            skeletonComponent={SkeletonGymSection}
            isEmpty={!currentData || isEmptyObj(data?.[0], fitnessAreaKeys)}
            initialVisibleCount={1}
          >
            <div className="gap-x-6 pt-4 md:flex md:items-center md:*:w-[50%]">
              <div className="mb-10 w-full">
                <Title className="mb-3 text-customHeadDecor xl:text-2xl 2xl:text-3xl">
                  {head}
                </Title>
                <p className="mb-7 text-lg 2xl:text-2xl 3xl:text-3xl">
                  {description}
                </p>
                <Button asChild>
                  <Link to={`/services/${path}`}>
                    Подробнее <IconMessageCircleQuestion />
                  </Link>
                </Button>
              </div>
              <picture>
                <source srcSet={jpg} type="image/webp" />
                <img
                  className="m-auto h-[299px] overflow-hidden rounded-3xl object-cover 2xl:h-[500px] 2xl:w-full"
                  width={525}
                  src={jpg}
                  alt={description_images}
                  aria-label={description_images}
                  loading="lazy"
                />
              </picture>
            </div>
          </ContentLoader>
        </Container>
      </section>
    );
  },
);
