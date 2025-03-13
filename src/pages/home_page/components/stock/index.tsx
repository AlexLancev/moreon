import { Stock_list } from "components";

export const Stock = () => {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="mb-10">Акции</h2>
        <Stock_list />
      </div>
    </section>
  );
};
