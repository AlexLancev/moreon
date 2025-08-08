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
import { childrens_swimming_store } from "@/stores/data_store";
import { isEmptyObj } from "@/utils";

const childrens_swimming_list: Tab_list_type<Childrens_swimming_key_type>[] = [
  { key: "infant_swimming", category: "Грудничковое плавание" },
  { key: "childrens_swimming", category: "Детское плавание" },
  { key: "school_competitive_swimming", category: "Спортивное плавание" },
];

const childrensSwimmingKeys = childrens_swimming_list.map(({ key }) => key);

export const Childrens_swimming_tabs = observer(
  ({ tabs_store }: { tabs_store: Childrens_swimming_tabs_type }) => {
    const { isActiveTab, change_tabs } = tabs_store;
    const { data } = childrens_swimming_store;

    const current_data = toJS(data?.[0])?.[isActiveTab];

    const { head, description, image_description, path, images_url } =
      current_data ?? childrensSwimmingDefaultData;

    const sanitized_description = xss(description);

    return (
      <div className="py-4">
        <Tabs
          currentStore={{
            ...childrens_swimming_store,
            data: childrensSwimmingKeys,
          }}
          isActiveTab={isActiveTab}
          change_tabs={change_tabs}
          tab_list={childrens_swimming_list}
        />
        <ContentLoader
          currentStore={childrens_swimming_store}
          skeletonComponent={SkeletonBabySwimmingSection}
          isEmpty={
            !current_data || isEmptyObj(data?.[0], childrensSwimmingKeys)
          }
          initialVisibleCount={1}
        >
          <div className="py-3 lg:flex lg:items-center lg:justify-evenly lg:gap-x-12">
            <picture className="flex-shrink-0">
              <source srcSet={images_url?.webp} type="image/webp" />
              <img
                className="m-auto mb-8 overflow-hidden rounded-3xl object-cover xxs:float-left xxs:mb-4 xxs:mr-4 xxs:w-80 lg:m-auto lg:w-auto"
                src={images_url?.jpg}
                alt={image_description}
                aria-label={image_description}
                loading="lazy"
              />
            </picture>
            <div className="w-full">
              <strong className="mb-5 block">{head}</strong>
              {sanitized_description &&
                sanitized_description.trim().length !== 0 && (
                  <div
                    className="ab mb-5"
                    dangerouslySetInnerHTML={{ __html: sanitized_description }}
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
