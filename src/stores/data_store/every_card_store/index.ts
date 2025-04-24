import { makeAutoObservable } from "mobx";

class Every_card_store {
  data: Every_card_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Every_card_type[]) {
    this.data = get_data;
  }
}

export const every_card_store = new Every_card_store();
