import axios from "axios";

const database_uri = import.meta.env.VITE_API_KEY;

if (!database_uri) {
  throw new Error("Ошибка VITE_API_KEY не найден");
}

export const profitable_visits_data = async (): Promise<
  Profitable_visits_type[] | undefined
> => {
  const response = await axios.get(`${database_uri}/profitable_visits`);
  if (response) {
    return response.data;
  }

  return;
};
