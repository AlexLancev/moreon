import { useState } from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";
import xss from "xss";

import { Title } from "@/components";

import { about_questions_store } from "@/stores/data_store";

export const Questions = observer(() => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const { data, isLoading, isError } = about_questions_store;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch data</div>;

  if (!about_questions_store || !data || data.length === 0) {
    return <div>No data available</div>;
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
                "bg-tabs-gradient-custom hover:bg-tabs-hover-gradient-custom relative w-full py-4 px-6 pr-12 rounded-2xl text-left before:absolute before:top-6 before:right-6 before:duration-150 before:w-4 before:h-2.5 before:bg-no-repeat before:bg-[url('/images/list__blue.webp')]",
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
                  "customInsertHTML duration-300 transition-opacity overflow-hidden",
                  {
                    ["pt-4 h-auto"]: visibleIndex === idx,
                    ["invisible p-0 opacity-0 h-0"]: visibleIndex !== idx,
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
