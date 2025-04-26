import { makeAutoObservable } from "mobx";

class Video_reviews_store {
  data: Video_reviews_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Video_reviews_type[]) {
    this.data = get_data;
  }
}

export const video_reviews_store = new Video_reviews_store();
