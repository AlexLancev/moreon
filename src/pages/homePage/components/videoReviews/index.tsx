import { Container, Title, VideoReviewsList } from "components";

export const VideoReviews = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">Видео отзывы</Title>
        <VideoReviewsList />
      </Container>
    </section>
  );
};
