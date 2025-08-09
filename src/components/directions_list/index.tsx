import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { directionsListDeafaultData, SkeletonGalleryGrid } from "@/constans";
import { directions_store } from "@/stores/data_store";
import { isEmptyObj } from "@/utils";

import { ContentLoader } from "../contentLoader";

export const Directions_list = observer(
  ({ keys_list, visibleElements = 3 }: Directions_keys_type) => {
    const { data } = directions_store;

    const directions_bd = toJS(data?.[0]);

    return (
      <ul className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 2xl:gap-6">
        <ContentLoader
          currentStore={directions_store}
          skeletonComponent={SkeletonGalleryGrid}
          initialVisibleCount={visibleElements}
          isEmpty={!directions_bd || isEmptyObj(data?.[0], keys_list)}
        >
          {keys_list?.map((current_key, idx: number) => {
            const {
              images_url: { webp, jpg },
              direction,
              path,
              description,
            } = directions_bd?.[current_key] ?? directionsListDeafaultData;

            if (!direction && !path && !description) return null;

            return (
              <li
                key={idx}
                className="group overflow-hidden rounded-3xl xs:min-h-[250px]"
              >
                <Link
                  to={`/services/${path}`}
                  className="relative after:absolute after:bottom-0 after:left-0 after:z-0 after:h-[45%] after:w-full after:bg-[url('/images/decor_serv.svg')] after:bg-cover after:bg-no-repeat after:opacity-80"
                >
                  <picture>
                    <source srcSet={webp} type="image/webp" />
                    <img
                      className="h-full w-full overflow-hidden rounded-3xl object-cover duration-700 group-hover:scale-[1.1]"
                      src={jpg}
                      alt={description}
                      aria-label={description}
                      loading="lazy"
                    />
                  </picture>
                  <strong className="absolute bottom-5 left-5 z-10 text-lg text-[rgb(214,214,214)] xs:text-sm xxs:text-lg xl:text-2xl 2xl:bottom-8 2xl:text-3xl 3xl:bottom-10 3xl:text-4xl">
                    {direction}
                  </strong>
                </Link>
              </li>
            );
          })}
        </ContentLoader>
      </ul>
    );
  },
);
