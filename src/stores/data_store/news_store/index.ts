import { makeAutoObservable } from "mobx";

class News_store {
  data: News_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: News_type[]) {
    this.data = get_data;
  }
}

export const news_store = new News_store();
