import { makeAutoObservable, runInAction } from "mobx";

import supabase from "@/data/supabase";

import { authStore } from "../auth_store";

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
        this.firstName = data.first_name ?? "";
        this.lastName = data.last_name ?? "";
        this.dateOfBirth = data.date_of_birth ?? "";
        this.phoneNumber = data.phone_number ?? "";
        this.avatarUrl = data.avatar_url ?? null;
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
        first_name: data.firstName,
        last_name: data.lastName,
        date_of_birth: data.dateOfBirth,
        phone_number: data.phoneNumber,
        avatar_url: newAvatarUrl,
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
