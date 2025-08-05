import { observer } from "mobx-react-lite";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container, ContentLoader } from "@/components";
import { sizeRangesData, SkeletonGrid } from "@/constans";
import { numberVisibleOtherDirectionsData } from "@/constans/numberVisibleElementsData";
import { other_directions_store } from "@/stores/data_store";
import { useGetResponsiveValue } from "@/utils";

export const Other_directions = observer(() => {
  const { data } = other_directions_store;
  const indentationSlide = useGetResponsiveValue<number>(20, sizeRangesData);
  const quantitySlide = useGetResponsiveValue<number>(
    2,
    numberVisibleOtherDirectionsData,
  );

  return (
    <section className="py-12">
      <h2 className="visually-hidden">Наши другие направления</h2>
      <Container>
        <Swiper
          className="flex items-center justify-around gap-4"
          modules={[Pagination]}
          spaceBetween={indentationSlide}
          slidesPerView={quantitySlide}
          pagination={{ clickable: true }}
        >
          <ContentLoader
            currentStore={other_directions_store}
            skeletonComponent={SkeletonGrid}
            initialVisibleCount={5}
          >
            {data.map(
              (
                { path, descriptions, images_url: { png, webp } },
                idx: number,
              ) => (
                <SwiperSlide key={idx}>
                  <a
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={descriptions}
                  >
                    <span className="visually-hidden">{descriptions}</span>
                    <picture>
                      <source srcSet={webp} type="image/webp" />
                      <img
                        src={png}
                        className="m-auto"
                        alt=""
                        loading="lazy"
                        aria-hidden
                      />
                    </picture>
                  </a>
                </SwiperSlide>
              ),
            )}
          </ContentLoader>
        </Swiper>
      </Container>
    </section>
  );
});
