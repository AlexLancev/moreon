import { Container, Stock_list, Title } from "components";

import { sizeTitleData } from "@/constans";
import { useGetResponsiveValue } from "@/utils";

export const Stock = () => {
  const size = useGetResponsiveValue<TitleSize>("md", sizeTitleData);

  return (
    <section className="py-12">
      <Container>
        <Title size={size}>Акции клуба</Title>
        <Stock_list />
      </Container>
    </section>
  );
};
