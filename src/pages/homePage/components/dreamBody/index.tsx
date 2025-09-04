import { Container, Title, TypesServices } from "components";

export const DreamBody = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">
          Создай тело мечты вместе
          <span className="text-customHeadDecor"> с Moreon Fitness</span>
        </Title>
        <TypesServices />
      </Container>
    </section>
  );
};
