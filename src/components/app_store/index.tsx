import classNames from "classnames";

type App_store_data_type = {
  id: number;
  description: string;
  images: {
    webp: string;
    jpg: string;
  };
  path: string;
};

type App_store_props_type = {
  className?: string;
};

const app_store_data: App_store_data_type[] = [
  {
    id: 1,
    description: "Перейти на внешний сайт App store",
    images: {
      webp: "/images/application/appstore.webp",
      jpg: "/images/application/appstore.jpg",
    },
    path: "https://apps.apple.com/pl/app/moreon-fitness-spa/id6476145303",
  },
  {
    id: 2,
    description: "Перейти на внешний сайт Google Play",
    images: {
      webp: "/images/application/googleplay.webp",
      jpg: "/images/application/googleplay.jpg",
    },
    path: "https://play.google.com/store/apps/details?id=com.itrack.moreonfitnes179188",
  },
];

export const App_store = ({ className }: App_store_props_type) => {
  return (
    app_store_data &&
    app_store_data.length !== 0 && (
      <ul className={classNames("flex items-center gap-x-3", className)}>
        {app_store_data.map(
          ({ path, description, images, id }, idx: number) => {
            if (!path && !description && !images) return null;

            return (
              <li key={id ?? idx}>
                <a
                  href={path}
                  className="inline-flex"
                  title={description}
                  target="_blank"
                >
                  <span className="visually-hidden">{description}</span>
                  <picture>
                    <source srcSet={images?.webp} type="image/webp" />
                    <img
                      className="w-[155px] 2xl:w-[225px]"
                      src={images?.jpg}
                      alt=""
                      loading="lazy"
                      aria-hidden
                    />
                  </picture>
                </a>
              </li>
            );
          },
        )}
      </ul>
    )
  );
};
