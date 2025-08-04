import { useGettingWindowWidth } from "@/hooks/useGettingWindowWidth";

export const hasRequiredKeys = <T extends object, K extends keyof T>(
  obj: T,
  requiredKeys: K[],
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
  requiredKeys?: K[],
): boolean => {
  if (!object || typeof object !== "object") return true;

  if (requiredKeys) {
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
): JSX.Element[] => {
  if (!data || data.length === 0) {
    return [];
  }

  if (count <= 0) {
    console.error("Некорректное значение в count");
    return [];
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
