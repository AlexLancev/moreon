import { Container, Video_reviews_list } from "components";

export const Video_reviews = () => {
  return (
    <section className="py-12">
      <Container>
        <h2 className="mb-10">Видео отзывы</h2>
        <Video_reviews_list />
      </Container>
    </section>
  );
};
