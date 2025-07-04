import { Container, Every_card_list, Title } from "components";

import { sizeTitleData } from "@/constans";

export const Every_card = () => {
  return (
    <section className="py-12">
      <Container>
        <Title typeObj={sizeTitleData}>
          В каждой <span className="customHeadDecor">клубной карте</span>
        </Title>
        <Every_card_list />
      </Container>
    </section>
  );
};
