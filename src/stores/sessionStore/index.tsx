import { makeAutoObservable } from "mobx";

interface SessionStoreType {
  isActiveSession: boolean;
  setSessionActive: () => void;
  setSessionInactive: () => void;
  toggleSession: () => void;
}

class SessionStore implements SessionStoreType {
  isActiveSession = false;

  constructor() {
    makeAutoObservable(this);
  }

  setSessionActive() {
    this.isActiveSession = true;
  }

  setSessionInactive() {
    this.isActiveSession = false;
  }

  toggleSession() {
    this.isActiveSession = !this.isActiveSession;
  }
}

const sessionStore = new SessionStore();
export default sessionStore;
