import { makeAutoObservable } from "mobx";

class Types_services_store {
  data: Types_services_type[] = [];
  isLoading: boolean | null = null;
  isError: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Types_services_type[]) {
    this.data = get_data;
  }
  set_isLoad(isLoad: boolean) {
    this.isLoading = isLoad;
  }
  set_isError(isError: boolean) {
    this.isError = isError;
  }
}

export const types_services_store = new Types_services_store();
