import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function SupabaseQuery(dateRange) {
  const [allData, setAllData] = useState([]);

  const supabase = createClient(
    "https://itvifawsdgiynkldcfnv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0dmlmYXdzZGdpeW5rbGRjZm52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU0MDMyNzcsImV4cCI6MTk4MDk3OTI3N30.YvPD_C5yy5ELMJw-jt28uMTfwOoY7WPDeBOUy4JL0_0"
  );

  const datenow = new Date().toISOString();

  useEffect(() => {
    async function getData() {
      if (dateRange === "future") {
        let { data, error } = await supabase
          .from("main")
          .select("*")
          .gte("show_date", `${datenow}`)
          .eq("validated", "true")
          .order("show_date");
        data = await data;
        setAllData(data);
      } else if (dateRange === "past") {
        let { data, error } = await supabase
          .from("main")
          .select("*")
          .lt("show_date", `${datenow}`)
          .eq("validated", "true")
          .order("show_date");
        data = await data;
        setAllData(data);
      }
    }
    getData();
  }, [allData]);

  return allData;
}
