import { makeAutoObservable } from "mobx";

class Gallery_list_store {
  data: Gallery_list_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: Gallery_list_type[]) {
    this.data = get_data;
  }
}

export const gallery_list_store = new Gallery_list_store();
