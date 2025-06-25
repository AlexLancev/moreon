import { observer } from "mobx-react-lite";

import { other_directions_store } from "@/stores/data_store";
import { Container } from "@/components";

export const Other_directions = observer(() => {
  const { data, isLoading, isError } = other_directions_store;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch data</div>;

  if (!other_directions_store || !data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <section className="py-12">
      <h2 className="visually-hidden">Наши другие направления</h2>
      <Container>
        <ul className="flex items-center justify-around gap-4">
          {data.map(
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
                    <img src={png} alt="" loading="lazy" aria-hidden />
                  </picture>
                </a>
              </li>
            ),
          )}
        </ul>
      </Container>
    </section>
  );
});
