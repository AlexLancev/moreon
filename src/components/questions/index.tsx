import { useState } from "react";

import classNames from "classnames";

type questions_list = {
  head: string;
  description: string;
};

export const Questions = ({
  questions_list,
}: {
  questions_list: questions_list[];
}) => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  if (!questions_list || questions_list.length === 0) return null;

  return (
    <ul className="py-5">
      {questions_list.map(({ head, description }, idx: number) => {
        if (!head || !description) return null;

        return (
          <li key={idx} className="mb-2">
            <button
              key={idx}
              className={classNames("about_slide", {
                "about_slide--active": visibleIndex === idx,
              })}
              type="button"
              onClick={() => setVisibleIndex(visibleIndex === idx ? null : idx)}
            >
              <h3 className="text-base">{head}</h3>
              <p
                className={classNames("duration-300 transition-opacity", {
                  ["activeClasses"]: visibleIndex === idx,
                  ["inactiveClasses"]: visibleIndex !== idx,
                })}
              >
                {description}
              </p>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
