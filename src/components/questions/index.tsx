import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import xss from "xss";

import { Title } from "@/components";

import { about_questions_store } from "@/stores/data_store";

export const Questions = observer(() => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const { data, isLoading, isError } = about_questions_store;

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  if (!about_questions_store || !data || data.length === 0) {
    return <div>Нет доступных данных</div>;
  }

  return (
    <ul className="py-5">
      {data.map(({ head, description }, idx: number) => {
        if (!head && !description) return null;

        const sanitized_description = xss(description);

        return (
          <li key={idx} className="mb-2">
            <button
              key={idx}
              className={classNames(
                "w-full rounded-2xl bg-tabs-gradient-custom p-3 pr-10 text-left hover:bg-tabs-hover-gradient-custom xl:p-4 xl:pr-12 2xl:p-6 2xl:pr-14",
              )}
              type="button"
              onClick={() => setVisibleIndex(visibleIndex === idx ? null : idx)}
            >
              <Title
                className={classNames(
                  "relative text-sm before:absolute before:-right-5 before:top-1/2 before:h-2.5 before:w-4 before:-translate-y-1/2 before:bg-[url('/images/list__blue.webp')] before:bg-[center_center] before:bg-no-repeat before:duration-150 xs:text-base xl:text-lg xl:before:-right-4 2xl:text-xl 2xl:before:h-6 2xl:before:w-8 2xl:before:bg-[auto_16px] 3xl:text-2xl",
                  {
                    "before:rotate-180": visibleIndex === idx,
                  },
                )}
              >
                {head}
              </Title>
              <div
                className={classNames(
                  "customInsertHTML overflow-hidden transition-opacity duration-300",
                  {
                    ["h-auto pt-4"]: visibleIndex === idx,
                    ["invisible h-0 p-0 opacity-0"]: visibleIndex !== idx,
                  },
                )}
                dangerouslySetInnerHTML={{ __html: sanitized_description }}
              ></div>
            </button>
          </li>
        );
      })}
    </ul>
  );
});
