import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export async function SupabaseQuery() {
  const supabase = createClient(supabaseUrl, supabaseKey);
  async function getData() {
    let { data, error } = await supabase
      .from("main")
      .select("*")
      .eq("validated", "true")
      .order("show_date");
    return data;
  }

  return getData();
}
