import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Необходимо указать VITE_SUPABASE_URL и VITE_SUPABASE_KEY в переменных окружения",
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
