import { Container, Questions, Title } from "components";

export const About_questions = () => {
  return (
    <Container>
      <section className="about_questions">
        <Title>
          Часто задаваемые <span className="head_decor">вопросы</span>
        </Title>
        <Questions />
      </section>
    </Container>
  );
};
