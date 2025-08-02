import { ReactNode } from "react";

type CurrentStoreType<T> = {
  data: T[];
  isLoading: boolean;
  isError: null | boolean;
};

type ContentLoaderType<T> = {
  children: ReactNode;
  skeleton: ReactNode;
  currentStore: CurrentStoreType<T>;
  initialVisibleCount?: number;
};

export const ContentLoader = <T,>({
  children,
  skeleton,
  currentStore: { data, isLoading, isError },
  initialVisibleCount = 6,
}: ContentLoaderType<T>) => {
  if (isError) {
    console.error("Не удалось получить данные. Ошибка:", isError);
    return null;
  }

  if (isLoading) {
    return Array.from({ length: initialVisibleCount }).map((_, idx) => (
      <li key={idx} className="w-full">
        {skeleton}
      </li>
    ));
  }

  if (!data || data.length === 0) {
    console.error("Нет данных:", data);
    return null;
  }

  return children;
};
