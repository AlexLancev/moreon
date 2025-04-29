import { makeAutoObservable } from "mobx";

class Profitable_visits_store {
  data: Profitable_visits_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Profitable_visits_type[]) {
    this.data = get_data;
  }
}

export const profitable_visits_store = new Profitable_visits_store();
