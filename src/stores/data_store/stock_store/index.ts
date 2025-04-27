import { makeAutoObservable } from "mobx";

class Stock_store {
  data: Stock_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Stock_type[]) {
    this.data = get_data;
  }
}

export const stock_store = new Stock_store();
