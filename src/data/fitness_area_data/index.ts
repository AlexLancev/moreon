import axios, { AxiosError } from "axios";

const database_uri = import.meta.env.VITE_API_KEY;

if (!database_uri) {
  throw new Error("VITE_API_KEY не найден. Проверьте настройки окружения.");
}

export const fitness_area_data = async (): Promise<Fitness_area_type[]> => {
  try {
    const response = await axios.get<Fitness_area_type[]>(
      `${database_uri}/fitness_area`,
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
