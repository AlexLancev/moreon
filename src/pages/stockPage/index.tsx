import { Contacts, Container, StockList, Title } from "@/components";

import { ProfitableVisits } from "../aboutPage/components";

const StockPage = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-3 md:mb-6 lg:mb-8 2xl:mb-12">
          <span className="text-customHeadDecor">Акциий</span> клуба
        </Title>
        <StockList />
        <ProfitableVisits />
        <Contacts />
      </Container>
    </section>
  );
};

export default StockPage;
