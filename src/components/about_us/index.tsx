import { About_us_list, Container, Title } from "components";

export const About_us = () => {
  return (
    <section className="py-12">
      <Container>
        <Title>
          Почему стоит <span className="head_decor">выбрать нас</span>
        </Title>
        <About_us_list />
      </Container>
    </section>
  );
};
