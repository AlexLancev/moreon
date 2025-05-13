import { Container, Stock_list } from "components";

export const Stock = () => {
  return (
    <section className="py-12">
      <Container>
        <h2 className="mb-10">Акции клуба</h2>
        <Stock_list />
      </Container>
    </section>
  );
};
