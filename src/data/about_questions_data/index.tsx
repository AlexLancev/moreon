import axios from "axios";

const database_uri = import.meta.env.VITE_API_KEY;

if (!database_uri) {
  throw new Error("Ошибка VITE_API_KEY не найден");
}

export const about_questions_data = async (): Promise<
  About_question_type[] | undefined
> => {
  const response = await axios.get(`${database_uri}/about_questions`);
  if (response) {
    return response.data;
  }

  return;
};
