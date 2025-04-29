import { profitable_visits_data } from "@/data";
import { profitable_visits_store } from "@/stores/data_store";
import { useQuery } from "@tanstack/react-query";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export const Profitable_list = observer(() => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profitable_visits"],
    queryFn: profitable_visits_data,
  });

  useEffect(() => {
    if (data) {
      profitable_visits_store.set_data(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: Failed to fetch data</div>;

  if (
    !profitable_visits_store ||
    !profitable_visits_store.data ||
    profitable_visits_store.data.length === 0
  ) {
    return <div>No data available</div>;
  }

  return (
    <ul className="grid grid-cols-4 gap-6 py-5">
      {profitable_visits_store.data.map(
        ({ head, profitable_visits_list, images_url }, idx: number) => {
          if (!head && !profitable_visits_list && !images_url) return null;

          return (
            <li
              key={idx}
              className="group flex flex-col py-5 px-10 bg-[url('/images/profitable_visits/profit_decor.svg')] bg-[100%_auto] bg-no-repeat bg-left-bottom rounded-3xl overflow-hidden"
            >
              <picture>
                <source srcSet={images_url?.webp} type="image/webp" />
                <img
                  className="block m-auto mb-5 opacity-70 group-hover:opacity-100 duration-300"
                  src={images_url?.png}
                  alt=""
                  aria-hidden
                />
              </picture>
              <strong className="flex-1 text-center text-2xl mb-3">
                {head}
              </strong>
              <ul className="list-disc pb-2">
                {profitable_visits_list.map((profit, idx: number) => (
                  <li key={idx} className="[&:not(:last-child)]:mb-2">
                    {profit}
                  </li>
                ))}
              </ul>
            </li>
          );
        },
      )}
    </ul>
  );
});
