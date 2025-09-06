import { Container, ContentLoader, Tabs, Title } from "components";
import { NotebookText as IconNotebookText } from "lucide-react";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

import {
  defaultConfigTabList,
  SkeletonBathAndPoolsSection,
  waterZoneDefaultData,
} from "@/constans";
import { modalStore } from "@/stores";
import { waterZoneStore } from "@/stores/dataStore";

import { createTabListConfig, isEmptyObj } from "@/utils";

import { Button } from "../ui/button";

const { TAB_LIST, TAB_LIST_KEYS } =
  createTabListConfig<WaterZoneKeyType>(
    [
      { key: "bathsSwimming", category: "Бани и бассейны" },
      { key: "sportsPool", category: "Спортивный бассейн" },
      { key: "spa", category: "СПА" },
      { key: "thermalBaths", category: "Термы" },
      { key: "goldfish", category: "Золотые рыбки" },
    ] as const,
    "WaterZone",
  ) ?? defaultConfigTabList;

export const WaterZone = observer(
  ({ tabsStore }: { tabsStore: TabType<WaterZoneKeyType> }) => {
    const { isActiveTab, changeTabs } = tabsStore;
    const { isVisibleModal, changeModal } = modalStore;

    const { data, isLoading } = waterZoneStore;

    const currentData = toJS(data?.[0])?.[isActiveTab];

    const {
      head,
      description,
      imagesUrl: { jpg },
      imagesDescription,
    } = currentData ?? waterZoneDefaultData;

    return (
      <section className="py-12">
        <Container>
          <div className="relative px-4 py-8 after:absolute after:inset-0 after:-z-10 after:bg-water-zone-gradient-custom lg:px-8 lg:py-12 2xl:px-12 2xl:py-16">
            {!isLoading && (
              <picture>
                <source
                  srcSet="/images/water_zone/result_zone_bg.webp"
                  type="image/webp"
                />
                <img
                  className="absolute inset-0 -z-10 h-full w-full overflow-hidden rounded-3xl object-cover"
                  src="/images/water_zone/result_zone_bg.jpeg"
                  alt=""
                  loading="lazy"
                  aria-hidden
                />
              </picture>
            )}
            <h2 className="visually-hidden">
              Откройте для себя мир релаксации и здоровья
            </h2>
            <Tabs
              isActiveTab={isActiveTab}
              currentStore={{ ...waterZoneStore, data: TAB_LIST_KEYS }}
              changeTabs={changeTabs}
              tabList={TAB_LIST}
            />
            <ContentLoader
              isEmpty={!currentData || isEmptyObj(data?.[0], TAB_LIST_KEYS)}
              currentStore={waterZoneStore}
              skeletonComponent={SkeletonBathAndPoolsSection}
              initialVisibleCount={1}
            >
              <div className="gap-x-5 pt-2 md:flex md:items-center md:justify-between xl:*:w-1/2">
                <div className="mb-14 w-full">
                  <Title className="mb-5 text-3xl">{head}</Title>
                  <p className="mb-8 text-lg xl:text-xl 2xl:text-2xl">
                    {description}
                  </p>
                  <Button onClick={() => changeModal(!isVisibleModal)}>
                    Записаться на гостевой визит <IconNotebookText />
                  </Button>
                </div>
                <picture>
                  <source srcSet={jpg} type="image/webp" />
                  <img
                    className="m-auto h-[250px] overflow-hidden rounded-3xl object-cover md:h-[300px] xl:h-[350px]"
                    width={525}
                    src={jpg}
                    alt={imagesDescription}
                    aria-label={imagesDescription}
                    loading="lazy"
                  />
                </picture>
              </div>
            </ContentLoader>
          </div>
        </Container>
      </section>
    );
  },
);
