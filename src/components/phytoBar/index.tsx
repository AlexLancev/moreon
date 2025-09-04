import { Container, Performance, Title } from "components";

const phytoBarDataKey: PerformanceKeyType[] = ["cafeRestaurant"];

export const PhytoBar = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">
          Фито <span className="text-customHeadDecor">бар</span>
        </Title>
        <Performance dataKey={phytoBarDataKey} isVisibleBtn={true} />
      </Container>
    </section>
  );
};
