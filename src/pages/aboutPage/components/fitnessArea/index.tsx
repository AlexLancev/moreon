import { Container, ContentLoader, Tabs, Title } from "components";
import { MessageCircleQuestion as IconMessageCircleQuestion } from "lucide-react";

import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  defaultConfigTabList,
  fitnessAreaDefaultData,
  SkeletonGymSection,
} from "@/constans";
import { fitnessAreaStore } from "@/stores/dataStore";
import { createTabListConfig, isEmptyObj } from "@/utils";

const { TAB_LIST, TAB_LIST_KEYS } =
  createTabListConfig<TabFitnessType>(
    [
      { key: "gym", category: "Тренажёрный зал" },
      { key: "trainingRoom", category: "Зал групповых тренировок" },
      { key: "pool", category: "Спортивный бассейн" },
      { key: "cardioRoom", category: "Зал кардио тренажёров" },
      { key: "martialArts", category: "Зал единоборств" },
    ] as const,
    "FitnessArea",
  ) ?? defaultConfigTabList;

export const FitnessArea = observer(
  ({ tabsStore }: { tabsStore: TabType<TabFitnessType> }) => {
    const { isActiveTab, changeTabs } = tabsStore;

    const { data } = fitnessAreaStore;

    const currentData = toJS(data?.[0])?.[isActiveTab];

    const {
      head,
      description,
      descriptionImages,
      path,
      imagesUrl: { jpg },
    } = currentData ?? fitnessAreaDefaultData;

    return (
      <section className="py-12">
        <Container>
          <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">
            <span className="text-customHeadDecor">Зоны</span> фитнес клуба
          </Title>
          <Tabs
            currentStore={{ ...fitnessAreaStore, data: TAB_LIST_KEYS }}
            isActiveTab={isActiveTab}
            changeTabs={changeTabs}
            tabList={TAB_LIST}
          />
          <ContentLoader
            currentStore={fitnessAreaStore}
            skeletonComponent={SkeletonGymSection}
            isEmpty={!currentData || isEmptyObj(data?.[0], TAB_LIST_KEYS)}
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
                  alt={descriptionImages}
                  aria-label={descriptionImages}
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
