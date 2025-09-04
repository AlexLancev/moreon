import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { AccessibleButton } from "./components/ui/accessibleButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import { Input } from "./components/ui/input";
import { BaseAccountSchema, PasswordValidationSchema } from "./schema";

interface AuthFormProps {
  onTypeSubmit: (email: string, password: string) => Promise<void>;
  submitButtonText: string;
  title: string;
  validatePassword?: boolean;
}

export const AuthForm = ({
  onTypeSubmit,
  submitButtonText,
  title,
  validatePassword = false,
}: AuthFormProps) => {
  const formSchema = validatePassword
    ? BaseAccountSchema.merge(PasswordValidationSchema)
    : BaseAccountSchema;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    onTypeSubmit(data.email, data.password);
    form.reset();
  };

  return (
    <>
      <h2>{title}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {validatePassword ? "Создайте пароль" : "Введите пароль"}
                </FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <AccessibleButton type="submit" disabled={isSubmitting}>
            {submitButtonText}
          </AccessibleButton>
        </form>
      </Form>
    </>
  );
};
