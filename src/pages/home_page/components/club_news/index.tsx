import { Container, News_list, Title } from "components";

import { sizeTitleData } from "@/constans";
import { useGetResponsiveValue } from "@/utils";

export const Club_news = () => {
  const size = useGetResponsiveValue<TitleSize>("md", sizeTitleData);

  return (
    <section className="py-12">
      <Container>
        <Title fontSize={size} className="mb-4 lg:mb-8 3xl:mb-12">
          <span className="customHeadDecor">Новости</span> фитнес клуба
        </Title>
        <News_list />
      </Container>
    </section>
  );
};
