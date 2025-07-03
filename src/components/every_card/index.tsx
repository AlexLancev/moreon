import { Container, Every_card_list, Title } from "components";

import { sizeTitleData } from "@/constans";
import { useGetResponsiveValue } from "@/utils";

export const Every_card = () => {
  const size = useGetResponsiveValue<TitleSize>("md", sizeTitleData);

  return (
    <section className="py-12">
      <Container>
        <Title fontSize={size} className="mb-4 lg:mb-8 3xl:mb-12">
          В каждой <span className="customHeadDecor">клубной карте</span>
        </Title>
        <Every_card_list />
      </Container>
    </section>
  );
};
