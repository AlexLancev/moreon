import { Contacts, Container, Stock_list, Title } from "@/components";

import { Profitable_visits } from "../about_page/components";

const Stock_page = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-3 md:mb-6 lg:mb-8 2xl:mb-12">
          <span className="text-customHeadDecor">Акциий</span> клуба
        </Title>
        <Stock_list />
        <Profitable_visits />
        <Contacts />
      </Container>
    </section>
  );
};

export default Stock_page;
