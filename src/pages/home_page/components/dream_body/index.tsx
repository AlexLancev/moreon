import { Container, Title, Types_services } from "components";

import { sizeTitleData } from "@/constans";
import { useGetResponsiveValue } from "@/utils";

export const Dream_body = () => {
  const size = useGetResponsiveValue<TitleSize>("md", sizeTitleData);

  return (
    <section className="py-12">
      <Container>
        <Title size={size}>
          Создай тело мечты вместе
          <span className="head_decor"> с Moreon Fitness</span>
        </Title>
        <Types_services />
      </Container>
    </section>
  );
};
