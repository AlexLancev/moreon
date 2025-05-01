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
) => {
  if (!Array.isArray(data)) {
    return [];
  }
  if (typeof isKey !== "string") {
    return [];
  }

  return data?.filter(({ type }) => {
    if (typeof type === "object" && type !== null && isKey in type) {
      return type[isKey];
    }
    return false;
  });
};
