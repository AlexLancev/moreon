import { makeAutoObservable } from "mobx";

class Video_reviews_store {
  data: Video_reviews_type[] = [];
  isLoading: boolean = true;
  isError: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Video_reviews_type[]) {
    this.data = get_data;
  }
  set_isLoad(isLoad: boolean) {
    this.isLoading = isLoad;
  }
  set_isError(isError: boolean) {
    this.isError = isError;
  }
}

export const video_reviews_store = new Video_reviews_store();
