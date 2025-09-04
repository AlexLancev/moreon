import { Container, StockList, Title } from "components";

export const Stock = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">Акции клуба</Title>
        <StockList />
      </Container>
    </section>
  );
};
