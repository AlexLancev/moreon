import { Container, Tabs, Team_list, Title } from "components";
import { observer } from "mobx-react-lite";

import { team_store } from "@/stores/data_store";

const team_tab_list: Tab_list_type<Team_tab_key_type>[] = [
  { key: "gym", category: "Тренажёрный зал" },
  { key: "martial_arts", category: "Единоборства" },
  { key: "group_training", category: "Групповые тренировки" },
  { key: "pool", category: "Бассейн" },
];

const teamTabListKeys = team_tab_list.map(({ key }) => key);

export const Team = observer(
  ({ tabs_store }: { tabs_store: Team_key_type }) => {
    if (!tabs_store) return null;
    const { isActiveTab, change_tabs } = tabs_store;

    if (!change_tabs) return null;

    return (
      <section className="py-12">
        <Container>
          <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">Команда</Title>
          <Tabs
            currentStore={{ ...team_store, data: teamTabListKeys }}
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
