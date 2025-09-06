import { useMemo } from "react";

import { getTabsStore } from "@/stores";

export const useTabsStore = <K>(initialActiveTab: K) => {
  const store = useMemo(() => {
    return getTabsStore<K>(initialActiveTab);
  }, [initialActiveTab]);

  return store;
};
