import { ContentLoader, Tabs } from "components";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import { SkeletonTabsGrid } from "@/constans";
import { cn } from "@/lib/utils";
import { personalFormatStore } from "@/stores/dataStore";
import { isEmptyObj } from "@/utils";

export const PersonalFormatTabs = observer(
  ({
    dataKey,
    tabsStore,
    className,
  }: PersonalFormatTabsType<PersonalFormatKeyType>) => {
    const { isActiveTab, changeTabs } = tabsStore;
    const [currentChangeTab, setCurrentChangeTab] =
      useState<PersonalFormatKeyType>("gym");

    const { data, isLoading } = personalFormatStore;

    const currentData = toJS(data?.[0]);

    const description =
      currentData?.[currentChangeTab]?.keyList?.[isActiveTab]?.description;

    const tabList = currentData?.[currentChangeTab]?.tabList;

    if (!dataKey || dataKey.length === 0) return null;

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
            currentStore={{ ...personalFormatStore, data: dataKey }}
            skeletonComponent={SkeletonTabsGrid}
            isEmpty={!currentData || isEmptyObj(currentData, dataKey)}
            getSkeletonClassName="h-16 w-[19%]"
          >
            {dataKey.map((key, idx: number) => {
              const currentKeyData = currentData?.[key];
              if (!currentKeyData) return null;

              const { keyName, category } = currentKeyData;
              const currentKey = currentData?.[keyName]?.tabList?.[0]?.key;

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
                      value={keyName}
                      onChange={() => {
                        setCurrentChangeTab(keyName);
                        changeTabs(currentKey);
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
            currentStore={personalFormatStore}
            currentChangeTab={currentChangeTab}
            isActiveTab={isActiveTab}
            changeTabs={changeTabs}
            tabList={tabList}
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
