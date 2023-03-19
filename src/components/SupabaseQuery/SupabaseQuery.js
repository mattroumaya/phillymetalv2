import { createClient } from "@supabase/supabase-js";

export async function SupabaseQuery() {
  const supabase = createClient(
    "https://itvifawsdgiynkldcfnv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0dmlmYXdzZGdpeW5rbGRjZm52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU0MDMyNzcsImV4cCI6MTk4MDk3OTI3N30.YvPD_C5yy5ELMJw-jt28uMTfwOoY7WPDeBOUy4JL0_0"
  );

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
