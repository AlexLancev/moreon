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
              className="min-h-[350px] overflow-hidden rounded-3xl group"
            >
              <Link
                to={`/services/${path}`}
                className="relative after:absolute after:bottom-0 after:left-0 after:z-0 after:w-full after:h-[140px] after:bg-[url('/images/decor_serv.svg')] after:bg-no-repeat after:bg-cover after:opacity-80"
              >
                <picture>
                  <source srcSet={images_url?.webp} type="image/webp" />
                  <img
                    width={340}
                    height={350}
                    className="overflow-hidden rounded-3xl object-cover h-full w-full duration-700 group-hover:scale-[1.1]"
                    src={images_url?.jpg}
                    alt={description}
                    aria-label={description}
                  />
                </picture>
                <strong className="absolute z-10 bottom-5 left-5 text-[#d6d6d6] text-lg">
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
