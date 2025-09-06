import { useGettingWindowWidth } from "@/hooks";

export const hasRequiredKeys = <T extends object, K extends keyof T>(
  obj: T,
  requiredKeys: readonly K[],
): boolean => {
  if (!obj || typeof obj !== "object") return false;

  return requiredKeys.every(
    (key) =>
      Object.prototype.hasOwnProperty.call(obj, key) &&
      obj[key] !== undefined &&
      obj[key] !== null,
  );
};

export const isEmptyObj = <T extends object, K extends keyof T = keyof T>(
  object: T,
  requiredKeys?: readonly K[],
): boolean => {
  if (!object || typeof object !== "object") return true;

  if (requiredKeys && requiredKeys.length !== 0) {
    return !hasRequiredKeys(object, requiredKeys);
  }

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      return false;
    }
  }
  return true;
};

export const filterDataByActiveTab = <
  T extends { type: object },
  K extends PropertyKey,
>(
  data: T[],
  isKey: K | null,
): T[] | null => {
  if (!Array.isArray(data)) return null;
  if (data.length === 0) return null;
  if (isKey === null) return null;

  return data.filter((item) => {
    const type = item.type as Record<K, unknown>;
    return type[isKey] === true;
  });
};

export const useGetResponsiveValue = <T>(
  defaultValue: T,
  typeObj: sizeRangesType[],
): T => {
  const innerWidth = useGettingWindowWidth();

  if (typeof defaultValue === "number" && defaultValue <= 0) {
    console.error("Некорректное значение в defaultValue");
  }

  for (const { min, max, meaning } of typeObj) {
    if ((!min || innerWidth >= min) && (!max || innerWidth <= max)) {
      return meaning as T;
    }
  }

  return defaultValue;
};

export const renderNumberSlides = <T>(
  data: T[] | null | undefined,
  count: number,
  renderSlide: (startIndex: number, endIndex: number) => JSX.Element,
): JSX.Element[] | null => {
  if (!data?.length) return null;

  if (count <= 0) {
    console.error("Некорректное значение в count");
    return null;
  }

  if (typeof renderSlide !== "function") {
    console.error("renderSlide должен быть функцией");
    return null;
  }

  const slides: JSX.Element[] = [];

  for (let index = 0; index < data.length; index += count) {
    slides.push(renderSlide(index, Math.min(index + count, data.length)));
  }

  return slides;
};

export const validateImagePath = (
  path: string,
  allowedExtensions: string[],
) => {
  if (!path) return false;
  const extensionPattern = allowedExtensions.join("|");
  const regex = new RegExp(
    `^[a-z0-9_/]+\\/[a-z0-9_]+\\.(${extensionPattern})$`,
    "i",
  );
  return regex.test(path);
};

export const createTabListConfig = <K extends string>(
  items: readonly TabListType<K>[],
  localError = "",
): {
  TAB_LIST: readonly TabListType<K>[];
  TAB_LIST_KEYS: readonly K[];
  localError?: string;
} | null => {
  if (!items?.length) {
    console.error(
      `"Ошибка конфигурации табов: В компоненте ${localError} передан пустой массив или undefined/null:"`,
      items,
    );
    return null;
  }
  return {
    TAB_LIST: items,
    TAB_LIST_KEYS: items.map(({ key }) => key),
  };
};
