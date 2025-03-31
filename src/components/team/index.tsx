import { Tabs, Team_list } from "components";
import { type Tab_type } from "components/team_list";
import { observer } from "mobx-react-lite";
import { tabs_store_type } from "pages/about_page/components/personal_format";

const team_tab_list = [
  { key: "gym", category: "Тренажёрный зал" },
  { key: "martial_arts", category: "Единоборства" },
  { key: "group_training", category: "Групповые тренировки" },
  { key: "pool", category: "Бассейн" },
];

export const Team = observer(({ tabs_store }: tabs_store_type) => {
  const { isActiveTab, change_tabs } = tabs_store;

  if (!team_tab_list || team_tab_list.length === 0) return null;

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-10">Команда</h2>
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
