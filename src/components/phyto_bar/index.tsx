import { Performance } from "components";

const phyto_bar_data_key = ["cafe_restaurant"];

export const Phyto_bar = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-10">
          Фито <span className="head_decor">бар</span>
        </h2>
        <Performance data_key={phyto_bar_data_key} isVisibleBtn={true} />
      </div>
    </section>
  );
};
