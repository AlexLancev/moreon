import { Container, Every_card_list } from "components";

export const Every_card = () => {
  return (
    <section className="py-12">
      <Container>
        <h2 className="mb-10">
          В каждой <span className="head_decor">клубной карте</span>
        </h2>
        <Every_card_list />
      </Container>
    </section>
  );
};
