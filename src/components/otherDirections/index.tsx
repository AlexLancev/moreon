import { Container, DirectionsList, Title } from "components";

const keyList = ["childrensSwimming", "infantSwimming"] as const;

export const OtherDirections = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-3 md:mb-6 lg:mb-8 2xl:mb-12">
          Другие <span className="text-customHeadDecor">направления</span>
        </Title>
        <DirectionsList keysList={keyList} />
      </Container>
    </section>
  );
};
