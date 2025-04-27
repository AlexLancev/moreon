import axios from "axios";

const database_uri = import.meta.env.VITE_API_KEY;

if (!database_uri) {
  throw new Error("Ошибка VITE_API_KEY не найден");
}

export const childrens_swimming_data = async (): Promise<
  Childrens_swimming_type[] | undefined
> => {
  const response = await axios.get(`${database_uri}/childrens_swimming`);
  if (response) {
    return response.data;
  }

  return;
};
