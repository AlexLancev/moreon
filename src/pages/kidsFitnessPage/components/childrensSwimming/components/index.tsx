import { ContentLoader, Tabs } from "components";
import { MessageCircleQuestion as IconMessageCircleQuestion } from "lucide-react";

import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import xss from "xss";

import { Button } from "@/components/ui/button";
import {
  childrensSwimmingDefaultData,
  SkeletonBabySwimmingSection,
} from "@/constans";
import { childrensSwimmingStore } from "@/stores/dataStore";
import { isEmptyObj } from "@/utils";

const childrensSwimmingList: TabListType<ChildrensSwimmingKeyType>[] = [
  { key: "infantSwimming", category: "Грудничковое плавание" },
  { key: "childrensSwimming", category: "Детское плавание" },
  { key: "schoolCompetitiveSwimming", category: "Спортивное плавание" },
];

const childrensSwimmingKeys = childrensSwimmingList.map(({ key }) => key);

export const ChildrensSwimmingTabs = observer(
  ({ tabsStore }: { tabsStore: ChildrensSwimmingTabsType }) => {
    const { isActiveTab, changeTabs } = tabsStore;
    const { data } = childrensSwimmingStore;

    const currentData = toJS(data?.[0])?.[isActiveTab];

    const { head, description, imageDescription, path, imagesUrl } =
      currentData ?? childrensSwimmingDefaultData;

    const sanitizedDescription = xss(description);

    return (
      <div className="py-4">
        <Tabs
          currentStore={{
            ...childrensSwimmingStore,
            data: childrensSwimmingKeys,
          }}
          isActiveTab={isActiveTab}
          changeTabs={changeTabs}
          tabList={childrensSwimmingList}
        />
        <ContentLoader
          currentStore={childrensSwimmingStore}
          skeletonComponent={SkeletonBabySwimmingSection}
          isEmpty={!currentData || isEmptyObj(data?.[0], childrensSwimmingKeys)}
          initialVisibleCount={1}
        >
          <div className="py-3 lg:flex lg:items-center lg:justify-evenly lg:gap-x-12">
            <picture className="flex-shrink-0">
              <source srcSet={imagesUrl?.webp} type="image/webp" />
              <img
                className="m-auto mb-8 overflow-hidden rounded-3xl object-cover xxs:float-left xxs:mb-4 xxs:mr-4 xxs:w-80 lg:m-auto lg:w-auto"
                src={imagesUrl?.jpg}
                alt={imageDescription}
                aria-label={imageDescription}
                loading="lazy"
              />
            </picture>
            <div className="w-full">
              <strong className="mb-5 block">{head}</strong>
              {sanitizedDescription &&
                sanitizedDescription.trim().length !== 0 && (
                  <div
                    className="ab mb-5"
                    dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                  ></div>
                )}
              <Button asChild>
                <Link to={`/services/${path}`}>
                  Подробнее <IconMessageCircleQuestion />
                </Link>
              </Button>
            </div>
          </div>
        </ContentLoader>
      </div>
    );
  },
);
