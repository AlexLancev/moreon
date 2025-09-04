import { makeAutoObservable } from "mobx";

class ChildrensSwimmingStore {
  data: ChildrensSwimmingType[] = [];
  isLoading: boolean = true;
  isError: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setData(getData: ChildrensSwimmingType[]) {
    this.data = getData;
  }
  setIsLoad(isLoad: boolean) {
    this.isLoading = isLoad;
  }
  setIsError(isError: boolean) {
    this.isError = isError;
  }
}

export const childrensSwimmingStore = new ChildrensSwimmingStore();
