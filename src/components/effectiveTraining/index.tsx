import { Container, Performance, Title } from "@/components";

export const effectiveTrainingDataKey: PerformanceKeyType[] = [
  "spa",
  "cafeRestaurant",
  "reception",
  "salesDepartment",
];

export const EffectiveTraining = () => {
  return (
    <section>
      <Container>
        <Title className="mb-3 md:mb-6 lg:mb-8 2xl:mb-12">
          Все, что нужно для
          <span className="text-customHeadDecor"> эффективных тренировок</span>
        </Title>

        <strong className="mb-10 block md:text-lg xl:text-xl 2xl:text-2xl">
          Многофункциональный отдых включает в себя <br /> тренировки, отдых и
          развлечения
        </strong>
        <Performance dataKey={effectiveTrainingDataKey} isVisibleBtn={false} />
      </Container>
    </section>
  );
};
