import { Container, Tabs, Team_list } from "components";
import { observer } from "mobx-react-lite";

const team_tab_list = [
  { key: "gym", category: "Тренажёрный зал" },
  { key: "martial_arts", category: "Единоборства" },
  { key: "group_training", category: "Групповые тренировки" },
  { key: "pool", category: "Бассейн" },
];

export const Team = observer(
  ({ tabs_store }: { tabs_store: Team_key_type }) => {
    if (!tabs_store) return null;

    const { isActiveTab, change_tabs } = tabs_store;

    if (!team_tab_list || team_tab_list.length === 0 || !change_tabs)
      return null;

    return (
      <section className="py-12">
        <Container>
          <h2 className="mb-10">Команда</h2>
          <Tabs
            isActiveTab={isActiveTab}
            change_tabs={change_tabs}
            tab_list={team_tab_list}
          />
          <Team_list isActiveTab={isActiveTab} />
        </Container>
      </section>
    );
  },
);
