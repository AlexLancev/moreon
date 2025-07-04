import { App_store, Container, Title } from "@/components";

export const Our_application = () => {
  return (
    <Container>
      <section className="relative my-12 bg-[url('/images/application/salefon.png')] bg-auto bg-no-repeat pb-60 pt-24">
        <picture>
          <source srcSet="/images/application/phons.webp" type="image/webp" />
          <img
            className="absolute left-0 top-24"
            width={639}
            src="/images/application/phons.png"
            alt=""
            loading="lazy"
            aria-hidden
          />
        </picture>
        <div className="ml-auto w-full max-w-[525px] pt-32">
          <Title className="mb-4 text-2xl md:mb-6">
            Приложение <span className="customHeadDecor">Moreon Fitness</span>
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
