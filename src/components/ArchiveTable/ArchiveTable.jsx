import DataTable from "react-data-table-component";
import { useLoaderData } from "react-router-dom";
import subsetByDate from "../../../util/subsetByDate";
import "../ArchiveTable/ArchiveTable.scss";
import { useState, useEffect } from "react";
import Select from "react-select";

const ArchiveTable = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [selectedVenues, setSelectedVenues] = useState([]);
  const venueOptions = [...new Set(apiData.map((item) => item.venue))]
    .map((venue) => ({ value: venue, label: venue }))
    .sort((a, b) => a.label.localeCompare(b.label));
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleVenueChange = (selectedOptions) => {
    setSelectedVenues(selectedOptions);
  };
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("https://api.phillymetal.net/archive");

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();
        setApiData(result.data);
        setFilterData(result.data);
      } catch (error) {
        console.error("API request failed:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const searchBar = (
    <input
      type="text"
      placeholder="Search"
      value={searchQuery}
      onChange={handleSearch}
      className="search-bar"
    />
  );

  const venueFilter = (
    <Select
      isMulti
      options={venueOptions}
      className="venue-filter"
      classNamePrefix="select"
      placeholder="Filter by Venue"
      onChange={handleVenueChange}
      value={selectedVenues}
    />
  );

  useEffect(() => {
    let tempData = apiData;

    if (searchQuery !== "") {
      tempData = tempData.filter((el) => {
        return (
          el.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          el.show_date.toLowerCase().includes(searchQuery.toLowerCase()) ||
          el.venue.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    }

    if (selectedVenues.length > 0) {
      const selectedVenueValues = selectedVenues.map((option) => option.value);
      tempData = tempData.filter((el) =>
        selectedVenueValues.includes(el.venue)
      );
    }

    setFilterData(tempData);
  }, [searchQuery, selectedVenues, apiData]);

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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="archive-table">
      <div className="filter-container">
        {searchBar}
        {venueFilter}
      </div>
      <DataTable
        columns={columns}
        data={filterData}
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
