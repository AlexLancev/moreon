import { makeAutoObservable } from "mobx";

class ProfitableVisitsStore {
  data: ProfitableVisitsType[] = [];
  isLoading: boolean = true;
  isError: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setData(getData: ProfitableVisitsType[]) {
    this.data = getData;
  }
  setIsLoad(isLoad: boolean) {
    this.isLoading = isLoad;
  }
  setIsError(isError: boolean) {
    this.isError = isError;
  }
}

export const profitableVisitsStore = new ProfitableVisitsStore();
