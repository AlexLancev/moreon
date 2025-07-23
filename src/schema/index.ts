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

export const EditProfileUserFormSchema = z.object({
  phone: z
    .string()
    .regex(
      /^(?:\+7|8)\s?(?:\(\d{3}\)|\d{3})(?:[\s-]?\d+)*$/,
      "Номер телефона должен начинаться с +7 или 8",
    )
    .refine(
      (value) => value.replace(/\D/g, "").length === 11,
      "Номер должен содержать 11 цифр",
    ),
  name: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .regex(
      /^[a-zA-Zа-яА-ЯёЁ]+$/,
      "Имя не должно содержать цифр или специальных символов",
    ),
  surname: z
    .string()
    .min(2, "Фамилия должна содержать минимум 2 символа")
    .regex(
      /^[a-zA-Zа-яА-ЯёЁ]+$/,
      "Фамилия не должна содержать цифр или специальных символов",
    ),
  birthDate: z
    .string({
      required_error: "Введите полную дату своего дня рождения",
    })
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Дата должна быть в формате ГГГГ-ММ-ДД") // Новое регулярное выражение
    .refine(
      (dateStr) => {
        const [year, month, day] = dateStr.split("-").map(Number);
        const date = new Date(year, month - 1, day);

        if (isNaN(date.getTime())) return false;

        const today = new Date();
        const age = today.getFullYear() - year;
        const monthDiff = today.getMonth() - (month - 1);
        const dayDiff = today.getDate() - day;

        const actualAge =
          monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? age - 1 : age;

        return actualAge >= 14 && actualAge <= 99;
      },
      {
        message: "Возраст должен быть от 14 до 99 лет",
      },
    ),
  avatar: z
    .string({ message: "Avatar должен быть строкой" })
    .refine(
      (value) => {
        const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/.*)?$/;
        const base64Regex = /^data:image\/(jpeg|png|webp);base64,/;
        return urlRegex.test(value) || base64Regex.test(value);
      },
      {
        message:
          "Avatar должен быть URL изображения или base64-строкой (.jpg, .png, .webp)",
      },
    )
    .optional()
    .nullable(),
});
