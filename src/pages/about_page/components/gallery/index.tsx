import { Container, Gallery_list, Title } from "components";

export const Gallery = () => {
  return (
    <section className="py-12">
      <Container>
        <Title>Фотогалерея</Title>
        <Gallery_list />
      </Container>
    </section>
  );
};
