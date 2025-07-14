import { Container, Questions, Title } from "components";

export const About_questions = () => {
  return (
    <Container>
      <section className="before:clip-[polygon(0_0,_100%_0,_100%_600px,_0_25%)] relative px-3 py-8 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:bg-[rgba(51,176,170,0.05)] before:[-webkit-clip-path:polygon(0_0,_100%_0,_100%_600px,_0_25%)]">
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">
          Часто задаваемые <span className="text-customHeadDecor">вопросы</span>
        </Title>
        <Questions />
      </section>
    </Container>
  );
};
