import React, { useState } from "react";
import "../Homepage/Homepage.scss";
import subsetByDate from "../../../util/subsetByDate";
import logoFlier from "../../assets/logo_flier.png";
import {
  CCardTitle,
  CCardBody,
  CCard,
  CCardImage,
  CListGroup,
  CListGroupItem,
  CButton,
} from "@coreui/react";

const Homepage = ({ allData }) => {
  const data = subsetByDate(allData, "future");
  const [showFliers, setShowFliers] = useState(true);
  const toggleFliers = () => setShowFliers(!showFliers);

  // Group shows by unique date
  const groupedShows = data.reduce((acc, show) => {
    const dateKey = show.show_date.toString();
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(show);
    return acc;
  }, {});

  const links = Object.entries(groupedShows).map(([date, shows], index) => (
    <main id="main" key={`${date}-${index}`} className="content-block">
      {shows.map((dataItem, subIndex) => (
        <a
          href={dataItem.url}
          target="_blank"
          rel="noopener noreferrer"
          key={`link-${date}-${subIndex}`}
        >
          <CCard key={`card-${date}-${subIndex}`} className="show-card">
            <CCardBody>
              <CCardTitle className="show-description">
                {dataItem.description}
              </CCardTitle>
              <CListGroup flush>
                <CListGroupItem>{dataItem.venue}</CListGroupItem>
                <CListGroupItem>{dataItem.show_date}</CListGroupItem>
              </CListGroup>
              {showFliers && (
                <CCardImage
                  orientation="top"
                  src={dataItem.flyer || logoFlier}
                  alt="Show Flyer"
                  width={dataItem.flyer ? 250 : 380}
                  height={dataItem.flyer ? 300 : 205.71}
                />
              )}
            </CCardBody>
          </CCard>
        </a>
      ))}
    </main>
  ));

  return (
    <div className="homepage-wrapper">
      <div className="content-wrapper">
        <CButton onClick={toggleFliers}>Toggle Fliers</CButton>
        {links}
      </div>
    </div>
  );
};

export default Homepage;
