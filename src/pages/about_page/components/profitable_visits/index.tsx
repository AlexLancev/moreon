import { Container, Profitable_list, Title } from "components";

export const Profitable_visits = () => {
  return (
    <section className="py-12">
      <Container>
        <Title>
          Выгоды посещения <span className="customHeadDecor">фитнес клуба</span>
        </Title>
        <Profitable_list />
      </Container>
    </section>
  );
};
