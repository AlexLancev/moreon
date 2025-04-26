import { makeAutoObservable } from "mobx";

class Fitness_area_store {
  data: Fitness_area_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Fitness_area_type[]) {
    this.data = get_data;
  }
}

export const fitness_area_store = new Fitness_area_store();
