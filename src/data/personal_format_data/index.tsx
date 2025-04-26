import axios from "axios";

const database_uri = import.meta.env.VITE_API_KEY;

if (!database_uri) {
  throw new Error("Ошибка VITE_API_KEY не найден");
}

export const personal_format_data = async (): Promise<
  Personal_format_data_type[] | undefined
> => {
  const response = await axios.get(`${database_uri}/personal_format`);
  if (response) {
    return response.data;
  }

  return;
};
