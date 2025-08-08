import { ContentLoader, Tabs } from "components";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import { SkeletonTabsGrid } from "@/constans";
import { cn } from "@/lib/utils";
import { personal_format_store } from "@/stores/data_store";
import { isEmptyObj } from "@/utils";

export const Personal_format_tabs = observer(
  ({
    data_key,
    tabs_store,
    className,
  }: Personal_format_tabs_type<Personal_format_key_type>) => {
    const { isActiveTab, change_tabs } = tabs_store;
    const [currentChangeTab, setCurrentChangeTab] =
      useState<Personal_format_key_type>("gym");

    const { data, isLoading } = personal_format_store;

    const currentData = toJS(data?.[0]);

    const description =
      currentData?.[currentChangeTab]?.key_list?.[isActiveTab]?.description;

    const tabList = currentData?.[currentChangeTab]?.tab_list;

    if (!data_key || data_key.length === 0) return null;

    return (
      <>
        <ul
          className={cn(
            "flex gap-0 overflow-x-auto",
            isLoading && "gap-4 overflow-hidden",
            className,
          )}
        >
          <ContentLoader
            currentStore={{ ...personal_format_store, data: data_key }}
            skeletonComponent={SkeletonTabsGrid}
            isEmpty={!currentData || isEmptyObj(currentData, data_key)}
            getSkeletonClassName="h-16 w-[19%]"
          >
            {data_key.map((key, idx: number) => {
              const currentKeyData = currentData?.[key];
              if (!currentKeyData) return null;

              const { key_name, category } = currentKeyData;
              const currentKey = currentData?.[key_name]?.tab_list?.[0]?.key;

              if (!category || !currentKey) return null;

              return (
                <li
                  key={idx}
                  className="relative text-center lg:w-[20%] xl:text-xl"
                >
                  <label className="personal_tabs">
                    <input
                      className="visually-hidden peer"
                      type="radio"
                      value={key_name}
                      onChange={() => {
                        setCurrentChangeTab(key_name);
                        change_tabs(currentKey);
                      }}
                      checked={currentChangeTab === key}
                    />
                    <span className="block h-full cursor-pointer whitespace-nowrap rounded-t-3xl p-4 text-[rgba(255,255,255,0.7)] transition-colors duration-300 hover:text-[rgba(255,255,255,1)] peer-checked:cursor-default peer-checked:bg-[rgba(255,255,255,4%)] peer-checked:text-white lg:p-6 3xl:p-8">
                      {category}
                    </span>
                  </label>
                </li>
              );
            })}
          </ContentLoader>
        </ul>
        <div
          className={cn(
            "rounded-b-3xl bg-[rgba(255,255,255,4%)] p-4 md:px-6 md:pb-6 xl:px-8",
            isLoading && "bg-transparent",
          )}
        >
          <Tabs
            currentStore={personal_format_store}
            currentChangeTab={currentChangeTab}
            isActiveTab={isActiveTab}
            change_tabs={change_tabs}
            tab_list={tabList}
            className="lg:flex-wrap lg:gap-y-8"
          />
          {description && description.trim().length !== 0 && (
            <p className="lg:text-xl 2xl:text-2xl 3xl:text-3xl">
              {description}
            </p>
          )}
        </div>
      </>
    );
  },
);
