import axios from "axios";

const database_uri = import.meta.env.VITE_API_KEY;

if (!database_uri) {
  throw new Error("Ошибка VITE_API_KEY не найден");
}

export const every_card_data = async (): Promise<
  Every_card_type[] | undefined
> => {
  const response = await axios.get(`${database_uri}/every_card`);
  if (response) {
    return response.data;
  }

  return;
};
