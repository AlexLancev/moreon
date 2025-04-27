import { makeAutoObservable } from "mobx";

class Childrens_swimming_store {
  data: Childrens_swimming_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Childrens_swimming_type[]) {
    this.data = get_data;
  }
}

export const childrens_swimming_store = new Childrens_swimming_store();
