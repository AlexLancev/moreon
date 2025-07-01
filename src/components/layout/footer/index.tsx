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
    <footer className="bg-[rgba(0,0,0,0.3)] md:pt-10 pt-5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:place-items-center gap-x-5 md:pb-10 pb-5 border-b-[1px] border-[rgba(255,255,255,0.3)]">
          <div className="hidden md:block">
            <Logo className="mb-10" />
            <strong className="block mb-3 xl:text-xl 2xl:text-2xl 3xl:text-3xl">
              Обратная связь
            </strong>
            <Feedback className="flex-col items-start justify-end gap-y-4 mb-5" />
          </div>
          <Opening_hours />
          <Menu className="md:flex hidden flex-col items-start gap-y-1" />
          <div className="hidden lg:block">
            <strong className="block mb-3 2xl:mb-6 xl:text-xl 2xl:text-2xl 3xl:text-3xl">
              Наши социальные сети
            </strong>
            <Social className="mb-5" />
            <strong className="block mb-3 2xl:mb-6 xl:text-xl 2xl:text-2xl 3xl:text-3xl">
              Скачать приложение
            </strong>
            <App_store className="mb-3 2xl:mb-6" />
            <b className="xl:text-xl 2xl:text-2xl 3xl:text-3xl">
              Разработано:{" "}
            </b>
            <a
              href="https://github.com/AlexLancev"
              className="hover:text-white duration-300 xl:text-xl 2xl:text-2xl 3xl:text-3xl"
              target="_blank"
            >
              AlexLancev
            </a>
          </div>
        </div>
        <div className="flex 2xl:flex-row flex-col justify-between gap-x-3 py-4 text-sm">
          <div className="md:max-w-[590px] mb-4 3xl:text-xl">
            &copy; Все права принадлежат ФИТНЕС-ЦЕНТР «МОРЕОН» г. Москва м.
            Ясенево, ул. Голубинская, д. 16.
          </div>
          {documents_data && documents_data.length !== 0 && (
            <ul className="flex flex-wrap md:justify-start gap-5 gap-y-2 gap-x-4">
              {documents_data.map(({ id, path, description }, idx: number) => {
                if (!path && !description) return null;

                return (
                  <li key={id ?? idx}>
                    <a
                      href={path}
                      className="hover:text-white duration-300 3xl:text-xl"
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
