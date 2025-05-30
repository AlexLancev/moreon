import { App_store, Container, Title } from "@/components";

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
          <Title className="mb-3">
            Приложение <span className="head_decor">Moreon Fitness</span>
          </Title>
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
          <App_store />
        </div>
      </section>
    </Container>
  );
};
