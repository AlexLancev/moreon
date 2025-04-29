import { Profitable_list } from "components";

export const Profitable_visits = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-10">
          Выгоды посещения <span className="head_decor">фитнес клуба</span>
        </h2>
        <Profitable_list />
      </div>
    </section>
  );
};
