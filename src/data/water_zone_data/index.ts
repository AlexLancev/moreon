import supabase from "../supabase";

export const water_zone_data = async (): Promise<Water_zone_type[]> => {
  try {
    const { data, error } = await supabase.from("water_zone").select("*");

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
