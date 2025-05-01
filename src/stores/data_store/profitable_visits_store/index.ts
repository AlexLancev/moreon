import { makeAutoObservable } from "mobx";

class Profitable_visits_store {
  data: Profitable_visits_type[] = [];
  isLoading: boolean | null = null;
  isError: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Profitable_visits_type[]) {
    this.data = get_data;
  }
  set_isLoad(isLoad: boolean) {
    this.isLoading = isLoad;
  }
  set_isError(isError: boolean) {
    this.isError = isError;
  }
}

export const profitable_visits_store = new Profitable_visits_store();
