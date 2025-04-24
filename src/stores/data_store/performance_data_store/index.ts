import { makeAutoObservable } from "mobx";

class Performance_data_store {
  data: Performance_data_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Performance_data_type[]) {
    this.data = get_data;
  }
}

export const performance_data_store = new Performance_data_store();
