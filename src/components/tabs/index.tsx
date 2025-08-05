import { useEffect } from "react";

import { cn } from "@/lib/utils";
import { ContentLoader } from "../contentLoader";
import { SkeletonTabsGrid } from "@/constans";
import { observer } from "mobx-react-lite";

type CurrentStoreType<T> = {
  data: T[] | null;
  isLoading: boolean;
  isError: null | boolean;
};

export type Tab_list_type = {
  key: string;
  category: string;
};

export type Tabs_type<T> = {
  isActiveTab: string;
  change_tabs: (value: string) => void;
  tab_list: Tab_list_type[];
  currentChangeTab?: string;
  className?: string;
  currentStore: CurrentStoreType<T>;
};

export const Tabs = observer(
  <T,>({
    isActiveTab,
    change_tabs,
    tab_list,
    currentChangeTab,
    className,
    currentStore,
  }: Tabs_type<T>) => {
    useEffect(() => {
      if (tab_list && tab_list.length > 0 && !isActiveTab) {
        change_tabs(tab_list[0]?.key);
      }
    }, [change_tabs, tab_list, isActiveTab]);

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
          {tab_list?.map(({ key, category }, idx: number) => {
            if (!key || !category) return null;

            return (
              <li key={idx} className="relative">
                <label className="hover:cursor-pointer">
                  <input
                    className="visually-hidden peer"
                    type="radio"
                    value={key}
                    onChange={() => change_tabs(key)}
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
