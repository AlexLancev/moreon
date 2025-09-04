import { makeAutoObservable } from "mobx";

class PersonalFormatStore {
  data: PersonalFormatDataType[] = [];
  isLoading: boolean = true;
  isError: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setData(getData: PersonalFormatDataType[]) {
    this.data = getData;
  }
  setIsLoad(isLoad: boolean) {
    this.isLoading = isLoad;
  }
  setIsError(isError: boolean) {
    this.isError = isError;
  }
}

export const personalFormatStore = new PersonalFormatStore();
