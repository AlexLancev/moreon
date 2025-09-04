import { Container, Tabs, TeamList, Title } from "components";
import { observer } from "mobx-react-lite";

import { teamStore } from "@/stores/dataStore";

const teamTabList: TabListType<TeamTabKeyType>[] = [
  { key: "gym", category: "Тренажёрный зал" },
  { key: "martialArts", category: "Единоборства" },
  { key: "groupTraining", category: "Групповые тренировки" },
  { key: "pool", category: "Бассейн" },
];

const teamTabListKeys = teamTabList.map(({ key }) => key);

export const Team = observer(({ tabsStore }: { tabsStore: TeamKeyType }) => {
  if (!tabsStore) return null;
  const { isActiveTab, changeTabs } = tabsStore;

  if (!changeTabs) return null;

  return (
    <section className="py-12">
      <Container>
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">Команда</Title>
        <Tabs
          currentStore={{ ...teamStore, data: teamTabListKeys }}
          isActiveTab={isActiveTab}
          changeTabs={changeTabs}
          tabList={teamTabList}
        />
        <TeamList isActiveTab={isActiveTab} />
      </Container>
    </section>
  );
});
