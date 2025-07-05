import { observer } from "mobx-react-lite";

import { profitable_visits_store } from "@/stores/data_store";

export const Profitable_list = observer(() => {
  const { data, isLoading, isError } = profitable_visits_store;

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  if (!profitable_visits_store || !data || data.length === 0) {
    return <div>Нет доступных данных</div>;
  }

  return (
    <ul className="grid grid-cols-4 gap-6 py-5">
      {data.map(({ head, profitable_visits_list, images_url }, idx: number) => {
        if (!head && !profitable_visits_list && !images_url) return null;

        return (
          <li
            key={idx}
            className="group flex flex-col overflow-hidden rounded-3xl bg-[url('/images/profitable_visits/profit_decor.svg')] bg-[100%_auto] bg-left-bottom bg-no-repeat px-10 py-5"
          >
            <picture>
              <source srcSet={images_url?.webp} type="image/webp" />
              <img
                className="m-auto mb-5 block opacity-70 duration-300 group-hover:opacity-100"
                src={images_url?.png}
                alt=""
                loading="lazy"
                aria-hidden
              />
            </picture>
            <strong className="mb-3 flex-1 text-center text-2xl">{head}</strong>
            <ul className="list-disc pb-2">
              {profitable_visits_list.map((profit, idx: number) => (
                <li key={idx} className="[&:not(:last-child)]:mb-2">
                  {profit}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
});
