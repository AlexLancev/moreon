import { Team_list } from "components";

export const Team = () => {
  return (
    <section>
      <div className="container">
        <h2>Команда</h2>
        <Tabs />
        <Team_list />
      </div>
    </section>
  );
};
