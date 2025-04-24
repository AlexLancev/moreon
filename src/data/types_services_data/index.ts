import axios from "axios";

const database_uri = import.meta.env.VITE_API_KEY;

if (!database_uri) {
  throw new Error("Ошибка VITE_API_KEY не найден");
}

export const types_services_data = async (): Promise<
  Types_services_type[] | undefined
> => {
  const response = await axios.get(`${database_uri}/types_services`);
  if (response) {
    return response.data;
  }
  return;
};
