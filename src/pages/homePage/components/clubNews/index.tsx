import { Container, NewsList, Title } from "components";

export const ClubNews = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">
          <span className="text-customHeadDecor">Новости</span> фитнес клуба
        </Title>
        <NewsList />
      </Container>
    </section>
  );
};
