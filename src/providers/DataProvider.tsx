import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ReactNode, useEffect } from "react";

import {
  aboutQuestionsData,
  aboutUsData,
  childrensSwimmingData,
  clubCardsData,
  directionsData,
  everyCardData,
  fitnessAreaData,
  galleryListData,
  heroData,
  newsData,
  otherDirectionsData,
  performanceData,
  personalFormatData,
  profitableVisitsData,
  reviewsData,
  stockData,
  teamData,
  typesServicesData,
  videoReviewsData,
  waterZoneData,
} from "@/data";
import useSession from "@/hooks/useSession";
import {
  aboutQuestionsStore,
  aboutUsStore,
  childrensSwimmingStore,
  clubCardsStore,
  directionsStore,
  everyCardStore,
  fitnessAreaStore,
  galleryListStore,
  heroStore,
  newsStore,
  otherDirectionsStore,
  performanceDataStore,
  personalFormatStore,
  profitableVisitsStore,
  reviewsStore,
  stockStore,
  teamStore,
  typesServicesStore,
  videoReviewsStore,
  waterZoneStore,
} from "@/stores/dataStore";

export const DataProvider = ({ children }: { children: ReactNode }) => {
  useSession();

  const {
    data: swimmingData,
    isLoading: swimmingIsLoading,
    isError: swimmingIsError,
  } = useQuery({
    queryKey: ["childrensSwimming"],
    queryFn: childrensSwimmingData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: otherData,
    isLoading: otherIsLoading,
    isError: otherIsError,
  } = useQuery({
    queryKey: ["otherDirections"],
    queryFn: otherDirectionsData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: formatData,
    isLoading: formatIsLoading,
    isError: formatIsError,
  } = useQuery({
    queryKey: ["personalFormat"],
    queryFn: personalFormatData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: fitnessData,
    isLoading: fitnessIsLoading,
    isError: fitnessIsError,
  } = useQuery({
    queryKey: ["fitnessArea"],
    queryFn: fitnessAreaData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: waterData,
    isLoading: waterIsLoading,
    isError: waterIsError,
  } = useQuery({
    queryKey: ["waterZone"],
    queryFn: waterZoneData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: videoData,
    isLoading: videoIsLoading,
    isError: videoIsError,
  } = useQuery({
    queryKey: ["videoReviews"],
    queryFn: videoReviewsData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: servicesData,
    isLoading: servicesIsLoading,
    isError: servicesIsError,
  } = useQuery({
    queryKey: ["typesServices"],
    queryFn: typesServicesData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: teamListData,
    isLoading: teamListIsLoading,
    isError: teamListIsError,
  } = useQuery({
    queryKey: ["team"],
    queryFn: teamData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: stockListData,
    isLoading: stockListIsLoading,
    isError: stockListIsError,
  } = useQuery({
    queryKey: ["stock"],
    queryFn: stockData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: reviewData,
    isLoading: reviewIsLoading,
    isError: reviewIsError,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: reviewsData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: questionsData,
    isLoading: questionsIsLoading,
    isError: questionsIsError,
  } = useQuery({
    queryKey: ["questions"],
    queryFn: aboutQuestionsData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: profitData,
    isLoading: profitIsLoading,
    isError: profitIsError,
  } = useQuery({
    queryKey: ["profitableVisits"],
    queryFn: profitableVisitsData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: performData,
    isLoading: performIsLoading,
    isError: performIsError,
  } = useQuery({
    queryKey: ["performanceData"],
    queryFn: performanceData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: newsListData,
    isLoading: newsListIsLoading,
    isError: newsListIsError,
  } = useQuery({
    queryKey: ["news"],
    queryFn: newsData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: galleryData,
    isLoading: galleryIsLoading,
    isError: galleryIsError,
  } = useQuery({
    queryKey: ["galleryList"],
    queryFn: galleryListData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: cardData,
    isLoading: cardIsLoading,
    isError: cardIsError,
  } = useQuery({
    queryKey: ["everyCard"],
    queryFn: everyCardData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: cardsData,
    isLoading: cardsIsLoading,
    isError: cardsIsError,
  } = useQuery({
    queryKey: ["clubCards"],
    queryFn: clubCardsData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: directData,
    isLoading: directIsLoading,
    isError: directIsError,
  } = useQuery({
    queryKey: ["directions"],
    queryFn: directionsData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: aboutData,
    isLoading: aboutIsLoading,
    isError: aboutIsError,
  } = useQuery({
    queryKey: ["aboutUs"],
    queryFn: aboutUsData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  const {
    data: heroDb,
    isLoading: hero_IsLoading,
    isError: hero_IsError,
  } = useQuery({
    queryKey: ["hero"],
    queryFn: heroData,
    staleTime: Infinity,
    retry: 3,
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (heroDb) {
      heroStore.setData(heroDb);
      heroStore.setIsLoad(hero_IsLoading);
      heroStore.setIsError(hero_IsError);
    }
  }, [heroDb, hero_IsLoading, hero_IsError]);

  useEffect(() => {
    if (swimmingData) {
      childrensSwimmingStore.setData(swimmingData);
      childrensSwimmingStore.setIsLoad(swimmingIsLoading);
      childrensSwimmingStore.setIsError(swimmingIsError);
    }
  }, [swimmingData, swimmingIsError, swimmingIsLoading]);

  useEffect(() => {
    if (otherData) {
      otherDirectionsStore.setData(otherData);
      otherDirectionsStore.setIsLoad(otherIsLoading);
      otherDirectionsStore.setIsError(otherIsError);
    }
  }, [otherData, otherIsError, otherIsLoading]);

  useEffect(() => {
    if (formatData) {
      personalFormatStore.setData(formatData);
      personalFormatStore.setIsLoad(formatIsLoading);
      personalFormatStore.setIsError(formatIsError);
    }
  }, [formatData, formatIsError, formatIsLoading]);

  useEffect(() => {
    if (fitnessData) {
      fitnessAreaStore.setData(fitnessData);
      fitnessAreaStore.setIsLoad(fitnessIsLoading);
      fitnessAreaStore.setIsError(fitnessIsError);
    }
  }, [fitnessData, fitnessIsError, fitnessIsLoading]);

  useEffect(() => {
    if (waterData) {
      waterZoneStore.setData(waterData);
      waterZoneStore.setIsLoad(waterIsLoading);
      waterZoneStore.setIsError(waterIsError);
    }
  }, [waterData, waterIsError, waterIsLoading]);

  useEffect(() => {
    if (videoData) {
      videoReviewsStore.setData(videoData);
      videoReviewsStore.setIsLoad(videoIsLoading);
      videoReviewsStore.setIsError(videoIsError);
    }
  }, [videoData, videoIsError, videoIsLoading]);

  useEffect(() => {
    if (servicesData) {
      typesServicesStore.setData(servicesData);
      typesServicesStore.setIsLoad(servicesIsLoading);
      typesServicesStore.setIsError(servicesIsError);
    }
  }, [servicesData, servicesIsError, servicesIsLoading]);

  useEffect(() => {
    if (teamListData) {
      teamStore.setData(teamListData);
      teamStore.setIsLoad(teamListIsLoading);
      teamStore.setIsError(teamListIsError);
    }
  }, [teamListData, teamListIsError, teamListIsLoading]);

  useEffect(() => {
    if (stockListData) {
      stockStore.setData(stockListData);
      stockStore.setIsLoad(stockListIsLoading);
      stockStore.setIsError(stockListIsError);
    }
  }, [stockListData, stockListIsError, stockListIsLoading]);

  useEffect(() => {
    if (reviewData) {
      reviewsStore.setData(reviewData);
      reviewsStore.setIsLoad(reviewIsLoading);
      reviewsStore.setIsError(reviewIsError);
    }
  }, [reviewData, reviewIsError, reviewIsLoading]);

  useEffect(() => {
    if (questionsData) {
      aboutQuestionsStore.setData(questionsData);
      aboutQuestionsStore.setIsLoad(questionsIsLoading);
      aboutQuestionsStore.setIsError(questionsIsError);
    }
  }, [questionsData, questionsIsError, questionsIsLoading]);

  useEffect(() => {
    if (profitData) {
      profitableVisitsStore.setData(profitData);
      profitableVisitsStore.setIsLoad(profitIsLoading);
      profitableVisitsStore.setIsError(profitIsError);
    }
  }, [profitData, profitIsError, profitIsLoading]);

  useEffect(() => {
    if (performData) {
      performanceDataStore.setData(performData);
      performanceDataStore.setIsLoad(performIsLoading);
      performanceDataStore.setIsError(performIsError);
    }
  }, [performData, performIsError, performIsLoading]);

  useEffect(() => {
    if (newsListData) {
      newsStore.setData(newsListData);
      newsStore.setIsLoad(newsListIsLoading);
      newsStore.setIsError(newsListIsError);
    }
  }, [newsListData, newsListIsError, newsListIsLoading]);

  useEffect(() => {
    if (galleryData) {
      galleryListStore.setData(galleryData);
      galleryListStore.setIsLoad(galleryIsLoading);
      galleryListStore.setIsError(galleryIsError);
    }
  }, [galleryData, galleryIsError, galleryIsLoading]);

  useEffect(() => {
    if (cardData) {
      everyCardStore.setData(cardData);
      everyCardStore.setIsLoad(cardIsLoading);
      everyCardStore.setIsError(cardIsError);
    }
  }, [cardData, cardIsError, cardIsLoading]);

  useEffect(() => {
    if (cardsData) {
      clubCardsStore.setData(cardsData);
      clubCardsStore.setIsLoad(cardsIsLoading);
      clubCardsStore.setIsError(cardsIsError);
    }
  }, [cardsData, cardsIsError, cardsIsLoading]);

  useEffect(() => {
    if (directData) {
      directionsStore.setData(directData);
      directionsStore.setIsLoad(directIsLoading);
      directionsStore.setIsError(directIsError);
    }
  }, [directData, directIsLoading, directIsError]);

  useEffect(() => {
    if (aboutData) {
      aboutUsStore.setData(aboutData);
      aboutUsStore.setIsLoad(aboutIsLoading);
      aboutUsStore.setIsError(aboutIsError);
    }
  }, [aboutData, aboutIsLoading, aboutIsError]);

  return <>{children}</>;
};
