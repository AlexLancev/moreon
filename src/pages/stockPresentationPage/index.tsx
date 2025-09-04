import { observer } from "mobx-react-lite";

import {
  ContentLoader,
  DescriptionHero,
  RenderSlider,
  Title,
} from "@/components";
import { Container } from "@/components/container";
import { SkeletonFitnessSection } from "@/constans";
import { stockStore } from "@/stores/dataStore";

const StockPresentationPage = observer(() => {
  const { data } = stockStore;

  return (
    <Container>
      <ContentLoader
        currentStore={stockStore}
        skeletonComponent={SkeletonFitnessSection}
        initialVisibleCount={1}
      >
        <DescriptionHero data={data} />
      </ContentLoader>

      <section className="relative md:px-10 md:py-20">
        <picture>
          <source
            srcSet="/images/stock_presentation/salefon.webp"
            type="image/webp"
          />
          <img
            className="absolute inset-0 h-full w-full"
            src="/images/stock_presentation/salefon.png"
            alt=""
            loading="lazy"
            aria-hidden
          />
        </picture>
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">
          Другие <span className="text-customHeadDecor">акции клуба</span>
        </Title>
        <RenderSlider type="stock" heroData={stockStore} />
      </section>
    </Container>
  );
});

export default StockPresentationPage;
