import { Container, Title } from "@/components";

import { PersonalFormatTabs } from "./components/personalFormatTabs";

const personalFormatDataKey: PersonalFormatKeyType[] = [
  "gym",
  "groupTraining",
  "childrensPrograms",
  "beautyHealth",
  "authorsPrograms",
];

export type tabsStoreType<K> = {
  isActiveTab: K;
  changeTabs: (value: K) => void;
};

export const PersonalFormat = ({
  tabsStore,
}: {
  tabsStore: tabsStoreType<PersonalFormatKeyType>;
}) => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-3 md:mb-6 lg:mb-8 2xl:mb-12">
          <span className="text-customHeadDecor">Формат,</span> который подойдет
          именно Вам
        </Title>
        <PersonalFormatTabs
          tabsStore={tabsStore}
          dataKey={personalFormatDataKey}
        />
      </Container>
    </section>
  );
};
