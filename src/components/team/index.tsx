import { Container, Tabs, TeamList, Title } from "components";
import { observer } from "mobx-react-lite";

import { defaultConfigTabList } from "@/constans";
import { teamStore } from "@/stores/dataStore";
import { createTabListConfig } from "@/utils";

const { TAB_LIST, TAB_LIST_KEYS } =
  createTabListConfig<TeamTabKeyType>(
    [
      { key: "gym", category: "Тренажёрный зал" },
      { key: "martialArts", category: "Единоборства" },
      { key: "groupTraining", category: "Групповые тренировки" },
      { key: "pool", category: "Бассейн" },
    ] as const,
    "Team",
  ) ?? defaultConfigTabList;

export const Team = observer(
  ({ tabsStore }: { tabsStore: TabType<TeamTabKeyType> }) => {
    if (!tabsStore) return null;
    const { isActiveTab, changeTabs } = tabsStore;

    if (!changeTabs) return null;

    return (
      <section className="py-12">
        <Container>
          <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">Команда</Title>
          <Tabs
            currentStore={{ ...teamStore, data: TAB_LIST_KEYS }}
            isActiveTab={isActiveTab}
            changeTabs={changeTabs}
            tabList={TAB_LIST}
          />
          <TeamList isActiveTab={isActiveTab} />
        </Container>
      </section>
    );
  },
);
