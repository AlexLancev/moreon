import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

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

// Обновите схему, добавив поле для даты рождения
type EditProfileUserDataType = {
  name: string;
  surname: string;
  phone: string;
  birthDate: string | undefined; // Добавляем поле для даты рождения
};

export const Personal_account_form = () => {
  const form = useForm<EditProfileUserDataType>({
    resolver: zodResolver(EditProfileUserFormSchema),
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      birthDate: undefined, // Добавляем начальное значение
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = (data: EditProfileUserDataType) => {
    console.log(data);
    form.reset();
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
                <FormLabel>Ваше имя</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Шаньга" />
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
                <FormLabel>Ваша фамилия</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Майонезная" />
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
                  <Input {...field} placeholder="+7 999 999 9999" />
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
        </div>

        <Button
          type="submit"
          className="customGreyBtn w-full"
          disabled={isSubmitting}
        >
          Сохранить изменения
        </Button>
      </form>
    </Form>
  );
};
