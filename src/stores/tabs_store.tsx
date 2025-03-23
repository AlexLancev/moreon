import { makeAutoObservable } from "mobx";

class Tabs_store {
  isActiveTab = '';

  constructor() {
    makeAutoObservable(this);
  }

  change_tabs = (value: string) => {
    this.isActiveTab = value;
  };
}

export default Tabs_store;
