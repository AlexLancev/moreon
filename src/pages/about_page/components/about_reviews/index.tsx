import { Container, Reviews_list } from "components";

export const About_reviews = () => {
  return (
    <section className="py-12">
      <Container>
        <h2 className="mb-10">Отзывы</h2>
        <Reviews_list />
      </Container>
    </section>
  );
};
