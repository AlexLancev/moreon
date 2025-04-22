import * as z from "zod";

export const UserFormSchema = z.object({
  phone: z
    .string()
    .regex(
      /^(?:\+7|8)\s?(?:\(\d{3}\)|\d{3})(?:[\s-]?\d+)*$/,
      "Номер телефона должен начинаться с +7 или 8, скобки должны быть парными, пробелов или дефисов не должно быть больше 2-х подряд",
    )
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length === 11;
    }, "Номер телефона должен содержать ровно 11 цифр"),
  name: z
    .string()
    .min(2, {
      message: "Имя должно содержать минимум 2 символа",
    })
    .regex(
      /^[a-zA-Zа-яА-ЯёЁ]+$/,
      "Имя не должно содержать цифр или специальных символов",
    ),
  comment: z.string(),
});
