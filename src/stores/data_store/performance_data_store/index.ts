import { makeAutoObservable } from "mobx";

class Performance_data_store {
  data: Performance_data_type[] = [];
  isLoading: boolean = true;
  isError: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Performance_data_type[]) {
    this.data = get_data;
  }
  set_isLoad(isLoad: boolean) {
    this.isLoading = isLoad;
  }
  set_isError(isError: boolean) {
    this.isError = isError;
  }
}

export const performance_data_store = new Performance_data_store();
