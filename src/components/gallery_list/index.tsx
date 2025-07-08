import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Eye } from "lucide-react";

import { Button } from "../ui/button";

import { gallery_list_store } from "@/stores/data_store";

const num = 6;

export const Gallery_list = observer(() => {
  const [visibleShow, setVisibleShow] = useState<number>(num);
  const { data, isLoading, isError } = gallery_list_store;

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  if (!gallery_list_store || !data || data.length === 0) {
    return <div>Нет доступных данных</div>;
  }

  const handleVisibleShow = () => {
    if (data.length > visibleShow) {
      setVisibleShow((prev) => prev + num);
    }
  };

  return (
    <>
      <ul className="grid place-items-center gap-4 xxs:grid-cols-2 md:grid-cols-3 2xl:gap-6">
        {data
          .slice(0, visibleShow)
          .map(({ description, images_url: { jpg } }, idx: number) => (
            <li key={idx} className="h-full overflow-hidden rounded-3xl">
              <button type="button" className="block h-full">
                <span className="visually-hidden">{description}</span>
                <picture>
                  <source srcSet={jpg} type="image/webp" />
                  <img
                    className="h-full object-cover duration-700 hover:scale-[1.1]"
                    src={jpg}
                    alt={description}
                    loading="lazy"
                  />
                </picture>
              </button>
            </li>
          ))}
      </ul>
      {data.length > visibleShow && (
        <Button onClick={handleVisibleShow} className="m-auto mt-5 flex">
          Показать ещё <Eye />
        </Button>
      )}
    </>
  );
});
