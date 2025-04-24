import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useQuery } from "@tanstack/react-query";

import { every_card_data } from "@/data";
import { every_card_store } from "@/stores/data_store";

export const Every_card_list = observer(() => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["every_card"],
    queryFn: every_card_data,
  });

  useEffect(() => {
    if (data) {
      every_card_store.set_data(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: Failed to fetch data</div>;

  if (
    !every_card_store ||
    !every_card_store.data ||
    every_card_store.data.length === 0
  ) {
    return <div>No data available</div>;
  }

  return (
    <ul className="grid grid-cols-4 gap-5 py-5">
      {every_card_store.data.map(
        ({ head, images_url }: Every_card_type, idx: number) => {
          if (!head && !images_url) return null;

          return (
            <li
              key={idx}
              className="grid gap-y-5 place-items-center p-10 rounded-3xl overflow-hidden bg-[rgba(255,255,255,0.19)] duration-300 hover:bg-[rgba(255,255,255,0.12)]"
            >
              <picture>
                <source srcSet={images_url?.webp} type="image/webp" />
                <img src={images_url?.png} alt="" aria-hidden />
              </picture>
              <strong>{head}</strong>
            </li>
          );
        },
      )}
    </ul>
  );
});
