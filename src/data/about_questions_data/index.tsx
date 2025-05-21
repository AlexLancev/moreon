import supabase from "../supabase";

export const about_questions_data = async (): Promise<
  About_question_type[]
> => {
  try {
    const { data, error } = await supabase.from("about_questions").select("*");

    if (error) {
      console.error("Ошибка при получении данных:", error);
      throw new Error("Не удалось получить данные");
    }

    if (!data || data.length === 0) {
      throw new Error("Пустой ответ от сервера");
    }

    return data;
  } catch (err) {
    console.error("Произошла ошибка:", err);
    throw err;
  }
};
