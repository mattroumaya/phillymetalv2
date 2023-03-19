import Homepage from "../components/Homepage/Homepage";
import { SupabaseQuery } from "../components/SupabaseQuery/SupabaseQuery";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const allData = await SupabaseQuery();
  return { allData };
}

export default function Root() {
  const { allData } = useLoaderData();
  return (
    <>
      <div className="App">
        <Homepage allData={allData} />
      </div>
    </>
  );
}
