import { Container, Tabs, Team_list, Title } from "components";

import { observer } from "mobx-react-lite";

import { sizeTitleData } from "@/constans";
import { useGetResponsiveValue } from "@/utils";

const team_tab_list = [
  { key: "gym", category: "Тренажёрный зал" },
  { key: "martial_arts", category: "Единоборства" },
  { key: "group_training", category: "Групповые тренировки" },
  { key: "pool", category: "Бассейн" },
];

export const Team = observer(
  ({ tabs_store }: { tabs_store: Team_key_type }) => {
    if (!tabs_store) return null;
    const size = useGetResponsiveValue<TitleSize>("md", sizeTitleData);
    const { isActiveTab, change_tabs } = tabs_store;

    if (!team_tab_list || team_tab_list.length === 0 || !change_tabs)
      return null;

    return (
      <section className="py-12">
        <Container>
          <Title fontSize={size} className="mb-4 lg:mb-8 3xl:mb-12">
            Команда
          </Title>
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
