import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import supabase from "@/data/supabase";

interface ChangeUserAvatarProps {
  value: string | null;
  onChange: (url: string | null) => void;
  currentAvatarUrl: string | null;
  disabled?: boolean;
}

export const ChangeUserAvatar = ({
  value,
  onChange,
  currentAvatarUrl,
  disabled = false,
}: ChangeUserAvatarProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;

    setIsUploading(true);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      const fileName = `avatar-${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from("avatars").getPublicUrl(fileName);

      onChange(publicUrl);
    } catch (error) {
      console.error("Ошибка загрузки аватара:", error);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
            disabled={disabled || isUploading}
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            disabled={disabled || isUploading}
          >
            {value || currentAvatarUrl ? "Изменить" : "Загрузить"}
          </Button>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        Рекомендуемый размер: 400×400 px. Форматы: JPG, PNG, WEBP.
      </p>
    </div>
  );
};
