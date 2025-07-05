import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import xss from "xss";

import { news_store } from "@/stores/data_store";
import { Container } from "@/components/container";
import { Render_slider, Title } from "@/components";

const News_presentation_page = observer(() => {
  const { data, isLoading, isError } = news_store;
  const { id } = useParams();
  const numeric_Id = Number(id);

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  if (!data || data.length === 0 || !numeric_Id) return null;

  const news = data.find((el) => el.id === numeric_Id);

  const { description_picture, description_promotion, url_images } = news ?? {};

  if (!description_picture || !description_promotion || !url_images)
    return null;

  const sanitized_description = xss(description_promotion);

  return (
    <Container>
      <section className="relative px-10 py-20 before:absolute before:bottom-28 before:right-28 before:z-10 before:h-[138px] before:w-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px]">
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
        <div className="relative z-10 flex gap-x-12">
          <picture>
            <source srcSet={url_images?.webp} type="image/webp" />
            <img
              className="max-w-[500px] overflow-hidden rounded-3xl"
              src={url_images?.jpg}
              alt={description_picture}
              loading="lazy"
            />
          </picture>
          <div
            className="customInsertHTML"
            dangerouslySetInnerHTML={{ __html: sanitized_description }}
          ></div>
        </div>
      </section>
      <section className="relative px-10 py-20">
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
        <Title>
          Другие <span className="customHeadDecor">акции клуба</span>
        </Title>
        <Render_slider path={numeric_Id} type="news" data={data} />
      </section>
    </Container>
  );
});

export default News_presentation_page;
