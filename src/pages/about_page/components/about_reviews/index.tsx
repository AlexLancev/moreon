import { Container, Reviews_list, Title } from "components";

export const About_reviews = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">Отзывы</Title>
        <Reviews_list />
      </Container>
    </section>
  );
};
