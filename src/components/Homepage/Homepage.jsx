import "../Homepage/Homepage.scss";
import subsetByDate from "../../../util/subsetByDate";
import logoShiny from "../../assets/logo_shiny.png";
import React, { useState } from "react";

const Homepage = ({ allData }) => {
  let data = subsetByDate(allData, "future");

  // set headers as unique show dates
  let headers = [
    ...new Set(
      data.map((el) => {
        return el.show_date;
      })
    ),
  ];

  const [showFliers, setShowFliers] = useState(true);
  const toggleFliers = () => {
    setShowFliers(!showFliers);
  };

  const showFliersButton = () => {
    return (
      <div className="button-container">
        <button onClick={toggleFliers} className="btn-toggle">
          {showFliers ? "Hide Fliers" : "Show Fliers"}
        </button>
      </div>
    );
  };

  // map over the headers
  const links = headers.map((el) => {
    // map over all data
    const shows = data.map((data) => {
      // if the show_date is equal to the unique show date, return <a> element
      if (el === data.show_date) {
        return (
          <div className={el}>
            <a href={data.url} target="_blank" className="show-link">
              {data.description} @ {data.venue}
            </a>

            {showFliers && (
              <a href={data.url}>
                <img
                  src={data?.flyer || logoShiny}
                  width={250}
                  height={300}
                  className="show-flyer"
                />
              </a>
            )}
          </div>
        );
      }
    });
    return (
      <>
        <main id="main">
          <h4 className={el}>{`${el.substring(5, 7)}/${el.substring(
            8,
            10
          )}/${el.substring(0, 4)}`}</h4>
          {shows}
        </main>
      </>
    );
  });

  return (
    <>
      {showFliersButton()}
      {links}
    </>
  );
};

export default Homepage;
