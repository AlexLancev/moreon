import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import xss from "xss";

import { Render_slider, Title } from "@/components";
import { Container } from "@/components/container";
import { stock_store } from "@/stores/data_store";

const Stock_presentation_page = observer(() => {
  const { data, isLoading, isError } = stock_store;
  const { id } = useParams();
  const numeric_Id = Number(id);

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  if (!data || data.length === 0 || !numeric_Id) return null;

  const stock = data.find((el) => el.id === numeric_Id);

  const { description_picture, description_promotion, url_images } =
    stock ?? {};

  if (!description_picture || !description_promotion || !url_images)
    return null;

  const sanitized_description = xss(description_promotion);

  return (
    <Container>
      <section className="relative px-2.5 py-4 before:absolute before:bottom-28 before:right-28 before:z-10 before:h-[138px] before:w-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px] md:px-10 md:py-20">
        <picture>
          <source
            srcSet="/images/stock_presentation/trenerroom.webp"
            type="image/webp"
          />
          <img
            className="absolute inset-0 h-full w-full"
            src="/images/stock_presentation/trenerroom.jpg"
            alt=""
            loading="lazy"
            aria-hidden
          />
        </picture>
        <div className="relative z-10 gap-x-12 md:flex md:justify-center">
          <picture>
            <source srcSet={url_images?.webp} type="image/webp" />
            <img
              className="m-auto overflow-hidden rounded-3xl"
              src={url_images?.jpg}
              alt={description_picture}
              loading="lazy"
            />
          </picture>
          <div
            className="customInsertHTML xl:text-xl 2xl:text-3xl"
            dangerouslySetInnerHTML={{ __html: sanitized_description }}
          ></div>
        </div>
      </section>
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
        <Render_slider path={numeric_Id} type="stock" data={data} />
      </section>
    </Container>
  );
});

export default Stock_presentation_page;
