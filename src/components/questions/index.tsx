import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames";
import xss from "xss";

import { about_questions_data } from "@/data";
import { about_questions_store } from "@/stores/data_store";

export const Questions = observer(() => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const { data, isLoading, error } = useQuery({
    queryKey: ["about_questions"],
    queryFn: about_questions_data,
  });

  useEffect(() => {
    if (data) {
      about_questions_store.set_data(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: Failed to fetch data</div>;

  if (
    !about_questions_store ||
    !about_questions_store.data ||
    about_questions_store.data.length === 0
  ) {
    return <div>No data available</div>;
  }

  return (
    <ul className="py-5">
      {about_questions_store.data.map(({ head, description }, idx: number) => {
        if (!head && !description) return null;

        const sanitized_description = xss(description);

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
              <div
                className={classNames(
                  "duration-300 transition-opacity overflow-hidden ab",
                  {
                    ["activeClasses"]: visibleIndex === idx,
                    ["inactiveClasses"]: visibleIndex !== idx,
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
