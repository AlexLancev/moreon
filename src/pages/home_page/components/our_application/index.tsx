import { App_store, Container, Title } from "@/components";

export const Our_application = () => {
  return (
    <Container>
      <section className="relative flex lg:*:w-1/2 flex-col-reverse md:flex-row md:gap-x-5 md:items-center  lg:my-12 bg-[url('/images/application/salefon.png')] bg-auto bg-no-repeat  lg:pb-60 lg:pt-24 py-10">
        <picture className="">
          <source srcSet="/images/application/phons.webp" type="image/webp" />
          <img
            className="-translate-x-3 xl:w-full"
            width={639}
            src="/images/application/phons.png"
            alt=""
            loading="lazy"
            aria-hidden
          />
        </picture>
        <div className="[&>p]:mb-4 lg:[&>p]:mb-6 xs:[&>p]:text-xl md:[&>p]:text-base lg:[&>p]:text-xl w-full mb-14">
          <Title className="mb-4 text-2xl md:mb-6">
            Приложение <span className="customHeadDecor">Moreon Fitness</span>
          </Title>
          <p>
            В нашем приложении вы можете записаться на тренировку, заморозить
            карту, задать интересующие вас вопросы, быть в курсе расписания
            групповых занятий, а также следить на всеми нашими новостями и
            обновлениями.
          </p>
          <p>
            Забудьте о карте клуба, теперь достаточно получить штрих код и
            показать его с телефона.
          </p>
          <App_store />
        </div>
      </section>
    </Container>
  );
};
