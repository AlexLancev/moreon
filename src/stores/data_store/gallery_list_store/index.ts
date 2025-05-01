import { makeAutoObservable } from "mobx";

class Gallery_list_store {
  data: Gallery_list_type[] = [];
  isLoading: boolean | null = null;
  isError: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Gallery_list_type[]) {
    this.data = get_data;
  }
  set_isLoad(isLoad: boolean) {
    this.isLoading = isLoad;
  }
  set_isError(isError: boolean) {
    this.isError = isError;
  }
}

export const gallery_list_store = new Gallery_list_store();
