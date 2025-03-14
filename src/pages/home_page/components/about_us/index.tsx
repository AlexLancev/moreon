import { About_us_list } from "components";

export const About_us = () => {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="mb-10">
          Почему стоит <span className="head_decor">выбрать нас</span>
        </h2>
        <About_us_list />
      </div>
    </section>
  );
};
