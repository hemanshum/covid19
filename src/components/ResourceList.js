import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

const ResourceList = () => {
  const [resourses, setResourses] = useState([]);

  const fetchResource = async () => {
    const response = await axios.get(
      "https://covid19.mathdro.id/api/confirmed"
    );

    setResourses(response.data);
  };

  useEffect(() => {
    fetchResource();
  }, []);
  return (
    <div className="ui three stackable cards">
      {resourses.map((record, index) => (
        <div className="ui card" key={index}>
          <div className="content">
            <div className="center aligned">CONFIRMED CASES</div>
            <div className="center aligned orange header">
              {record.confirmed}
            </div>
            <div className="center aligned description">
              <p>
                {`Total recovered ${record.recovered}, Total deaths ${record.deaths}`}
                , these counts are last updated on{" "}
                {moment(record.lastUpdate).format("MMM Do YYYY")}
              </p>
            </div>
          </div>
          <div className="extra content">
            <div className="center aligned author">
              <img
                className="ui avatar image"
                src={`https://www.countryflags.io/${record.iso2}/flat/64.png`}
              />
              {record.provinceState !== null
                ? record.provinceState + " - "
                : null}{" "}
              {record.countryRegion}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourceList;
