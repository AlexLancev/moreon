import supabase from "../supabase";

export const stockData = async (): Promise<StockType[] | null> => {
  const { data } = await supabase.from("stock").select("*");
  return data;
};
