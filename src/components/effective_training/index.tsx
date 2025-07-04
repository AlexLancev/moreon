import { Container, Performance, Title } from "@/components";

const effective_training_data_key: Performance_key_type[] = [
  "spa",
  "cafe_restaurant",
  "reception",
  "sales_department",
];

export const Effective_training = () => {
  return (
    <section>
      <Container>
        <Title className="mb-3">
          Все, что нужно для
          <span className="customHeadDecor"> эффективных тренировок</span>
        </Title>

        <strong className="mb-10 block text-lg">
          Многофункциональный отдых включает в себя <br /> тренировки, отдых и
          развлечения
        </strong>
        <Performance
          data_key={effective_training_data_key}
          isVisibleBtn={false}
        />
      </Container>
    </section>
  );
};
