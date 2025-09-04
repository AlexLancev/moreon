import { makeAutoObservable, runInAction } from "mobx";

import supabase from "@/data/supabase";

import { authStore } from "../authStore";

export class ProfileStore {
  firstName = "";
  lastName = "";
  dateOfBirth = "";
  phoneNumber = "";
  avatarUrl: string | null = null;
  isLoading = false;
  isUpdating = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchProfile() {
    if (!authStore.user) return;

    this.isLoading = true;
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", authStore.user.id)
        .single();
      if (error) throw error;

      runInAction(() => {
        this.firstName = data.firstName ?? "";
        this.lastName = data.lastName ?? "";
        this.dateOfBirth = data.dateOfBirth ?? "";
        this.phoneNumber = data.phoneNumber ?? "";
        this.avatarUrl = data.avatarUrl ?? null;
      });
    } catch (error) {
      console.error("Ошибка получения профиля:", error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async updateProfile(data: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    phoneNumber: string;
    avatarUrl?: string | null;
  }) {
    if (!authStore.user) return false;

    this.isUpdating = true;
    try {
      const newAvatarUrl =
        data.avatarUrl !== undefined ? data.avatarUrl : this.avatarUrl;

      const { error } = await supabase.from("profiles").upsert({
        id: authStore.user.id,
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: data.dateOfBirth,
        phoneNumber: data.phoneNumber,
        avatarUrl: newAvatarUrl,
      });

      if (error) throw error;

      runInAction(() => {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.dateOfBirth = data.dateOfBirth;
        this.phoneNumber = data.phoneNumber;
        this.avatarUrl = newAvatarUrl;
      });

      return true;
    } catch (error) {
      console.error("Ошибка обновления профиля:", error);
      return false;
    } finally {
      runInAction(() => {
        this.isUpdating = false;
      });
    }
  }
}

export const profileStore = new ProfileStore();
