import { makeAutoObservable } from "mobx";

class Reviews_store {
  data: Reviews_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Reviews_type[]) {
    this.data = get_data;
  }
}

export const reviews_store = new Reviews_store();
