import SupabaseQuery from "../SupabaseQuery/SupabaseQuery";
import React from "react";

const Homepage = () => {
  // query data from db
  const data = SupabaseQuery();

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
            <a href={data.url} target="_blank">
              {data.description} @ {data.venue}
            </a>
          </div>
        );
      }
    });
    return (
      <>
        <h4 className={el}>{el}</h4>
        {shows}
      </>
    );
  });

  return <>{links}</>;
};

export default Homepage;
