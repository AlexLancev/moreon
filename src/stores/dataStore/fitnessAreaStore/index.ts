import { makeAutoObservable } from "mobx";

class FitnessAreaStore {
  data: FitnessAreaType[] = [];
  isLoading: boolean = true;
  isError: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setData(getData: FitnessAreaType[]) {
    this.data = getData;
  }
  setIsLoad(isLoad: boolean) {
    this.isLoading = isLoad;
  }
  setIsError(isError: boolean) {
    this.isError = isError;
  }
}

export const fitnessAreaStore = new FitnessAreaStore();
