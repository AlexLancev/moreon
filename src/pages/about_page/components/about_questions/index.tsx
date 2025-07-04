import { Container, Questions, Title } from "components";

export const About_questions = () => {
  return (
    <Container>
      <section className="before:clip-[polygon(0_0,_100%_0,_100%_600px,_0_25%)] relative px-8 py-12 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:bg-[rgba(51,176,170,0.05)] before:[-webkit-clip-path:polygon(0_0,_100%_0,_100%_600px,_0_25%)]">
        <Title>
          Часто задаваемые <span className="customHeadDecor">вопросы</span>
        </Title>
        <Questions />
      </section>
    </Container>
  );
};
