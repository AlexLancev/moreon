import { Container, TeamList, Title } from "components";

type TrainersDirectionType = {
  direction: "martialArts" | "gym" | "groupTraining" | "pool";
};

export const TrainersDirection = ({ direction }: TrainersDirectionType) => {
  return (
    <section className="py-12">
      <Container>
        <Title>
          Тренеры <span className="text-customHeadDecor">направления</span>
        </Title>
        <TeamList isActiveTab={direction} />
      </Container>
    </section>
  );
};
