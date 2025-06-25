import { Link } from "react-router-dom";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { MessageCircleQuestion } from "lucide-react";
import xss from "xss";

import { Tabs } from "components";

import { childrens_swimming_store } from "@/stores/data_store";
import { isEmptyObj } from "@/utils";
import { Button } from "@/components/ui/button";

const childrens_swimming_list = [
  { key: "infant_swimming", category: "Грудничковое плавание" },
  { key: "childrens_swimming", category: "Детское плавание" },
  { key: "school_competitive_swimming", category: "Спортивное плавание" },
];

export const Childrens_swimming_tabs = observer(
  ({ tabs_store }: { tabs_store: Childrens_swimming_tabs_type }) => {
    const { isActiveTab, change_tabs } = tabs_store;
    const { data, isLoading, isError } = childrens_swimming_store;

    const childrens_swimming_bd = toJS(data?.[0]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: Failed to fetch data</div>;

    if (
      !childrens_swimming_store ||
      !childrens_swimming_bd ||
      isEmptyObj(childrens_swimming_bd) ||
      !childrens_swimming_list ||
      childrens_swimming_list.length === 0
    )
      return null;

    const current_data = childrens_swimming_bd[isActiveTab] ?? {};

    if (!current_data) return null;

    const { head, description, image_description, path, images_url } =
      current_data;

    const sanitized_description = xss(description);

    return (
      <div className="py-4">
        <Tabs
          isActiveTab={isActiveTab}
          change_tabs={change_tabs}
          tab_list={childrens_swimming_list}
        />
        <div className="flex items-center justify-between gap-x-12 py-3">
          <div className="w-full max-w-[725px]">
            <strong className="block mb-5">{head}</strong>
            <div
              className="mb-5 ab"
              dangerouslySetInnerHTML={{ __html: sanitized_description }}
            ></div>
            <Button asChild>
              <Link to={`/services/${path}`}>
                Подробнее <MessageCircleQuestion />
              </Link>
            </Button>
          </div>
          <picture>
            <source srcSet={images_url?.webp} type="image/webp" />
            <img
              width={525}
              height={350}
              className="object-cover rounded-3xl overflow-hidden"
              src={images_url?.jpg}
              alt={image_description}
              aria-label={image_description}
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    );
  },
);
