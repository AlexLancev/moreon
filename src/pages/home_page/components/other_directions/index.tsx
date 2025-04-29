import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { other_directions_data } from "@/data";
import { other_directions_store } from "@/stores/data_store";
import { observer } from "mobx-react-lite";

export const Other_directions = observer(() => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["other_directions"],
    queryFn: other_directions_data,
  });

  useEffect(() => {
    if (data) {
      other_directions_store.set_data(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: Failed to fetch data</div>;

  if (
    !other_directions_store ||
    !other_directions_store.data ||
    other_directions_store.data.length === 0
  ) {
    return <div>No data available</div>;
  }

  return (
    <section className="py-12">
      <h2 className="visually-hidden">Наши другие направления</h2>
      <div className="container">
        <ul className="flex items-center justify-around gap-4">
          {other_directions_store.data.map(
            (
              { path, descriptions, images_url: { png, webp } },
              idx: number,
            ) => (
              <li key={idx}>
                <a
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={descriptions}
                >
                  <span className="visually-hidden">{descriptions}</span>
                  <picture>
                    <source srcSet={webp} type="image/webp" />
                    <img src={png} alt="" aria-hidden />
                  </picture>
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
});
