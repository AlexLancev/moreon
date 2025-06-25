import { Profitable_visits } from "../about_page/components";

import { Contacts, Container, Stock_list, Title } from "@/components";

const Stock_page = () => {
  return (
    <section className="py-12">
      <Container>
        <Title>
          <span className="head_decor">Акциий</span> клуба
        </Title>
        <Stock_list />
        <Profitable_visits />
        <Contacts />
      </Container>
    </section>
  );
};

export default Stock_page;
