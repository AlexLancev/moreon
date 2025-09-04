import { makeAutoObservable, runInAction } from "mobx";

import supabase from "@/data/supabase";

import { authStore } from "../authStore";

export class AvatarStore {
  avatarUrl: string | null = null;
  isUploading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async uploadAvatar(file: File) {
    if (!authStore.user) return null;

    this.isUploading = true;
    try {
      const fileName = `${authStore.user.id}-${Date.now()}-${file.name}`;
      const { error } = await supabase.storage
        .from("avatars")
        .upload(fileName, file);

      if (error) throw error;

      const publicUrl = supabase.storage.from("avatars").getPublicUrl(fileName)
        .data.publicUrl;

      runInAction(() => {
        this.avatarUrl = publicUrl;
      });

      return publicUrl;
    } catch (error) {
      console.error("Avatar upload error:", error);
      return null;
    } finally {
      runInAction(() => {
        this.isUploading = false;
      });
    }
  }

  async deleteAvatar() {
    if (!this.avatarUrl || !authStore.user) return false;

    try {
      const fileName = this.avatarUrl.split("/").pop();
      if (!fileName) return false;

      const { error } = await supabase.storage
        .from("avatars")
        .remove([fileName]);

      if (error) throw error;

      runInAction(() => {
        this.avatarUrl = null;
      });

      return true;
    } catch (error) {
      console.error("Avatar delete error:", error);
      return false;
    }
  }
}

export const avatarStore = new AvatarStore();
