import { Container, Team_list, Title } from "components";

type Trainers_direction_type = {
  direction: "martial_arts" | "gym" | "group_training" | "pool";
};

export const Trainers_direction = ({ direction }: Trainers_direction_type) => {
  return (
    <section className="py-12">
      <Container>
        <Title>
          Тренеры <span className="customHeadDecor">направления</span>
        </Title>
        <Team_list isActiveTab={direction} />
      </Container>
    </section>
  );
};
