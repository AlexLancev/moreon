import { Container, Every_card_list, Title } from "components";

export const Every_card = () => {
  return (
    <section className="py-12">
      <Container>
        <Title>
          В каждой <span className="head_decor">клубной карте</span>
        </Title>
        <Every_card_list />
      </Container>
    </section>
  );
};
