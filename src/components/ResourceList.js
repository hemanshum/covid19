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
    <div className="ui four stackable cards">
      {resourses.length === 0 ? (
        <div className="ui active centered inline inverted dimmer">
          <div className="ui massive  text  loader">
            Fetching COVID19 information, please wait...
          </div>
        </div>
      ) : (
        resourses.map((record, index) => (
          <div className="ui card" key={index}>
            <div className="extra content">
              <h1 className="center aligned header">
                <img
                  className="ui avatar image"
                  src={`https://www.countryflags.io/${record.iso2}/flat/64.png`}
                  alt=""
                />
                {record.provinceState !== null
                  ? record.provinceState + " - "
                  : null}{" "}
                {record.countryRegion}
              </h1>
              <div className="center aligned">
                <h4 className="ui grey sub header">
                  {moment(record.lastUpdate).calendar()}
                </h4>
              </div>
            </div>
            <div className="content">
              <div className="ui center aligned sub header">
                Total Confirmed{" "}
              </div>
              <div className="center aligned">
                <h1 className="ui orange header">{record.confirmed}</h1>
              </div>
              <div className="ui center aligned sub header">
                Total Recovered
              </div>
              <div className="center aligned">
                <h3 className="ui green header">{record.recovered}</h3>
              </div>
              <div className="ui center aligned sub header">Total Active</div>
              <div className="center aligned">
                <h3 className="ui yellow header">{record.active}</h3>
              </div>
              <div className="ui center aligned sub header">Total Deaths</div>
              <div className="center aligned">
                <h3 className="ui red header"> {record.deaths}</h3>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ResourceList;
