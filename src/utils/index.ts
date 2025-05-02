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
  isKey: Team_tab_key_type,
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
