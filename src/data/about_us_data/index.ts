import axios, { AxiosError } from "axios";

const database_uri = import.meta.env.VITE_API_KEY;

if (!database_uri) {
  throw new Error("Ошибка VITE_API_KEY не найден");
}

export const about_us_data = async (): Promise<About_us_type[]> => {
  try {
    const response = await axios.get<About_us_type[]>(
      `${database_uri}/about_us`,
    );

    if (!response.data || response.data.length === 0) {
      throw new Error("Получен пустой ответ от сервера.");
    }

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(`Ошибка при запросе данных: ${error.message}`);
      throw new Error(
        `Ошибка сети: ${error.response?.statusText || "Неизвестная ошибка"}`,
      );
    }

    console.error("Произошла неожиданная ошибка:", error);
    throw new Error("Не удалось получить данные.");
  }
};
