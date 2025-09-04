import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { SkeletonTabsGrid } from "@/constans";
import { cn } from "@/lib/utils";

import { ContentLoader } from "../contentLoader";

export const Tabs = observer(
  <T, K>({
    isActiveTab,
    changeTabs,
    tabList,
    className,
    currentStore,
  }: TabsType<T, K>) => {
    useEffect(() => {
      if (tabList && tabList.length > 0 && !isActiveTab) {
        changeTabs(tabList[0]?.key);
      }
    }, [changeTabs, tabList, isActiveTab]);

    return (
      <ul
        className={cn(
          "customScrollBar relative mb-8 flex items-center gap-x-2 overflow-x-auto pb-8 pt-3",
          className,
        )}
      >
        <ContentLoader
          currentStore={currentStore}
          skeletonComponent={SkeletonTabsGrid}
          initialVisibleCount={5}
        >
          {tabList?.map(({ key, category }, idx: number) => {
            if (!key || !category) return null;

            return (
              <li key={idx} className="relative">
                <label className="hover:cursor-pointer">
                  <input
                    className="visually-hidden peer"
                    type="radio"
                    value={String(key)}
                    onChange={() => changeTabs(key)}
                    checked={isActiveTab === key}
                  />
                  <span className="whitespace-nowrap rounded-xl border border-transparent bg-[rgb(42,54,53)] px-4 py-2.5 text-sm text-white transition-colors duration-300 hover:bg-[rgba(42,54,53,0.5)] peer-checked:cursor-default peer-checked:border peer-checked:border-[rgb(42,54,53)] peer-checked:bg-[rgba(42,54,53,0.3)] md:text-base xl:text-xl 2xl:text-2xl">
                    {category}
                  </span>
                </label>
              </li>
            );
          })}
        </ContentLoader>
      </ul>
    );
  },
);
