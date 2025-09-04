import { AboutUsList, Container, Title } from "components";

export const AboutUs = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">
          Почему стоит <span className="text-customHeadDecor">выбрать нас</span>
        </Title>
        <AboutUsList />
      </Container>
    </section>
  );
};
