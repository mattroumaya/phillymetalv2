import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import Homepage from "../Homepage/Homepage";
import ArchiveTable from "../ArchiveTable/ArchiveTable";
import Newsletter from "../Newsletter/Newsletter";
import Add from "../Add/Add";
export default function SupabaseQuery() {
  const [allData, setAllData] = useState([]);

  const supabase = createClient(
    "https://itvifawsdgiynkldcfnv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0dmlmYXdzZGdpeW5rbGRjZm52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU0MDMyNzcsImV4cCI6MTk4MDk3OTI3N30.YvPD_C5yy5ELMJw-jt28uMTfwOoY7WPDeBOUy4JL0_0"
  );

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from("main")
        .select("*")
        .eq("validated", "true")
        .order("show_date");
      data = await data;
      setAllData(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Homepage allData={allData} />
      <Newsletter />
      <Add />
      <ArchiveTable allData={allData} />
    </>
  );
}
