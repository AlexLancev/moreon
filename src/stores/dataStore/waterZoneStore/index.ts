import { makeAutoObservable } from "mobx";

class WaterZoneStore {
  data: WaterZoneType[] = [];
  isLoading: boolean = true;
  isError: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setData(getData: WaterZoneType[]) {
    this.data = getData;
  }
  setIsLoad(isLoad: boolean) {
    this.isLoading = isLoad;
  }
  setIsError(isError: boolean) {
    this.isError = isError;
  }
}

export const waterZoneStore = new WaterZoneStore();
