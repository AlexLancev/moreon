import { Container, EveryCardList, Title } from "components";

import { sizeTitleData } from "@/constans";

export const EveryCard = () => {
  return (
    <section className="py-12">
      <Container>
        <Title
          typeObj={sizeTitleData}
          className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12"
        >
          В каждой <span className="text-customHeadDecor">клубной карте</span>
        </Title>
        <EveryCardList />
      </Container>
    </section>
  );
};
