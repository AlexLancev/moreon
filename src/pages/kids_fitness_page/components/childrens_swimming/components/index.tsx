import { Tabs } from "components";
import { MessageCircleQuestion as IconMessageCircleQuestion } from "lucide-react";

import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import xss from "xss";

import { Button } from "@/components/ui/button";
import { childrens_swimming_store } from "@/stores/data_store";
import { isEmptyObj } from "@/utils";

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

    if (isLoading) return <div>Загрузка...</div>;
    if (isError) return <div>Ошибка: не удалось получить данные</div>;

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
            <div
              className="ab mb-5"
              dangerouslySetInnerHTML={{ __html: sanitized_description }}
            ></div>
            <Button asChild>
              <Link to={`/services/${path}`}>
                Подробнее <IconMessageCircleQuestion />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  },
);
