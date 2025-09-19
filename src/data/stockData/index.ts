import supabase from "../supabase";

export const stockData = async (): Promise<StockType[] | null> => {
  const { data, error } = await supabase.from("stock").select("*");

  if (error) {
    throw new Error("Не удалось получить данные");
  }

  return data;
};
