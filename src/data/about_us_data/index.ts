import axios from "axios";

const database_uri = import.meta.env.VITE_API_KEY;

if (!database_uri) {
  throw new Error("Ошибка VITE_API_KEY не найден");
}

export const about_us_data = async (): Promise<About_us_type[] | undefined> => {
  const response = await axios.get(`${database_uri}/about_us`);
  if (response) {
    return response.data;
  }

  return;
};
