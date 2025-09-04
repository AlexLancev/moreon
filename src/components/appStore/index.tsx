import { cn } from "@/lib/utils";

type AppStoreDataType = {
  id: number;
  description: string;
  images: {
    webp: string;
    jpg: string;
  };
  path: string;
};

type AppStorePropsType = {
  className?: string;
};

const appStoreData: AppStoreDataType[] = [
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

export const AppStore = ({ className }: AppStorePropsType) => {
  return (
    appStoreData &&
    appStoreData.length !== 0 && (
      <ul className={cn("flex items-center gap-x-3", className)}>
        {appStoreData.map(({ path, description, images }, idx: number) => {
          if (!path && !description && !images) return null;

          return (
            <li key={idx}>
              <a
                href={path}
                title={description}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="visually-hidden">{description}</span>
                <picture>
                  <source srcSet={images?.webp} type="image/webp" />
                  <img
                    className="w-[155px] duration-300 hover:opacity-80 2xl:w-[225px]"
                    src={images?.jpg}
                    alt=""
                    loading="lazy"
                    aria-hidden
                  />
                </picture>
              </a>
            </li>
          );
        })}
      </ul>
    )
  );
};
