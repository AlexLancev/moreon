import axios from "axios";

const database_uri = import.meta.env.VITE_API_KEY;

if (!database_uri) {
  throw new Error("Ошибка VITE_API_KEY не найден");
}

export const fitness_area_data = async (): Promise<
  Fitness_area_type[] | undefined
> => {
  const response = await axios.get(`${database_uri}/fitness_area`);
  if (response) {
    return response.data;
  }

  return;
};
