import { ReactNode, ComponentType } from "react";

type CurrentStoreType<T> = {
  data: T[];
  isLoading: boolean;
  isError: null | boolean;
};

type ContentLoaderType<T> = {
  currentStore: CurrentStoreType<T>;
  skeletonComponent: ComponentType;
  children: ReactNode;
  initialVisibleCount?: number;
  isEmpty?: boolean;
};

export const ContentLoader = <T,>({
  children,
  skeletonComponent: SkeletonComponent,
  currentStore: { data, isLoading, isError },
  initialVisibleCount = 6,
  isEmpty,
}: ContentLoaderType<T>) => {
  const objKeyListLength = data.length;

  if (isError) {
    console.error("Не удалось получить данные. Ошибка:", isError);
    return null;
  }

  if (isLoading) {
    return Array.from({ length: objKeyListLength || initialVisibleCount }).map(
      (_, idx) => <SkeletonComponent key={idx} />,
    );
  }

  if (isEmpty !== undefined && isEmpty) {
    return null;
  }

  if (!data || data.length === 0) {
    console.error("Нет данных:", data);
    return null;
  }

  return <>{children}</>;
};

ContentLoader.displayName = "SwiperSlider";
