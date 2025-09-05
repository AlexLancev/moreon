import { MessageCircleQuestion as IconMessageCircleQuestion } from "lucide-react";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import xss from "xss";

import { Container, ContentLoader, Tabs, Title } from "@/components";
import {
  chooseYourCardDeafultData,
  defaultConfigTabList,
  SkeletonFitnessSection,
} from "@/constans";
import { clubCardsStore } from "@/stores/dataStore";

import { createTabListConfig, isEmptyObj } from "@/utils";

import { Button } from "../ui/button";

const { TAB_LIST, TAB_LIST_KEYS } =
  createTabListConfig<ClubCardsKeyType>(
    [
      { key: "fitnes", category: "Фитнес" },
      { key: "fitnesSpa", category: "Фитнес + СПА" },
      { key: "corporateCard", category: "Корпоративная карта" },
      { key: "flexible", category: "Гибкая" },
      { key: "premium", category: "Премиум" },
    ] as const,
    "ChooseYourCard",
  ) ?? defaultConfigTabList;

export const ChooseYourCard = observer(
  ({ tabsStore }: { tabsStore: ClubCardsTabsType }) => {
    const { isActiveTab, changeTabs } = tabsStore;
    const { data } = clubCardsStore;

    const currentData = toJS(data?.[0])?.[isActiveTab];
    const {
      imagesUrl: { webp, jpg },
      head,
      description,
      path,
    } = currentData ?? chooseYourCardDeafultData;

    return (
      <section className="py-12">
        <Container>
          <Title className="mb-4 lg:mb-8 3xl:mb-12">
            Выберите свою <span className="text-customHeadDecor">карту</span>
          </Title>

          <Tabs
            currentStore={{ ...clubCardsStore, data: TAB_LIST_KEYS }}
            isActiveTab={isActiveTab}
            changeTabs={changeTabs}
            tabList={TAB_LIST}
          />

          <ContentLoader
            currentStore={clubCardsStore}
            skeletonComponent={SkeletonFitnessSection}
            isEmpty={!currentData || isEmptyObj(data?.[0], TAB_LIST_KEYS)}
            initialVisibleCount={1}
          >
            <div className="py-5 lg:flex lg:items-center lg:justify-evenly lg:gap-x-10">
              <picture className="2xl:flex-shrink-0">
                <source srcSet={webp} type="image/webp" />
                <img
                  className="m-auto mb-10 lg:mb-0"
                  src={jpg}
                  alt=""
                  loading="lazy"
                  aria-hidden
                />
              </picture>
              <div className="w-full lg:max-w-[525px] 2xl:max-w-[825px]">
                <strong className="mb-3 block text-2xl text-white 2xl:text-4xl">
                  {head}
                </strong>
                {description && description.trim().length !== 0 && (
                  <div
                    className="customInsertCardPageHTML mb-5 text-lg 2xl:text-2xl 3xl:text-3xl"
                    dangerouslySetInnerHTML={{
                      __html: xss(description),
                    }}
                  ></div>
                )}
                <Button asChild>
                  <Link to={`/presentationCards/${path}`}>
                    Подробнее <IconMessageCircleQuestion />
                  </Link>
                </Button>
              </div>
            </div>
          </ContentLoader>
        </Container>
      </section>
    );
  },
);
