import { makeAutoObservable } from "mobx";

class Directions_store {
  data: Directions_type[] = [];
  isLoading: boolean = true;
  isError: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Directions_type[]) {
    this.data = get_data;
  }
  set_isLoad(isLoad: boolean) {
    this.isLoading = isLoad;
  }
  set_isError(isError: boolean) {
    this.isError = isError;
  }
}

export const directions_store = new Directions_store();
