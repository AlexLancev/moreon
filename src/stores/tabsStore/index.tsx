import { makeAutoObservable } from "mobx";

export class TabsStore<K> {
  isActiveTab: K;

  constructor(initialActiveTab: K) {
    makeAutoObservable(this);
    this.isActiveTab = initialActiveTab;
  }

  changeTabs = (value: K) => {
    this.isActiveTab = value;
  };
}
