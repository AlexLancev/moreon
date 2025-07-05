import { useState } from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";
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
                "relative w-full rounded-2xl bg-tabs-gradient-custom px-6 py-4 pr-12 text-left before:absolute before:right-6 before:top-6 before:h-2.5 before:w-4 before:bg-[url('/images/list__blue.webp')] before:bg-no-repeat before:duration-150 hover:bg-tabs-hover-gradient-custom",
                {
                  "before:rotate-180": visibleIndex === idx,
                },
              )}
              type="button"
              onClick={() => setVisibleIndex(visibleIndex === idx ? null : idx)}
            >
              <Title size="md" className="mb-0">
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
