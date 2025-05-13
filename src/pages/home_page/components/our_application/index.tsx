import { Container } from "@/components";

export const Our_application = () => {
  return (
    <Container>
      <section className="relative my-12 pt-24 pb-60 bg-[url('/images/application/salefon.png')] bg-auto bg-no-repeat">
        <picture>
          <source srcSet="/images/application/phons.webp" type="image/webp" />
          <img
            className="absolute left-0 top-24"
            width={639}
            src="/images/application/phons.png"
            alt=""
            aria-hidden
          />
        </picture>
        <div className="w-full max-w-[525px] ml-auto pt-32">
          <h2 className="mb-3">
            Приложение <span className="head_decor">Moreon Fitness</span>
          </h2>
          <p className="mb-4">
            В нашем приложении вы можете записаться на тренировку, заморозить
            карту, задать интересующие вас вопросы, быть в курсе расписания
            групповых занятий, а также следить на всеми нашими новостями и
            обновлениями.
          </p>
          <p className="mb-4">
            Забудьте о карте клуба, теперь достаточно получить штрих код и
            показать его с телефона.
          </p>
          <a
            href="/"
            className="mr-5 inline-flex"
            title="Перейти на внешний сайт App store"
          >
            <span className="visually-hidden">
              Перейти на внешний сайт App store
            </span>
            <picture>
              <source
                srcSet="/images/application/appstore.webp"
                type="image/webp"
              />
              <img
                width={155}
                src="/images/application/appstore.jpg"
                alt=""
                aria-hidden
              />
            </picture>
          </a>
          <a
            href="/"
            className="inline-flex"
            title="Перейти на внешний сайт Google Play"
          >
            <span className="visually-hidden">
              Перейти на внешний сайт Google Play
            </span>
            <picture>
              <source
                srcSet="/images/application/googleplay.webp"
                type="image/webp"
              />
              <img
                width={155}
                src="/images/application/googleplay.jpg"
                alt=""
                aria-hidden
              />
            </picture>
          </a>
        </div>
      </section>
    </Container>
  );
};
