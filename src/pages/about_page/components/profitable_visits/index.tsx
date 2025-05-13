import { Container, Profitable_list } from "components";

export const Profitable_visits = () => {
  return (
    <section className="py-12">
      <Container>
        <h2 className="mb-10">
          Выгоды посещения <span className="head_decor">фитнес клуба</span>
        </h2>
        <Profitable_list />
      </Container>
    </section>
  );
};
