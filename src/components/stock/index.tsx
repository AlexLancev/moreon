import { Container, Stock_list, Title } from "components";

export const Stock = () => {
  return (
    <section className="py-12">
      <Container>
        <Title>Акции клуба</Title>
        <Stock_list />
      </Container>
    </section>
  );
};
