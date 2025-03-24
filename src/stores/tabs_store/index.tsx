import { makeAutoObservable } from "mobx";

export class Tabs_store {
  isActiveTab = "";

  constructor() {
    makeAutoObservable(this);
  }

  change_tabs = (value: string) => {
    this.isActiveTab = value;
  };
}

export const tabs_store = new Tabs_store();
