import { Container, EveryCard, NewsList, Title } from "@/components";

const NewsPage = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-3 md:mb-6 lg:mb-8 2xl:mb-12">
          <span className="text-customHeadDecor">Новости</span> клуба
        </Title>
        <NewsList />
        <EveryCard />
      </Container>
    </section>
  );
};

export default NewsPage;
