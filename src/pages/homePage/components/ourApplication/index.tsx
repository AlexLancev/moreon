import { AppStore, Container, Title } from "@/components";

export const OurApplication = () => {
  return (
    <Container>
      <section className="relative flex flex-col-reverse bg-[url('/images/application/salefon.png')] bg-auto bg-no-repeat py-10 md:flex-row md:items-center md:gap-x-5 lg:my-12 lg:pb-60 lg:pt-24 lg:*:w-1/2">
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
        <div className="mb-14 w-full [&>p]:mb-4 xs:[&>p]:text-xl md:[&>p]:text-base lg:[&>p]:mb-6 lg:[&>p]:text-xl">
          <Title className="mb-4 text-2xl md:mb-6">
            Приложение{" "}
            <span className="text-customHeadDecor">Moreon Fitness</span>
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
          <AppStore />
        </div>
      </section>
    </Container>
  );
};
