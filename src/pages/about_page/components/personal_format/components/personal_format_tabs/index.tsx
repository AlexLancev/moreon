import { ContentLoader, Tabs } from "components";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import { SkeletonTabsGrid } from "@/constans";
import { cn } from "@/lib/utils";
import { personal_format_store } from "@/stores/data_store";
import { isEmptyObj } from "@/utils";

export const Personal_format_tabs = observer(
  ({ data_key, tabs_store, className }: Personal_format_tabs_type) => {
    const { isActiveTab, change_tabs } = tabs_store;
    const [currentChangeTab, setCurrentChangeTab] =
      useState<Personal_format_key_type>("gym");

    const { data, isLoading } = personal_format_store;

    const currentStoreObj = {
      data: toJS(data?.[0]) ? Object.keys(toJS(data?.[0])) : null,
      isLoading: toJS(personal_format_store).isLoading,
      isError: toJS(personal_format_store).isError,
    };

    console.log(isActiveTab);

    console.log(
      toJS(data?.[0])?.[currentChangeTab]?.key_list?.[isActiveTab]?.description,
    );

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
            isEmpty={!toJS(data?.[0]) || isEmptyObj(toJS(data?.[0]), data_key)}
            getSkeletonClassName="h-16 w-[19%]"
          >
            {data_key.map((key, idx: number) => {
              const currentData = toJS(data?.[0])?.[key];
              if (!currentData) return null;

              const { key_name, category } = currentData;

              if (!category) return null;

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
                        change_tabs(
                          toJS(data?.[0])?.[key_name]?.tab_list?.[0]?.key || "",
                        );
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
            currentStore={currentStoreObj}
            currentChangeTab={currentChangeTab}
            isActiveTab={isActiveTab}
            change_tabs={change_tabs}
            tab_list={toJS(data?.[0])?.[currentChangeTab]?.tab_list}
            className="lg:flex-wrap lg:gap-y-8"
          />
          {toJS(data?.[0])?.[currentChangeTab]?.key_list?.[isActiveTab]
            ?.description && (
            <p className="lg:text-xl 2xl:text-2xl 3xl:text-3xl">
              {
                toJS(data?.[0])?.[currentChangeTab]?.key_list?.[isActiveTab]
                  ?.description
              }
            </p>
          )}
        </div>
      </>
    );
  },
);
