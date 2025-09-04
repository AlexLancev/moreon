import { makeAutoObservable } from "mobx";

class ReviewsStore {
  data: ReviewsType[] = [];
  isLoading: boolean = true;
  isError: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setData(getData: ReviewsType[]) {
    this.data = getData;
  }
  setIsLoad(isLoad: boolean) {
    this.isLoading = isLoad;
  }
  setIsError(isError: boolean) {
    this.isError = isError;
  }
}

export const reviewsStore = new ReviewsStore();
