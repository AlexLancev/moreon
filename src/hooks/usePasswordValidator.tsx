import { useState, useEffect } from "react";

type PasswordValidationOptions = {
  minLength?: number;
  minLowercase?: number;
  minUppercase?: number;
  minNumbers?: number;
  minSymbols?: number;
}

export const usePasswordValidator = (
  password: string,
  options?: PasswordValidationOptions,
) => {
  const [errors, setErrors] = useState<string[]>([]);

  const {
    minLength = 8,
    minLowercase = 1,
    minUppercase = 1,
    minNumbers = 1,
    minSymbols = 1,
  } = options || {};

  useEffect(() => {
    const newErrors: string[] = [];

    // Проверка длины
    if (password.length < minLength) {
      newErrors.push(`Минимум ${minLength} символов`);
    }

    // Проверка строчных букв (a-z)
    if ((password.match(/[a-z]/g) || []).length < minLowercase) {
      newErrors.push(`Хотя бы ${minLowercase} строчная буква`);
    }

    // Проверка заглавных букв (A-Z)
    if ((password.match(/[A-Z]/g) || []).length < minUppercase) {
      newErrors.push(`Хотя бы ${minUppercase} заглавная буква`);
    }

    // Проверка цифр (0-9)
    if ((password.match(/[0-9]/g) || []).length < minNumbers) {
      newErrors.push(`Хотя бы ${minNumbers} цифра`);
    }

    // Проверка спецсимволов (!@#$%^&* и т.д.)
    if ((password.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length < minSymbols) {
      newErrors.push(`Хотя бы ${minSymbols} спецсимвол (!@#$%^&*)`);
    }

    setErrors(newErrors);
  }, [password, minLength, minLowercase, minUppercase, minNumbers, minSymbols]);

  const isValid = errors.length === 0;

  return { isValid, errors };
};
