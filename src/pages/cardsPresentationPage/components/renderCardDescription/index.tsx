import { observer } from "mobx-react-lite";
import xss from "xss";

import { ContentLoader, Tabs } from "@/components";
import { defaultConfigTabList, SkeletonFitnessCard } from "@/constans";
import { clubCardsStore } from "@/stores/dataStore";
import { createTabListConfig } from "@/utils";

const { TAB_LIST, TAB_LIST_KEYS } =
  createTabListConfig<Exclude<PageDescriptionTypeKey, "all">>(
    [
      { key: "daytime", category: "Тариф 'Дневной'" },
      { key: "business", category: "Тариф 'Бизнес'" },
      { key: "weekend", category: "Тариф 'Выходного дня'" },
    ] as const,
    "RenderCardDescription",
  ) ?? defaultConfigTabList;

export const RenderCardDescription = observer(
  ({
    imagesUrl,
    pageDescription,
    tabsStore: { isActiveTab, changeTabs },
  }: RenderCardDescriptionProps) => {
    if (!pageDescription) return null;

    return (
      <section className="py-12">
        {Object.keys(pageDescription)?.length > 1 && (
          <div className="py-10">
            <Tabs
              currentStore={{
                ...clubCardsStore,
                data: TAB_LIST_KEYS,
              }}
              isActiveTab={isActiveTab}
              changeTabs={changeTabs}
              tabList={TAB_LIST}
            />
          </div>
        )}
        <ContentLoader
          currentStore={clubCardsStore}
          skeletonComponent={SkeletonFitnessCard}
          initialVisibleCount={1}
        >
          <div className="md:flex md:gap-10">
            <picture className="flex-shrink-0">
              <source srcSet={imagesUrl?.webp} type="image/webp" />
              <img
                src={imagesUrl?.jpg}
                className="m-auto mb-5 w-72 lg:w-96 xl:w-[600px]"
                alt=""
                loading="lazy"
                aria-hidden
              />
            </picture>
            <div
              className="customInsertCardPageHTML mb-5 max-w-[750px] 2xl:text-2xl"
              dangerouslySetInnerHTML={{
                __html: xss(
                  pageDescription.all ?? pageDescription[isActiveTab] ?? "",
                ),
              }}
            ></div>
          </div>
        </ContentLoader>
      </section>
    );
  },
);
