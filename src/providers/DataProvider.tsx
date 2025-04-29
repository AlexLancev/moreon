import { useEffect, ReactNode } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { directions_store, about_us_store } from "@/stores/data_store";
import { directions_data, about_us_data } from "@/data";

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: direct_data,
    isLoading: direct_isLoading,
    isError: direct_isError,
  } = useQuery({
    queryKey: ["directions"],
    queryFn: directions_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: about_data,
    isLoading: about_isLoading,
    isError: about_isError,
  } = useQuery({
    queryKey: ["about_us"],
    queryFn: about_us_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (direct_data) {
      directions_store.set_data(direct_data);
      directions_store.set_isLoad(direct_isLoading);
      directions_store.set_isError(direct_isError);
    }
  }, [direct_data, direct_isLoading, direct_isError]);

  useEffect(() => {
    if (about_data) {
      about_us_store.set_data(about_data);
      about_us_store.set_isLoad(about_isLoading);
      about_us_store.set_isError(about_isError);
    }
  }, [about_data, about_isLoading, about_isError]);

  return <>{children}</>;
};
