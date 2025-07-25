import { Container, Performance, Title } from "components";

const phyto_bar_data_key: Performance_key_type[] = ["cafe_restaurant"];

export const Phyto_bar = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">
          Фито <span className="text-customHeadDecor">бар</span>
        </Title>
        <Performance data_key={phyto_bar_data_key} isVisibleBtn={true} />
      </Container>
    </section>
  );
};
