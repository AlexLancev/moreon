import { Container, News_list } from "components";

export const Club_news = () => {
  return (
    <section className="py-12">
      <Container>
        <h2 className="mb-10">
          <span className="head_decor">Новости</span> фитнес клуба
        </h2>
        <News_list />
      </Container>
    </section>
  );
};
