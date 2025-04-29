import { makeAutoObservable } from "mobx";

class Team_store {
  data: Team_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Team_type[]) {
    this.data = get_data;
  }
}

export const team_store = new Team_store();
