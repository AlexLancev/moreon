import { type personal_format_data_key_type, Personal_format_tabs } from "./components/personal_format_tabs";

const personal_format_data_key: personal_format_data_key_type[] = [
  "gym",
  "group_training",
  "childrens_programs",
  "beauty_health",
  "authors_programs",
];

export const Personal_format = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-10">
          <span className="head_decor">Формат,</span> который подойдет именно Вам
        </h2>
        <Personal_format_tabs data_key={personal_format_data_key} />
      </div>
    </section>
  );
};
