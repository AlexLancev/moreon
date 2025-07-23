import { User } from "@supabase/supabase-js";
import { makeAutoObservable, runInAction } from "mobx";

import supabase from "@/data/supabase";

export class AuthStore {
  user: User | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUser() {
    this.isLoading = true;
    try {
      const { data, error } = await supabase.auth.getUser();
      if (error) throw error;
      runInAction(() => {
        this.user = data.user;
      });
    } catch (error) {
      console.error("Auth error:", error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async logout() {
    await supabase.auth.signOut();
    runInAction(() => {
      this.user = null;
    });
  }
}

export const authStore = new AuthStore();
