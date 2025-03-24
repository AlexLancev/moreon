import { Tabs, Team_list } from "components";
import { Tab_type } from "components/team_list";
import { observer } from "mobx-react-lite";
import { tabs_store } from "stores";

const team_tab_list: Tab_type[] = [
  "martial_arts",
  "gym",
  "group_training",
  "pool",
];

export const Team = observer(() => {
  const { isActiveTab, change_tabs } = tabs_store;

  if (!team_tab_list || team_tab_list.length === 0) return null;

  return (
    <section>
      <div className="container">
        <h2>Команда</h2>
        <Tabs
          isActiveTab={isActiveTab as Tab_type}
          change_tabs={change_tabs}
          tab_list={team_tab_list}
        />
        <Team_list isActiveTab={isActiveTab as Tab_type} />
      </div>
    </section>
  );
});
