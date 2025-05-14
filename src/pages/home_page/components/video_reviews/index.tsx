import { Container, Title, Video_reviews_list } from "components";

export const Video_reviews = () => {
  return (
    <section className="py-12">
      <Container>
        <Title>Видео отзывы</Title>
        <Video_reviews_list />
      </Container>
    </section>
  );
};
