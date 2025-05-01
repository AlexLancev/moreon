import { useEffect, ReactNode } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import {
  directions_store,
  about_us_store,
  club_cards_store,
  every_card_store,
  gallery_list_store,
  news_store,
  performance_data_store,
  profitable_visits_store,
} from "@/stores/data_store";
import {
  directions_data,
  about_us_data,
  club_cards_data,
  every_card_data,
  gallery_list_data,
  news_data,
  performance_data,
  profitable_visits_data,
} from "@/data";

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: profit_data,
    isLoading: profit_isLoading,
    isError: profit_isError,
  } = useQuery({
    queryKey: ["profitable_visits"],
    queryFn: profitable_visits_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: perform_data,
    isLoading: perform_isLoading,
    isError: perform_isError,
  } = useQuery({
    queryKey: ["performance_data"],
    queryFn: performance_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: news_list_data,
    isLoading: news_list_isLoading,
    isError: news_list_isError,
  } = useQuery({
    queryKey: ["news"],
    queryFn: news_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: gallery_data,
    isLoading: gallery_isLoading,
    isError: gallery_isError,
  } = useQuery({
    queryKey: ["gallery_list"],
    queryFn: gallery_list_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: card_data,
    isLoading: card_isLoading,
    isError: card_isError,
  } = useQuery({
    queryKey: ["every_card"],
    queryFn: every_card_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: cards_data,
    isLoading: cards_isLoading,
    isError: cards_isError,
  } = useQuery({
    queryKey: ["club_cards"],
    queryFn: club_cards_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

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
    if (profit_data) {
      profitable_visits_store.set_data(profit_data);
      profitable_visits_store.set_isLoad(profit_isLoading);
      profitable_visits_store.set_isError(profit_isError);
    }
  }, [profit_data, profit_isError, profit_isLoading]);

  useEffect(() => {
    if (perform_data) {
      performance_data_store.set_data(perform_data);
      performance_data_store.set_isLoad(perform_isLoading);
      performance_data_store.set_isError(perform_isError);
    }
  }, [perform_data, perform_isError, perform_isLoading]);

  useEffect(() => {
    if (news_list_data) {
      news_store.set_data(news_list_data);
      news_store.set_isLoad(news_list_isLoading);
      news_store.set_isError(news_list_isError);
    }
  }, [news_list_data, news_list_isError, news_list_isLoading]);

  useEffect(() => {
    if (gallery_data) {
      gallery_list_store.set_data(gallery_data);
      gallery_list_store.set_isLoad(gallery_isLoading);
      gallery_list_store.set_isError(gallery_isError);
    }
  }, [gallery_data, gallery_isError, gallery_isLoading]);

  useEffect(() => {
    if (card_data) {
      every_card_store.set_data(card_data);
      every_card_store.set_isLoad(card_isLoading);
      every_card_store.set_isError(card_isError);
    }
  }, [card_data, card_isError, card_isLoading]);

  useEffect(() => {
    if (cards_data) {
      club_cards_store.set_data(cards_data);
      club_cards_store.set_isLoad(cards_isLoading);
      club_cards_store.set_isError(cards_isError);
    }
  }, [cards_data, cards_isError, cards_isLoading]);

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
