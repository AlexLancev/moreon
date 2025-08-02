import { Eye as IconEye } from "lucide-react";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import { gallery_list_store } from "@/stores/data_store";

import { AccessibleButton } from "../ui/accessibleButton";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const initialVisibleCount = 6;

export const Gallery_list = observer(() => {
  const [visibleShow, setVisibleShow] = useState<number>(initialVisibleCount);
  const { data, isLoading, isError } = gallery_list_store;

  if (isError) {
    console.error("Не удалось получить данные. Ошибка:", isError);
    return null;
  }

  if (isLoading) {
    return (
      <ul className="grid place-items-center gap-4 xxs:grid-cols-2 md:grid-cols-3 2xl:gap-6">
        {Array.from({ length: initialVisibleCount }).map((_, idx) => (
          <Skeleton key={idx} className="h-[300px] w-full rounded-3xl" />
        ))}
      </ul>
    );
  }

  if (!data || data.length === 0) {
    console.error("Нет данных:", data);
    return null;
  }

  const handleVisibleShow = () => {
    if (data.length > visibleShow) {
      setVisibleShow((prev) => prev + initialVisibleCount);
    }
  };

  return (
    <>
      <ul className="grid place-items-center gap-4 xxs:grid-cols-2 md:grid-cols-3 2xl:gap-6">
        {data
          .slice(0, visibleShow)
          .map(({ description, images_url: { jpg } }, idx: number) => (
            <li key={idx} className="h-full overflow-hidden rounded-3xl">
              <AccessibleButton className="block h-full">
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
              </AccessibleButton>
            </li>
          ))}
      </ul>
      {data.length > visibleShow && (
        <Button onClick={handleVisibleShow} className="m-auto mt-10 flex">
          Показать ещё <IconEye />
        </Button>
      )}
    </>
  );
});
