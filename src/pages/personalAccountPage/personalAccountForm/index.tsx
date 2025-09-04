import { zodResolver } from "@hookform/resolvers/zod";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";

import { ChangeUserAvatar } from "@/components";
import { Button } from "@/components/ui/button";
import { DateBirthUser } from "@/components/ui/dateBirthUser";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EditProfileUserFormSchema } from "@/schema";
import { profileStore } from "@/stores/profileStore";

type EditProfileUserDataType = {
  name: string;
  surname: string;
  phone: string;
  birthDate: string;
  avatar: string | null;
};

export const PersonalAccountForm = observer(() => {
  const form = useForm<EditProfileUserDataType>({
    resolver: zodResolver(EditProfileUserFormSchema),
    defaultValues: {
      name: profileStore.firstName,
      surname: profileStore.lastName,
      phone: profileStore.phoneNumber,
      birthDate: profileStore.dateOfBirth || "",
      avatar: profileStore.avatarUrl,
    },
  });

  const onSubmit = async (data: EditProfileUserDataType) => {
    const success = await profileStore.updateProfile({
      firstName: data.name,
      lastName: data.surname,
      phoneNumber: data.phone,
      dateOfBirth: data.birthDate,
      avatarUrl: data.avatar,
    });

    if (success) {
      alert("Профиль успешно обновлён!");
    } else {
      alert("Ошибка при обновлении профиля");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Введите ваше имя" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Фамилия</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Введите вашу фамилию" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телефон</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="+7 (999) 999-99-99" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Дата рождения</FormLabel>
                <FormControl>
                  <DateBirthUser
                    value={field.value}
                    onChange={(dateStr) => field.onChange(dateStr)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="avatar"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Аватар</FormLabel>
                <FormControl>
                  <ChangeUserAvatar
                    value={field.value}
                    onChange={(url) => field.onChange(url)}
                    currentAvatarUrl={profileStore.avatarUrl}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={profileStore.isUpdating}
        >
          {profileStore.isUpdating ? "Сохранение..." : "Сохранить изменения"}
        </Button>
      </form>
    </Form>
  );
});
