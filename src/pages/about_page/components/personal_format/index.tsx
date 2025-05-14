import { Personal_format_tabs } from "./components/personal_format_tabs";

import { Container, Title } from "@/components";

const personal_format_data_key: Personal_format_key_type[] = [
  "gym",
  "group_training",
  "childrens_programs",
  "beauty_health",
  "authors_programs",
];

export type tabs_store_type = {
  tabs_store: {
    isActiveTab: string;
    change_tabs: (value: string) => void;
  };
};

export const Personal_format = ({ tabs_store }: tabs_store_type) => {
  return (
    <section className="py-12">
      <Container>
        <Title>
          <span className="head_decor">Формат,</span> который подойдет именно
          Вам
        </Title>
        <Personal_format_tabs
          tabs_store={tabs_store}
          data_key={personal_format_data_key}
        />
      </Container>
    </section>
  );
};
