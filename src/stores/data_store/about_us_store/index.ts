import { makeAutoObservable } from "mobx";

class About_us_store {
  data: About_us_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: About_us_type[]) {
    this.data = get_data;
  }
}

export const about_us_store = new About_us_store();
