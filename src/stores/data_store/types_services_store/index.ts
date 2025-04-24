import { makeAutoObservable } from "mobx";

class Types_services_store {
  data: Types_services_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Types_services_type[]) {
    this.data = get_data;
  }
}

export const types_services_store = new Types_services_store();
