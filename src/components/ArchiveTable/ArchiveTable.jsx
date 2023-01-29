import DataTable from "react-data-table-component";
import SupabaseQuery from "../SupabaseQuery/SupabaseQuery";

const ArchiveTable = () => {
  const data = SupabaseQuery();

  const columns = [
    {
      name: "Date",
      selector: (row) => row.show_date,
    },
    {
      name: "Venue",
      selector: (row) => row.venue,
    },
    {
      name: "Bands",
      selector: (row) => row.description,
    },
  ];

  return <DataTable columns={columns} data={data} />;
};

export default ArchiveTable;
