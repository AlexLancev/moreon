import supabase from "../supabase";

export const aboutUsData = async (): Promise<AboutUsType[] | null> => {
  const { data, error } = await supabase.from("aboutUs").select("*");

  if (error) {
    throw new Error("Не удалось получить данные");
  }

  return data;
};
