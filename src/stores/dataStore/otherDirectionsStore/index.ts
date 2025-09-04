import { makeAutoObservable } from "mobx";

class OtherDirectionsStore {
  data: OtherDirectionsType[] = [];
  isLoading: boolean = true;
  isError: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setData(getData: OtherDirectionsType[]) {
    this.data = getData;
  }
  setIsLoad(isLoad: boolean) {
    this.isLoading = isLoad;
  }
  setIsError(isError: boolean) {
    this.isError = isError;
  }
}

export const otherDirectionsStore = new OtherDirectionsStore();
