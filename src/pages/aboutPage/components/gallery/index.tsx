import { Container, GalleryList, Title } from "components";

export const Gallery = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">Фотогалерея</Title>
        <GalleryList />
      </Container>
    </section>
  );
};
