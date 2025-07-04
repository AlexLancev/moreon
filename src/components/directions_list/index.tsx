import { toJS } from "mobx";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { isEmptyObj } from "@/utils";
import { directions_store } from "@/stores/data_store";

export const Directions_list = observer(
  ({ keys_list }: Directions_keys_type) => {
    const { data, isLoading, isError } = directions_store;

    const directions_bd = toJS(data?.[0]);

    if (
      !directions_store ||
      !directions_bd ||
      isEmptyObj(directions_bd) ||
      !keys_list ||
      keys_list.length === 0
    )
      return null;

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: Failed to fetch data</div>;

    return (
      <ul className="grid grid-cols-3 gap-6">
        {keys_list.map((current_key, idx: number) => {
          const { images_url, direction, path, description } =
            directions_bd?.[current_key] ?? {};

          if (!images_url && !direction && !path && !description) return null;

          return (
            <li
              key={idx}
              className="group min-h-[350px] overflow-hidden rounded-3xl"
            >
              <Link
                to={`/services/${path}`}
                className="relative after:absolute after:bottom-0 after:left-0 after:z-0 after:h-[140px] after:w-full after:bg-[url('/images/decor_serv.svg')] after:bg-cover after:bg-no-repeat after:opacity-80"
              >
                <picture>
                  <source srcSet={images_url?.webp} type="image/webp" />
                  <img
                    width={340}
                    height={350}
                    className="h-full w-full overflow-hidden rounded-3xl object-cover duration-700 group-hover:scale-[1.1]"
                    src={images_url?.jpg}
                    alt={description}
                    aria-label={description}
                    loading="lazy"
                  />
                </picture>
                <strong className="absolute bottom-5 left-5 z-10 text-lg text-[#d6d6d6]">
                  {direction}
                </strong>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  },
);
