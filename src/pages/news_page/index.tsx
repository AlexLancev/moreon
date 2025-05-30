import { Container, Every_card, News_list, Title } from "@/components";

export const News_page = () => {
  return (
    <section className="py-12">
      <Container>
        <Title>
          <span className="head_decor">Новости</span> клуба
        </Title>
        <News_list />
        <Every_card />
      </Container>
    </section>
  );
};
