import DataTable from "react-data-table-component";
import { useLoaderData } from "react-router-dom";
import subsetByDate from "../../../util/subsetByDate";
import "../ArchiveTable/ArchiveTable.scss";
import { useState, useEffect } from "react";

const ArchiveTable = () => {
  let { allData } = useLoaderData();
  allData = subsetByDate(allData, "past");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterData, setFilterData] = useState(allData);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchBar = (
    <input
      type="text"
      placeholder="Search"
      value={searchQuery}
      onChange={handleSearch}
      className="search-bar"
    />
  );

  useEffect(() => {
    if (searchQuery !== "") {
      let tempData = allData.filter((el) => {
        return (
          el.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          el.show_date.toLowerCase().includes(searchQuery.toLowerCase()) ||
          el.venue.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setFilterData(tempData);
    } else {
      setFilterData(allData);
    }
  }, [searchQuery]);

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
        data={filterData}
        defaultSortFieldId={1}
        defaultSortAsc={false}
        customStyles={customStyles}
        highlightOnHover={true}
        dense
        subHeader
        subHeaderComponent={searchBar}
      />
    </div>
  );
};

export default ArchiveTable;
