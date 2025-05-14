import { Container, Title, Types_services } from "components";

export const Dream_body = () => {
  return (
    <section className="py-12">
      <Container>
        <Title size="xl">
          Создай тело мечты вместе
          <span className="head_decor"> с Moreon Fitness</span>
        </Title>
        <Types_services />
      </Container>
    </section>
  );
};
