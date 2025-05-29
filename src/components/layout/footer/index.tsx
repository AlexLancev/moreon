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
    <footer className="bg-[rgba(0,0,0,0.3)] pt-10">
      <Container>
        <div className="grid grid-cols-4 place-items-center gap-x-5 pb-10 border-b-[1px] border-[rgba(255,255,255,0.3)]">
          <div>
            <Logo className="mb-10" />
            <strong className="block mb-3">Обратная связь</strong>
            <Feedback className="flex-col items-start justify-end gap-y-4 mb-5" />
          </div>
          <Opening_hours />
          <Menu className="flex-col items-start gap-y-3" />
          <div>
            <strong className="block mb-3">Наши социальные сети</strong>
            <Social className="mb-5" />
            <strong className="block mb-3">Скачать приложение</strong>
            <App_store className="mb-3" />
            <b>Разработано: </b>
            <a
              href="https://github.com/AlexLancev"
              className="hover:text-white duration-300"
              target="_blank"
            >
              AlexLancev
            </a>
          </div>
        </div>
        <div className="flex justify-between gap-x-3 py-4 text-sm">
          <div className="max-w-[590px]">
            &copy; Все права принадлежат ФИТНЕС-ЦЕНТР «МОРЕОН» г. Москва м.
            Ясенево, ул. Голубинская, д. 16.
          </div>
          {documents_data && documents_data.length !== 0 && (
            <ul className="flex justify-between gap-x-5">
              {documents_data.map(({ id, path, description }, idx: number) => {
                if (!path && !description) return null;

                return (
                  <li key={id ?? idx}>
                    <a
                      href={path}
                      className="hover:text-white duration-300"
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
