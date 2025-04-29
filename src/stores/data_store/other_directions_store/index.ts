import { makeAutoObservable } from "mobx";

class Other_directions_store {
  data: Other_directions_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Other_directions_type[]) {
    this.data = get_data;
  }
}

export const other_directions_store = new Other_directions_store();
