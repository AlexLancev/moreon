import { ReactNode, ComponentType } from "react";

interface CurrentStoreType<T> {
  data: readonly T[] | null;
  isLoading: boolean;
}

interface ContentLoaderType<T> {
  currentStore: CurrentStoreType<T>;
  skeletonComponent: ComponentType<{ className?: string }>;
  children: ReactNode;
  initialVisibleCount?: number;
  isEmpty?: boolean;
  getSkeletonClassName?: string;
}

export const ContentLoader = <T,>({
  children,
  skeletonComponent: SkeletonComponent,
  currentStore,
  initialVisibleCount = 3,
  isEmpty,
  getSkeletonClassName,
}: ContentLoaderType<T>) => {
  if (!currentStore) return null;

  const { data, isLoading } = currentStore;
  const objKeyListLength = data?.length;

  if (isLoading) {
    return Array.from({ length: objKeyListLength || initialVisibleCount }).map(
      (_, idx) => (
        <SkeletonComponent className={getSkeletonClassName} key={idx} />
      ),
    );
  }

  if (isEmpty !== undefined && isEmpty) {
    return null;
  }

  return <>{children}</>;
};

ContentLoader.displayName = "SwiperSlider";
