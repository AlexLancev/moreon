import { makeAutoObservable } from "mobx";

class About_questions_store {
  data: About_question_type[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  set_data(get_data: About_question_type[]) {
    this.data = get_data;
  }
}

export const about_questions_store = new About_questions_store();

