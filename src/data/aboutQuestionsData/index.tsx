import supabase from "../supabase";

export const aboutQuestionsData = async (): Promise<
  AboutQuestionType[] | null
> => {
  const { data, error } = await supabase.from("aboutQuestions").select("*");

  if (error) {
    throw new Error("Не удалось получить данные");
  }

  return data;
};
