import { makeAutoObservable } from "mobx";

class Hero_store {
  data: Data_action_type[] = [];
  isLoading: boolean = true;
  isError: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Data_action_type[]) {
    this.data = get_data;
  }
  set_isLoad(isLoad: boolean) {
    this.isLoading = isLoad;
  }
  set_isError(isError: boolean) {
    this.isError = isError;
  }
}

export const hero_store = new Hero_store();
