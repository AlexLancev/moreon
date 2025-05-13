import { About_us_list, Container } from "components";

export const About_us = () => {
  return (
    <section className="py-12">
      <Container>
        <h2 className="mb-10">
          Почему стоит <span className="head_decor">выбрать нас</span>
        </h2>
        <About_us_list />
      </Container>
    </section>
  );
};
