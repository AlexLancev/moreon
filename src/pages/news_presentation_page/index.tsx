import { observer } from "mobx-react-lite";

import {
  ContentLoader,
  DescriptionHero,
  Render_slider,
  Title,
} from "@/components";
import { Container } from "@/components/container";
import { SkeletonFitnessSection } from "@/constans";
import { news_store } from "@/stores/data_store";

const News_presentation_page = observer(() => {
  const { data } = news_store;

  return (
    <Container>
      <ContentLoader
        currentStore={news_store}
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
        <Render_slider type="news" heroData={news_store} />
      </section>
    </Container>
  );
});

export default News_presentation_page;
