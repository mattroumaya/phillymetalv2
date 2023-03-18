import DataTable from "react-data-table-component";
import SupabaseQuery from "../SupabaseQuery/SupabaseQuery";

const ArchiveTable = ({ allData }) => {
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

  return (
    <>
      <h2>Archive</h2>
      <DataTable columns={columns} data={allData} />
    </>
  );
};

export default ArchiveTable;
