import { About_us_list, Container, Title } from "components";

export const About_us = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">
          Почему стоит <span className="customHeadDecor">выбрать нас</span>
        </Title>
        <About_us_list />
      </Container>
    </section>
  );
};
