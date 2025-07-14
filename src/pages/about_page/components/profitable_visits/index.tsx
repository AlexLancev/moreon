import { Container, Profitable_list, Title } from "components";

export const Profitable_visits = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">
          Выгоды посещения{" "}
          <span className="text-customHeadDecor">фитнес клуба</span>
        </Title>
        <Profitable_list />
      </Container>
    </section>
  );
};
