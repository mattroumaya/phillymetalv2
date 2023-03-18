import DataTable from "react-data-table-component";
import subsetByDate from "../../../util/subsetByDate";

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
      <DataTable columns={columns} data={subsetByDate(allData, "past")} />
    </>
  );
};

export default ArchiveTable;
