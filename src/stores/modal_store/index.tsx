import { makeAutoObservable } from "mobx";

export class Modal_store {
  isVisibleModal = false;

  constructor() {
    makeAutoObservable(this);
  }

  change_modal = (state: boolean) => {
    this.isVisibleModal = state;
  };
}
