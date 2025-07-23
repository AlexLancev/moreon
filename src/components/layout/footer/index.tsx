import {
  App_store,
  Container,
  Feedback,
  Logo,
  Menu,
  Opening_hours,
  Social,
} from "@/components";

type Documents_data_type = {
  id: number;
  path: string;
  description: string;
};

const documents_data: Documents_data_type[] = [
  {
    id: 1,
    path: "/documents/pdf/cookies.pdf",
    description: "Использование cookies",
  },
  {
    id: 2,
    path: "/documents/pdf/policy.pdf",
    description: "Политика обработки персональных данных",
  },
  {
    id: 3,
    path: "/documents/pdf/rules.pdf",
    description: "Правила посещения",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[rgba(0,0,0,0.3)] pt-5 md:pt-10">
      <Container>
        <div className="grid grid-cols-1 gap-x-5 border-b-[1px] border-[rgba(255,255,255,0.3)] pb-5 md:grid-cols-3 md:place-items-center md:pb-10 lg:grid-cols-4">
          <div className="hidden md:block">
            <Logo className="mb-10" />
            <strong className="mb-3 block xl:text-xl 2xl:text-2xl 3xl:text-3xl">
              Обратная связь
            </strong>
            <Feedback className="mb-5 flex-col items-start justify-end gap-y-4" />
          </div>
          <Opening_hours />
          <Menu className="hidden flex-col items-start gap-y-1 md:flex" />
          <div className="hidden lg:block">
            <strong className="mb-3 block xl:text-xl 2xl:mb-6 2xl:text-2xl 3xl:text-3xl">
              Наши социальные сети
            </strong>
            <Social className="mb-5" />
            <strong className="mb-3 block xl:text-xl 2xl:mb-6 2xl:text-2xl 3xl:text-3xl">
              Скачать приложение
            </strong>
            <App_store className="mb-3 2xl:mb-6" />
            <b className="xl:text-xl 2xl:text-2xl 3xl:text-3xl">
              Разработано:{" "}
            </b>
            <a
              href="https://github.com/AlexLancev"
              className="duration-300 hover:text-white xl:text-xl 2xl:text-2xl 3xl:text-3xl"
              target="_blank"
            >
              AlexLancev
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-x-3 py-4 text-sm 2xl:flex-row">
          <div className="mb-4 md:max-w-[590px] 3xl:text-xl">
            &copy; Все права принадлежат ФИТНЕС-ЦЕНТР «МОРЕОН» г. Москва м.
            Ясенево, ул. Голубинская, д. 16.
          </div>
          {documents_data && documents_data.length !== 0 && (
            <ul className="flex flex-wrap gap-5 gap-x-4 gap-y-2 md:justify-start">
              {documents_data.map(({ path, description }, idx: number) => {
                if (!path && !description) return null;

                return (
                  <li key={idx}>
                    <a
                      href={path}
                      className="duration-300 hover:text-white 3xl:text-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {description}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </Container>
    </footer>
  );
};
