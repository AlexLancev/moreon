import { News_list } from "components";

export const Club_news = () => {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="mb-10">
          <span className="head_decor">Новости</span> фитнес клуба
        </h2>
        <News_list />
      </div>
    </section>
  );
};
