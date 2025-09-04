import supabase from "../supabase";

export const performanceData = async (): Promise<PerformanceDataType[]> => {
  try {
    const { data, error } = await supabase.from("performanceData").select("*");

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
