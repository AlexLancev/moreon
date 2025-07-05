import { observer } from "mobx-react-lite";

import { every_card_store } from "@/stores/data_store";

export const Every_card_list = observer(() => {
  const { data, isLoading, isError } = every_card_store;

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  if (!every_card_store || !data || data.length === 0) {
    return <div>Нет доступных данных</div>;
  }

  return (
    <ul className="grid grid-cols-4 gap-5 py-5">
      {data.map(({ head, images_url }, idx: number) => {
        if (!head && !images_url) return null;

        return (
          <li
            key={idx}
            className="grid place-items-center gap-y-5 overflow-hidden rounded-3xl bg-[rgba(255,255,255,0.19)] p-10 duration-300 hover:bg-[rgba(255,255,255,0.12)]"
          >
            <picture>
              <source srcSet={images_url?.webp} type="image/webp" />
              <img src={images_url?.png} alt="" loading="lazy" aria-hidden />
            </picture>
            <strong>{head}</strong>
          </li>
        );
      })}
    </ul>
  );
});
