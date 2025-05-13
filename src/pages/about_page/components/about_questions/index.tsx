import { Container, Questions } from "components";

export const About_questions = () => {
  return (
    <Container>
      <section className="about_questions">
        <h2 className="mb-10">
          Часто задаваемые <span className="head_decor">вопросы</span>
        </h2>
        <Questions />
      </section>
    </Container>
  );
};
