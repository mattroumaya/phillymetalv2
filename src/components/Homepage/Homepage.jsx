import React from "react";
import "../Homepage/Homepage.scss";
import subsetByDate from "../../../util/subsetByDate";

const Homepage = ({ allData }) => {
  // query data from db
  //const data = SupabaseQuery("future");

  let data = subsetByDate(allData, "future");

  // set headers as unique show dates
  let headers = [
    ...new Set(
      data.map((el) => {
        return el.show_date;
      })
    ),
  ];

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

  return <>{links}</>;
};

export default Homepage;
