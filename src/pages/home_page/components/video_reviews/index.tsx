import { Container, Title, Video_reviews_list } from "components";

export const Video_reviews = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">Видео отзывы</Title>
        <Video_reviews_list />
      </Container>
    </section>
  );
};
