import { Container, ReviewsList, Title } from "components";

export const AboutReviews = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">Отзывы</Title>
        <ReviewsList />
      </Container>
    </section>
  );
};
