import { makeAutoObservable } from "mobx";

type SessionStoreType = {
  isActiveSession: boolean;
  setSessionActive: () => void;
  setSessionInactive: () => void;
  toggleSession: () => void;
};

class SessionStore implements SessionStoreType {
  // Наблюдаемое свойство для статуса сессии
  isActiveSession = false;

  constructor() {
    // Делаем свойства и методы наблюдаемыми
    makeAutoObservable(this);
  }

  // Метод для установки активной сессии
  setSessionActive() {
    this.isActiveSession = true;
  }

  // Метод для завершения сессии
  setSessionInactive() {
    this.isActiveSession = false;
  }

  // Метод для переключения состояния сессии
  toggleSession() {
    this.isActiveSession = !this.isActiveSession;
  }
}

// Экспортируем экземпляр хранилища
const session_store = new SessionStore();
export default session_store;
