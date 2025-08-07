import { MessageCircleQuestion as IconMessageCircleQuestion } from "lucide-react";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import xss from "xss";

import { Container, ContentLoader, Tabs, Title } from "@/components";
import { chooseYourCardDeafultData, SkeletonFitnessSection } from "@/constans";
import { club_cards_store } from "@/stores/data_store";

import { isEmptyObj } from "@/utils";

import { Button } from "../ui/button";

const tab_list: Tab_list_type<Club_cards_key_type>[] = [
  { key: "fitnes", category: "Фитнес" },
  { key: "fitnes_spa", category: "Фитнес + СПА" },
  { key: "corporate_card", category: "Корпоративная карта" },
  { key: "flexible", category: "Гибкая" },
  { key: "premium", category: "Премиум" },
];

const chooseYourCardKeys = tab_list?.map(({ key }) => key);

export const Choose_your_card = observer(
  ({ tabs_store }: { tabs_store: Club_cards_tabs_type }) => {
    const { isActiveTab, change_tabs } = tabs_store;
    const { data } = club_cards_store;

    const currentData = toJS(data?.[0])?.[isActiveTab];
    const {
      images_url: { webp, jpg },
      head,
      description,
      path,
    } = currentData ?? chooseYourCardDeafultData;

    if (!chooseYourCardKeys || chooseYourCardKeys.length === 0) return null;

    return (
      <section className="py-12">
        <Container>
          <Title className="mb-4 lg:mb-8 3xl:mb-12">
            Выберите свою <span className="text-customHeadDecor">карту</span>
          </Title>

          <Tabs
            currentStore={{ ...club_cards_store, data: tab_list }}
            isActiveTab={isActiveTab}
            change_tabs={change_tabs}
            tab_list={tab_list}
          />

          <ContentLoader
            currentStore={club_cards_store}
            skeletonComponent={SkeletonFitnessSection}
            isEmpty={!currentData || isEmptyObj(data?.[0], chooseYourCardKeys)}
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
                <div
                  className="customInsertCardPageHTML mb-5 text-lg 2xl:text-2xl 3xl:text-3xl"
                  dangerouslySetInnerHTML={{
                    __html: xss(description),
                  }}
                ></div>
                <Button asChild>
                  <Link to={`/presentation_cards/${path}`}>
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
