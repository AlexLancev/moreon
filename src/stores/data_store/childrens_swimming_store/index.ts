import { makeAutoObservable } from "mobx";

class Childrens_swimming_store {
  data: Childrens_swimming_type[] = [];
  isLoading: boolean | null = null;
  isError: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Childrens_swimming_type[]) {
    this.data = get_data;
  }
  set_isLoad(isLoad: boolean) {
    this.isLoading = isLoad;
  }
  set_isError(isError: boolean) {
    this.isError = isError;
  }
}

export const childrens_swimming_store = new Childrens_swimming_store();
