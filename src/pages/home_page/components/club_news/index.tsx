import { Container, News_list, Title } from "components";

export const Club_news = () => {
  return (
    <section className="py-12">
      <Container>
        <Title>
          <span className="head_decor">Новости</span> фитнес клуба
        </Title>
        <News_list />
      </Container>
    </section>
  );
};
