import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useQuery } from "@tanstack/react-query";
import xss from "xss";

import { Tabs } from "components";

import { childrens_swimming_data } from "@/data";
import { childrens_swimming_store } from "@/stores/data_store";
import { isEmptyObj } from "@/utils";

const childrens_swimming_list = [
  { key: "infant_swimming", category: "Грудничковое плавание" },
  { key: "early_swimming", category: "Ранее плавание" },
  { key: "childrens_swimming", category: "Детское плавание" },
  { key: "competitive_swimming", category: "Спортивное плавание" },
];

export const Childrens_swimming_tabs = observer(
  ({ tabs_store }: { tabs_store: Childrens_swimming_tabs_type }) => {
    const { isActiveTab, change_tabs } = tabs_store;
    const { data, isLoading, error } = useQuery({
      queryKey: ["childrens_swimming"],
      queryFn: childrens_swimming_data,
    });

    useEffect(() => {
      if (data) {
        childrens_swimming_store.set_data(data);
      }
    }, [data]);

    const childrens_swimming_bd = toJS(
      childrens_swimming_store?.data?.[0]?.data,
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: Failed to fetch data</div>;

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
            <Link
              to={path}
              className="inline-flex will-change-transform text-white py-4 px-7 mt-10 m-auto 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
            >
              Подробнее
            </Link>
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
            />
          </picture>
        </div>
      </div>
    );
  },
);
