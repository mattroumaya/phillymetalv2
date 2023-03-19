import DataTable from "react-data-table-component";
import { useLoaderData } from "react-router-dom";
import subsetByDate from "../../../util/subsetByDate";
import "../ArchiveTable/ArchiveTable.scss";

const ArchiveTable = () => {
  let { allData } = useLoaderData();
  allData = subsetByDate(allData, "past");

  const columns = [
    {
      name: "Date",
      selector: (row) => row.show_date,
      sortable: true,
      width: "15%",
    },
    {
      name: "Venue",
      selector: (row) => row.venue,
      sortable: true,
      width: "20%",
    },
    {
      name: "Bands",
      selector: (row) => row.description,
      wrap: true,
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        color: "#9e07f5",
        backgroundColor: "black",
        fontSize: "20px",
      },
    },
    rows: {
      style: {
        color: "white",
        backgroundColor: "black",
        fontSize: "16px",
        fontWeight: 400,
      },
    },
  };

  return (
    <div className="archive-table">
      <DataTable
        columns={columns}
        data={allData}
        defaultSortFieldId={1}
        defaultSortAsc={false}
        customStyles={customStyles}
        highlightOnHover={true}
        dense
      />
    </div>
  );
};

export default ArchiveTable;
