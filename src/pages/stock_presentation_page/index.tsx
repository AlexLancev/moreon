import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import xss from "xss";

import { stock_store } from "@/stores/data_store";
import { Container } from "@/components/container";

export const Stock_presentation_page = observer(() => {
  const { data, isLoading, isError } = stock_store;
  const { id } = useParams();
  const numeric_Id = Number(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch data</div>;

  if (!data || data.length === 0 || !numeric_Id) return null;

  const stock = data.find((el) => el.id === numeric_Id);
  const { description_picture, description_promotion, url_images } =
    stock ?? {};

  if (!description_picture || !description_promotion || !url_images)
    return null;

  const sanitized_description = xss(description_promotion);

  return (
    <Container>
      <section className="relative py-20 px-10 before:absolute before:right-28 before:bottom-28 before:z-10 before:w-[138px] before:h-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px]">
        <picture>
          <source
            srcSet="/images/stock_presentation/trenerroom.webp"
            type="image/webp"
          />
          <img
            className="absolute inset-0 w-full h-full"
            src="/images/stock_presentation/trenerroom.jpg"
            alt=""
            aria-hidden
          />
        </picture>
        <div className="relative z-10 flex gap-x-12">
          <picture>
            <source srcSet={url_images?.webp} type="image/webp" />
            <img
              className="rounded-3xl overflow-hidden"
              src={url_images?.jpg}
              alt={description_picture}
            />
          </picture>
          <div
            className="ab"
            dangerouslySetInnerHTML={{ __html: sanitized_description }}
          ></div>
        </div>
      </section>
      <section className="relative py-20 px-10">
        <picture>
          <source
            srcSet="/images/stock_presentation/salefon.webp"
            type="image/webp"
          />
          <img
            className="absolute inset-0 w-full h-full"
            src="/images/stock_presentation/salefon.png"
            alt=""
            aria-hidden
          />
        </picture>
        <h2 className="mb-10">
          Другие <span className="head_decor">акции клуба</span>
        </h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
        >
          {data
            .filter(({ id }) => id !== numeric_Id)
            .map(
              (
                {
                  id,
                  description_picture,
                  description,
                  url_images: { jpg, webp },
                },
                idx: number,
              ) => (
                <SwiperSlide key={idx} className="rounded-3xl overflow-hidden">
                  <Link to={`/stock/${id}`}>
                    <picture>
                      <source srcSet={webp} type="image/webp" />
                      <img
                        width={500}
                        src={jpg}
                        alt={description_picture}
                        aria-label={description_picture}
                      />
                    </picture>
                    {description && (
                      <strong className="text-[rgb(176,176,176)] px-1 text-center">
                        {description}
                      </strong>
                    )}
                  </Link>
                </SwiperSlide>
              ),
            )}
        </Swiper>
      </section>
    </Container>
  );
});
