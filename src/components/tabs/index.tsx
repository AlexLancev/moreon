import { useEffect } from "react";

export type Tab_list_type = {
  key: string;
  category: string;
};

export type Tabs_type = {
  isActiveTab: string;
  change_tabs: (value: string) => void;
  tab_list: Tab_list_type[];
  currentChangeTab?: string;
};

export const Tabs = ({
  isActiveTab,
  change_tabs,
  tab_list,
  currentChangeTab,
}: Tabs_type) => {
  useEffect(() => {
    if (tab_list && tab_list.length > 0) {
      change_tabs(tab_list[0]?.key);
    }
  }, [currentChangeTab]);

  if (!tab_list || tab_list.length === 0) return null;

  return (
    <ul className="flex items-center flex-wrap gap-x-2 gap-y-6 mb-8">
      {tab_list?.map(({ key, category }, idx: number) => {
        if (!key || !category) return null;

        return (
          <li key={idx}>
            <label className="tabs_label">
              <input
                className="visually-hidden"
                type="radio"
                value={key}
                onChange={() => change_tabs(key)}
                checked={isActiveTab === key}
              />
              <span>{category}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
