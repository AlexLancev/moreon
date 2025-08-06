import { Container, Title } from "@/components";

import { Personal_format_tabs } from "./components/personal_format_tabs";

const personal_format_data_key: Personal_format_key_type[] = [
  "gym",
  "group_training",
  "childrens_programs",
  "beauty_health",
  "authors_programs",
];

export type tabs_store_type<K> = {
  isActiveTab: K;
  change_tabs: (value: K) => void;
};

export const Personal_format = ({
  tabs_store,
}: {
  tabs_store: tabs_store_type<Personal_format_key_type>;
}) => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-3 md:mb-6 lg:mb-8 2xl:mb-12">
          <span className="text-customHeadDecor">Формат,</span> который подойдет
          именно Вам
        </Title>
        <Personal_format_tabs
          tabs_store={tabs_store}
          data_key={personal_format_data_key}
        />
      </Container>
    </section>
  );
};
