import { makeAutoObservable } from "mobx";

class About_questions_store {
  data: About_question_type[] = [];
  isLoading: boolean = true;
  isError: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: About_question_type[]) {
    this.data = get_data;
  }
  set_isLoad(isLoad: boolean) {
    this.isLoading = isLoad;
  }
  set_isError(isError: boolean) {
    this.isError = isError;
  }
}

export const about_questions_store = new About_questions_store();
