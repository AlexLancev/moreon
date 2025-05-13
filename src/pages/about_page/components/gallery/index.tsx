import { Container, Gallery_list } from "components";

export const Gallery = () => {
  return (
    <section className="py-12">
      <Container>
        <h2 className="mb-10">Фотогалерея</h2>
        <Gallery_list />
      </Container>
    </section>
  );
};
