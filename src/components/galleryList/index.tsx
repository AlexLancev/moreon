import { Eye as IconEye } from "lucide-react";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import { SkeletonGalleryGrid } from "@/constans";
import { galleryListStore } from "@/stores/dataStore";

import { ContentLoader } from "../contentLoader";
import { AccessibleButton } from "../ui/accessibleButton";
import { Button } from "../ui/button";

const initialVisibleCount = 6;

export const GalleryList = observer(() => {
  const [visibleShow, setVisibleShow] = useState<number>(initialVisibleCount);
  const { data } = galleryListStore;

  const handleVisibleShow = () => {
    if (data.length > visibleShow) {
      setVisibleShow((prev) => prev + initialVisibleCount);
    }
  };

  return (
    <>
      <ul className="grid place-items-center gap-4 xxs:grid-cols-2 md:grid-cols-3 2xl:gap-6">
        <ContentLoader
          skeletonComponent={SkeletonGalleryGrid}
          currentStore={galleryListStore}
          initialVisibleCount={initialVisibleCount}
        >
          {data
            .slice(0, visibleShow)
            .map(({ description, imagesUrl: { jpg } }, idx: number) => (
              <li key={idx} className="h-full overflow-hidden rounded-3xl">
                <AccessibleButton className="block h-full">
                  <span className="visually-hidden">{description}</span>
                  <picture>
                    <source srcSet={jpg} type="image/webp" />
                    <img
                      className="h-full object-cover duration-700 hover:scale-[1.1]"
                      src={jpg}
                      alt={description}
                      loading="lazy"
                    />
                  </picture>
                </AccessibleButton>
              </li>
            ))}
        </ContentLoader>
      </ul>
      {data.length > visibleShow && (
        <Button onClick={handleVisibleShow} className="m-auto mt-10 flex">
          Показать ещё <IconEye />
        </Button>
      )}
    </>
  );
});
