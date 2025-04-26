import { makeAutoObservable } from "mobx";

class Club_cards_store {
  data: Club_cards_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Club_cards_type[]) {
    this.data = get_data;
  }
}

export const club_cards_store = new Club_cards_store();
