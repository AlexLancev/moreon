import { Container, Every_card, News_list, Title } from "@/components";

const News_page = () => {
  return (
    <section className="py-12">
      <Container>
        <Title>
          <span className="text-customHeadDecor">Новости</span> клуба
        </Title>
        <News_list />
        <Every_card />
      </Container>
    </section>
  );
};

export default News_page;
