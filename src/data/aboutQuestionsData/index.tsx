import supabase from "../supabase";

export const aboutQuestionsData = async (): Promise<AboutQuestionType[]> => {
  const { data, error } = await supabase.from("aboutQuestions").select("*");

  if (error) {
    console.error("Ошибка при получении данных:", error);
    throw new Error("Не удалось получить данные");
  }

  return data;
};
