import { ReactNode, ComponentType } from "react";

type CurrentStoreType<T> = {
  data: T[] | null;
  isLoading: boolean;
  isError: null | boolean;
};

type ContentLoaderType<T> = {
  currentStore: CurrentStoreType<T>;
  skeletonComponent: ComponentType<{ className?: string }>;
  children: ReactNode;
  initialVisibleCount?: number;
  isEmpty?: boolean;
  getSkeletonClassName?: string;
};

export const ContentLoader = <T,>({
  children,
  skeletonComponent: SkeletonComponent,
  currentStore,
  initialVisibleCount = 3,
  isEmpty,
  getSkeletonClassName,
}: ContentLoaderType<T>) => {
  if (!currentStore) return null;

  const { data, isLoading, isError } = currentStore;
  const objKeyListLength = data?.length;

  if (isError) {
    console.error("Не удалось получить данные. Ошибка:", isError);
    return null;
  }

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

  if (!data?.length) {
    console.error("Нет данных:", data);
    return null;
  }

  return <>{children}</>;
};

ContentLoader.displayName = "SwiperSlider";
