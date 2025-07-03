import { Container, Title, Video_reviews_list } from "components";

import { sizeTitleData } from "@/constans";
import { useGetResponsiveValue } from "@/utils";

export const Video_reviews = () => {
  const size = useGetResponsiveValue<TitleSize>("md", sizeTitleData);

  return (
    <section className="py-12">
      <Container>
        <Title fontSize={size} className="mb-4 lg:mb-8 3xl:mb-12">
          Видео отзывы
        </Title>
        <Video_reviews_list />
      </Container>
    </section>
  );
};
