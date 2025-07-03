import { About_us_list, Container, Title } from "components";

import { sizeTitleData } from "@/constans";
import { useGetResponsiveValue } from "@/utils";

export const About_us = () => {
  const size = useGetResponsiveValue<TitleSize>("md", sizeTitleData);

  return (
    <section className="py-12">
      <Container>
        <Title fontSize={size}>
          Почему стоит <span className="customHeadDecor">выбрать нас</span>
        </Title>
        <About_us_list />
      </Container>
    </section>
  );
};
