import React, { useState } from "react";
import "../Homepage/Homepage.scss";
import subsetByDate from "../../../util/subsetByDate";
import logoFlier from "../../assets/logo_flier.png";

interface ShowData {
  show_date: string | number | Date;
  url: string;
  description: string;
  venue: string;
  flyer?: string;
}

interface HomepageProps {
  allData: ShowData[];
}

const Homepage: React.FC<HomepageProps> = ({ allData }) => {
  // Use the subsetByDate function to filter the data
  let data = subsetByDate(allData, "future");

  // Initialize an array for unique show dates
  const headers: (string | number | Date)[] = [];
  const seen: Record<string, boolean> = {};

  // Loop through the data to extract unique show dates
  data.forEach((el: { show_date: string | number | Date }) => {
    const dateKey = el.show_date.toString();
    if (!seen[dateKey]) {
      seen[dateKey] = true;
      headers.push(el.show_date);
    }
  });

  // State for controlling the visibility of fliers
  const [showFliers, setShowFliers] = useState(true);
  const toggleFliers = () => {
    setShowFliers(!showFliers);
  };

  // Button component for toggling flier visibility
  const showFliersButton = () => (
    <div className="button-container">
      <button onClick={toggleFliers} className="btn-toggle">
        {showFliers ? "Hide Fliers" : "Show Fliers"}
      </button>
    </div>
  );

  // Map over the headers to generate the links and show elements
  const links = headers.map((el) => {
    const shows = data.map(
      (dataItem: {
        show_date: string | number | Date;
        url: React.Key;
        description:
          | string
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
        venue:
          | string
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
        flyer: any;
      }) => {
        if (el === dataItem.show_date) {
          return (
            <div className={el.toString()} key={dataItem.url}>
              <a href={dataItem.url} target="_blank" className="show-link">
                {dataItem.description} @ {dataItem.venue}
              </a>

              {showFliers && (
                <a href={dataItem.url}>
                  <img
                    src={dataItem.flyer || logoFlier}
                    width={dataItem.flyer ? 250 : 380}
                    height={dataItem.flyer ? 300 : 205.71}
                    className="show-flyer"
                  />
                </a>
              )}
            </div>
          );
        }
        return null;
      }
    );

    return (
      <main id="main" key={el.toString()}>
        <h4 className={el.toString()}>
          {`${el.toString().substring(5, 7)}/${el
            .toString()
            .substring(8, 10)}/${el.toString().substring(0, 4)}`}
        </h4>
        {shows}
      </main>
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
