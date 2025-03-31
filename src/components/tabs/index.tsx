import { useEffect } from "react";

export type Tab_list_type = {
  key: string;
  category: string;
};

type Tabs_type = {
  isActiveTab: string;
  change_tabs: (value: string) => void;
  tab_list: Tab_list_type[];
};

export const Tabs = ({ isActiveTab, change_tabs, tab_list }: Tabs_type) => {
  useEffect(() => {
    if (tab_list && tab_list.length > 0) {
      change_tabs(tab_list[0]?.key);
    }
  }, [change_tabs, tab_list]);

  return (
    <ul className="flex items-center flex-wrap gap-2 mb-8">
      {tab_list?.map(({ key, category }, idx: number) => (
        <li key={idx}>
          <label className="tabs_label">
            <input className="visually-hidden" type="radio" name="tabs" value={key} onChange={() => change_tabs(key)} checked={isActiveTab === key} />
            <span>{category}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
