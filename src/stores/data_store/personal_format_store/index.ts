import { makeAutoObservable } from "mobx";

class Personal_format_store {
  data: Personal_format_data_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Personal_format_data_type[]) {
    this.data = get_data;
  }
}

export const personal_format_store = new Personal_format_store();
