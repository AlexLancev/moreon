import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserFormSchema } from "@/schema";

export const Personal_account_form = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const form = useForm({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
    },
  });

  // <Calendar />

  const { isSubmitting } = form.formState;

  const onSubmit = () => {
    console.log('object')
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
