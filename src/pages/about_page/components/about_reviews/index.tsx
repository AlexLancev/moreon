import { Container, Reviews_list, Title } from "components";

export const About_reviews = () => {
  return (
    <section className="py-12">
      <Container>
        <Title>Отзывы</Title>
        <Reviews_list />
      </Container>
    </section>
  );
};
