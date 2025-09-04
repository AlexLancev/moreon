import { makeAutoObservable } from "mobx";

export class ModalStore {
  isVisibleModal = false;

  constructor() {
    makeAutoObservable(this);
  }

  changeModal = (state: boolean) => {
    this.isVisibleModal = state;
  };
}
