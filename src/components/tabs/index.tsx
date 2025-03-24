import { useEffect } from "react";

type Tabs_type = {
  isActiveTab: string;
  change_tabs: (value: string) => void;
  tab_list: string[];
};

export const Tabs = ({ isActiveTab, change_tabs, tab_list }: Tabs_type) => {
  useEffect(() => {
    if (tab_list && tab_list.length > 0) {
      change_tabs(tab_list[0]);
    }
  }, [change_tabs, tab_list]);

  return (
    <ul>
      {tab_list?.map((tab, idx: number) => (
        <li key={idx}>
          <label>
            <input
              type="radio"
              name="tabs"
              value={tab}
              onChange={() => change_tabs(tab)}
              checked={isActiveTab === tab}
            />
            {tab}
          </label>
        </li>
      ))}
    </ul>
  );
};
