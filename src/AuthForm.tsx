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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegistrationAccountFormSchema } from "./schema";

type AuthFormProps = {
  onTypeSubmit: (email: string, password: string) => Promise<void>;
  submitButtonText: string;
  title: string;
};

type AuthFormType = {
  email: string;
  password: string;
};

type DataType = {
  email: string;
  password: string;
};

export const AuthForm = ({
  onTypeSubmit,
  submitButtonText,
  title,
}: AuthFormProps) => {
  const form = useForm<AuthFormType>({
    resolver: zodResolver(RegistrationAccountFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = (data: DataType) => {
    console.log(data);
    onTypeSubmit(data.email, data.password);
    form.reset();
  };

  return (
    <div>
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
                  <Input {...field} />
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
                <FormLabel>Введите пароль</FormLabel>
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
    </div>
  );
};
