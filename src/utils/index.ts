import { useGettingWindowWidth } from "@/hooks/useGettingWindowWidth";

export const isEmptyObj = (object: object): boolean => {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      return false;
    }
  }
  return true;
};

export const filterDataByActiveTab = (
  data: Team_type[],
  isKey: Team_tab_key_type | null,
): Team_type[] | null => {
  if (!Array.isArray(data)) {
    return null;
  }
  if (typeof isKey !== "string") {
    return null;
  }

  return data.filter(({ type }) => {
    if (typeof type === "object" && type !== null && isKey in type) {
      return type[isKey];
    }
    return null;
  });
};

export const useGetResponsiveValue = <T>(
  defaultValue: T,
  typeObj: sizeRangesType[],
): T => {
  const innerWidth = useGettingWindowWidth();

  for (const { min, max, meaning } of typeObj) {
    if ((!min || innerWidth >= min) && (!max || innerWidth <= max)) {
      return meaning as T;
    }
  }

  return defaultValue;
};
