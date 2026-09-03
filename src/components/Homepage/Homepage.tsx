import React, { useState, useEffect } from "react";
import "../Homepage/Homepage.scss";
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

const Homepage = () => {
  const SUBMITTED_BY_SYSTEM = "SYSTEM";
  const [showFliers, setShowFliers] = useState(true);
  const [apiData, setApiData] = useState([]);
  const toggleFliers = () => setShowFliers(!showFliers);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          "https://api.phillymetal.net/grouped-shows"
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();
        setApiData(result.groupedShows);
      } catch (error) {
        console.error("API request failed:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const links = Object.entries(apiData).map(([date, shows], index) => (
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
                <CListGroupItem>
                  {(() => {
                    const [year, month, day] =
                      dataItem.formatted_date.split("-");
                    const date = new Date(Date.UTC(year, month - 1, day)); // treat as UTC
                    const monthName = date.toLocaleString("en-US", {
                      month: "long",
                    });
                    return `${monthName} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
                  })()}
                </CListGroupItem>
              </CListGroup>
              {showFliers && (
                <CCardImage
                  orientation="top"
                  src={dataItem.flyer || logoFlier}
                  alt="Show Flyer"
                  width={250}
                  height={300}
                />
              )}
              {dataItem.submitted_by !== SUBMITTED_BY_SYSTEM && (
                <CListGroupItem className="submittedBy">
                  Show submitted by: {dataItem.submitted_by}
                </CListGroupItem>
              )}
            </CCardBody>
          </CCard>
        </a>
      ))}
    </main>
  ));

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="homepage-wrapper">
      <div className="content-wrapper">
        <CButton className="toggle-fliers-btn" onClick={toggleFliers}>
          toggle fliers
        </CButton>
        {links}
      </div>
    </div>
  );
};

export default Homepage;
