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
  about_questions_store,
  reviews_store,
  stock_store,
  team_store,
  types_services_store,
  video_reviews_store,
  water_zone_store,
  fitness_area_store,
  personal_format_store,
  other_directions_store,
  childrens_swimming_store,
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
  about_questions_data,
  reviews_data,
  stock_data,
  team_data,
  types_services_data,
  video_reviews_data,
  water_zone_data,
  fitness_area_data,
  personal_format_data,
  other_directions_data,
  childrens_swimming_data,
} from "@/data";

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: swimming_data,
    isLoading: swimming_isLoading,
    isError: swimming_isError,
  } = useQuery({
    queryKey: ["childrens_swimming"],
    queryFn: childrens_swimming_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: other_data,
    isLoading: other_isLoading,
    isError: other_isError,
  } = useQuery({
    queryKey: ["other_directions"],
    queryFn: other_directions_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: format_data,
    isLoading: format_isLoading,
    isError: format_isError,
  } = useQuery({
    queryKey: ["personal_format"],
    queryFn: personal_format_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: fitness_data,
    isLoading: fitness_isLoading,
    isError: fitness_isError,
  } = useQuery({
    queryKey: ["fitness_area"],
    queryFn: fitness_area_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: water_data,
    isLoading: water_isLoading,
    isError: water_isError,
  } = useQuery({
    queryKey: ["water_zone"],
    queryFn: water_zone_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: video_data,
    isLoading: video_isLoading,
    isError: video_isError,
  } = useQuery({
    queryKey: ["video_reviews"],
    queryFn: video_reviews_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: services_data,
    isLoading: services_isLoading,
    isError: services_isError,
  } = useQuery({
    queryKey: ["types_services"],
    queryFn: types_services_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: team_list_data,
    isLoading: team_list_isLoading,
    isError: team_list_isError,
  } = useQuery({
    queryKey: ["team"],
    queryFn: team_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: stock_list_data,
    isLoading: stock_list_isLoading,
    isError: stock_list_isError,
  } = useQuery({
    queryKey: ["stock"],
    queryFn: stock_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: review_data,
    isLoading: review_isLoading,
    isError: review_isError,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: reviews_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: questions_data,
    isLoading: questions_isLoading,
    isError: questions_isError,
  } = useQuery({
    queryKey: ["questions"],
    queryFn: about_questions_data,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

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
    if (swimming_data) {
      childrens_swimming_store.set_data(swimming_data);
      childrens_swimming_store.set_isLoad(swimming_isLoading);
      childrens_swimming_store.set_isError(swimming_isError);
    }
  }, [swimming_data, swimming_isError, swimming_isLoading]);

  useEffect(() => {
    if (other_data) {
      other_directions_store.set_data(other_data);
      other_directions_store.set_isLoad(other_isLoading);
      other_directions_store.set_isError(other_isError);
    }
  }, [other_data, other_isError, other_isLoading]);

  useEffect(() => {
    if (format_data) {
      personal_format_store.set_data(format_data);
      personal_format_store.set_isLoad(format_isLoading);
      personal_format_store.set_isError(format_isError);
    }
  }, [format_data, format_isError, format_isLoading]);

  useEffect(() => {
    if (fitness_data) {
      fitness_area_store.set_data(fitness_data);
      fitness_area_store.set_isLoad(fitness_isLoading);
      fitness_area_store.set_isError(fitness_isError);
    }
  }, [fitness_data, fitness_isError, fitness_isLoading]);

  useEffect(() => {
    if (water_data) {
      water_zone_store.set_data(water_data);
      water_zone_store.set_isLoad(water_isLoading);
      water_zone_store.set_isError(water_isError);
    }
  }, [water_data, water_isError, water_isLoading]);

  useEffect(() => {
    if (video_data) {
      video_reviews_store.set_data(video_data);
      video_reviews_store.set_isLoad(video_isLoading);
      video_reviews_store.set_isError(video_isError);
    }
  }, [video_data, video_isError, video_isLoading]);

  useEffect(() => {
    if (services_data) {
      types_services_store.set_data(services_data);
      types_services_store.set_isLoad(services_isLoading);
      types_services_store.set_isError(services_isError);
    }
  }, [services_data, services_isError, services_isLoading]);

  useEffect(() => {
    if (team_list_data) {
      team_store.set_data(team_list_data);
      team_store.set_isLoad(team_list_isLoading);
      team_store.set_isError(team_list_isError);
    }
  }, [team_list_data, team_list_isError, team_list_isLoading]);

  useEffect(() => {
    if (stock_list_data) {
      stock_store.set_data(stock_list_data);
      stock_store.set_isLoad(stock_list_isLoading);
      stock_store.set_isError(stock_list_isError);
    }
  }, [stock_list_data, stock_list_isError, stock_list_isLoading]);

  useEffect(() => {
    if (review_data) {
      reviews_store.set_data(review_data);
      reviews_store.set_isLoad(review_isLoading);
      reviews_store.set_isError(review_isError);
    }
  }, [review_data, review_isError, review_isLoading]);

  useEffect(() => {
    if (questions_data) {
      about_questions_store.set_data(questions_data);
      about_questions_store.set_isLoad(questions_isLoading);
      about_questions_store.set_isError(questions_isError);
    }
  }, [questions_data, questions_isError, questions_isLoading]);

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
