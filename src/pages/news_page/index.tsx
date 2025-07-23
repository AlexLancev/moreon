import { Container, Every_card, News_list, Title } from "@/components";

const News_page = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-3 md:mb-6 lg:mb-8 2xl:mb-12">
          <span className="text-customHeadDecor">Новости</span> клуба
        </Title>
        <News_list />
        <Every_card />
      </Container>
    </section>
  );
};

export default News_page;
