import { Container, Performance, Title } from "components";

import { sizeTitleData } from "@/constans";
import { useGetResponsiveValue } from "@/utils";

const phyto_bar_data_key: Performance_key_type[] = ["cafe_restaurant"];

export const Phyto_bar = () => {
  const size = useGetResponsiveValue<TitleSize>("md", sizeTitleData);

  return (
    <section className="py-12">
      <Container>
        <Title fontSize={size} className="mb-4 lg:mb-8 3xl:mb-12">
          Фито <span className="customHeadDecor">бар</span>
        </Title>
        <Performance data_key={phyto_bar_data_key} isVisibleBtn={true} />
      </Container>
    </section>
  );
};
