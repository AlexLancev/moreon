import { Every_card_list } from "components";

export const Every_card = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-10">
          В каждой <span className="head_decor">клубной карте</span>
        </h2>
        <Every_card_list />
      </div>
    </section>
  );
};
