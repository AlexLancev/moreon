import { useState } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

import { Tabs } from "components";

import { isEmptyObj } from "@/utils";
import { personal_format_store } from "@/stores/data_store";

export const Personal_format_tabs = observer(
  ({ data_key, tabs_store }: Personal_format_tabs_type) => {
    const { isActiveTab, change_tabs } = tabs_store;
    const [currentChangeTab, setCurrentChangeTab] =
      useState<Personal_format_key_type>("gym");

    const { data, isLoading, isError } = personal_format_store;

    const personal_format_bd = toJS(data?.[0]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: Failed to fetch data</div>;

    if (
      !personal_format_store ||
      !personal_format_bd ||
      isEmptyObj(personal_format_bd) ||
      !data_key ||
      data_key.length === 0
    )
      return null;

    const current_data = personal_format_bd[currentChangeTab];
    if (!current_data) return null;

    const { tab_list, key_list } = current_data;

    return (
      <div>
        <ul className="flex flex-wrap">
          {data_key.map((key, idx: number) => {
            const currentData = personal_format_bd[key];
            if (!currentData) return null;

            const { key_name, category } = currentData;

            if (!category) return null;

            return (
              <li key={idx} className="w-[20%] text-center">
                <label className="personal_tabs">
                  <input
                    className="visually-hidden peer"
                    type="radio"
                    value={key_name}
                    onChange={() => setCurrentChangeTab(key_name)}
                    checked={currentChangeTab === key}
                  />
                  <span className="block h-full cursor-pointer rounded-t-3xl px-8 py-5 text-[rgba(255,255,255,0.7)] transition-colors duration-300 hover:text-[rgba(255,255,255,1)] peer-checked:cursor-default peer-checked:bg-[rgba(255,255,255,4%)] peer-checked:text-white">
                    {category}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
        <div className="min-h-[260px] rounded-b-3xl bg-[rgba(255,255,255,4%)] px-10 py-14">
          <Tabs
            currentChangeTab={currentChangeTab}
            isActiveTab={isActiveTab}
            change_tabs={change_tabs}
            tab_list={tab_list}
          />
          <p>{key_list?.[isActiveTab]?.description}</p>
        </div>
      </div>
    );
  },
);
