import { makeAutoObservable } from "mobx";

export class TabsStore {
  isActiveTab = "";

  constructor() {
    makeAutoObservable(this);
  }

  changeTabs = (value: string) => {
    this.isActiveTab = value;
  };
}
