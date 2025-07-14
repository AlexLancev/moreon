import { Container, Title, Types_services } from "components";

export const Dream_body = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">
          Создай тело мечты вместе
          <span className="text-customHeadDecor"> с Moreon Fitness</span>
        </Title>
        <Types_services />
      </Container>
    </section>
  );
};
