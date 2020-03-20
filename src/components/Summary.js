import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [resourses, setResourses] = useState([]);

  const fetchResource = async () => {
    const response = await axios.get(
      "https://covid19.mathdro.id/api/confirmed"
    );
    setResourses(response.data);
  };

  let confirmedSummary = 0;
  resourses.map(
    result => (confirmedSummary = confirmedSummary + result.confirmed)
  );

  let recoveredSummary = 0;
  resourses.map(
    result => (recoveredSummary = recoveredSummary + result.recovered)
  );

  let activeSummary = 0;
  resourses.map(result => (activeSummary = activeSummary + result.active));

  let deathSummary = 0;
  resourses.map(result => (deathSummary = deathSummary + result.deaths));

  useEffect(() => {
    fetchResource();
  }, []);

  return (
    <div className="ui four stackable cards">
      <div className="ui fluid orange card">
        <div className="content">
          <div className="ui center aligned orange sub header">
            Confirmed Worldwide
          </div>
        </div>
        <div className="content">
          <h1 className="ui center aligned huge header">{confirmedSummary}</h1>
        </div>
      </div>

      <div className="ui fluid green card">
        <div className="content">
          <div className="ui center aligned green sub header">
            Recovered Worldwide
          </div>
        </div>
        <div className="content">
          <h2 className="ui center aligned huge header">{recoveredSummary}</h2>
        </div>
      </div>

      <div className="ui fluid yellow card">
        <div className="content">
          <div className="ui center aligned yellow sub header">
            Active Worldwide
          </div>
        </div>
        <div className="content">
          <h2 className="ui center aligned huge header">{activeSummary}</h2>
        </div>
      </div>

      <div className="ui fluid red card">
        <div className="content">
          <div className="ui center aligned red sub header">
            Deaths Worldwide
          </div>
        </div>
        <div className="content">
          <h2 className="ui center aligned huge header">{deathSummary}</h2>
        </div>
      </div>
    </div>
  );
};

export default Summary;
