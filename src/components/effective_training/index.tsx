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
        <Title className="mb-3 md:mb-6 lg:mb-8 2xl:mb-12">
          Все, что нужно для
          <span className="customHeadDecor"> эффективных тренировок</span>
        </Title>

        <strong className="mb-10 block md:text-lg xl:text-xl 2xl:text-2xl">
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
