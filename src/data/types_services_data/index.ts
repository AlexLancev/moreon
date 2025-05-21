import supabase from "../supabase";

export const types_services_data = async (): Promise<Types_services_type[]> => {
  try {
    const { data, error } = await supabase.from("types_services").select("*");

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
