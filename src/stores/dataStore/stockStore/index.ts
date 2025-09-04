import { makeAutoObservable } from "mobx";

class StockStore {
  data: StockType[] = [];
  isLoading: boolean = true;
  isError: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setData(getData: StockType[]) {
    this.data = getData;
  }
  setIsLoad(isLoad: boolean) {
    this.isLoading = isLoad;
  }
  setIsError(isError: boolean) {
    this.isError = isError;
  }
}

export const stockStore = new StockStore();
