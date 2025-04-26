import axios from "axios";

const database_uri = import.meta.env.VITE_API_KEY;

if (!database_uri) {
  throw new Error("Ошибка VITE_API_KEY не найден");
}

export const club_cards_data = async (): Promise<
  Club_cards_type[] | undefined
> => {
  const response = await axios.get(`${database_uri}/club_cards`);
  if (response) {
    return response.data;
  }

  return;
};
