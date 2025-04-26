import { makeAutoObservable } from "mobx";

class Water_zone_store {
  data: Water_zone_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Water_zone_type[]) {
    this.data = get_data;
  }
}

export const water_zone_store = new Water_zone_store();
