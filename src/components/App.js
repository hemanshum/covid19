import React from "react";
import ResourceList from "./ResourceList";
import Summary from "./Summary";
import coronaImg from "../img/corona.png";

function App() {
  return (
    <div className="ui container spacer-vertical">
      <h1 className="ui centered header">
        <h2 className="ui centered header">
          <img src={coronaImg} width="70" height="70" alt="img" />
        </h2>
        COVID19 INFO
        <div className="sub header">
          Updates on Corona Virus Status in every Country
        </div>
      </h1>
      <div className="ui divider"></div>
      <Summary />
      <div className="ui divider"></div>
      <ResourceList />
      <div className="ui divider"></div>
      <h4 className="ui centered header">
        Developed By
        <div className="sub header">
          Hemanshu Mahajan - Pune, Maharashtra. India
        </div>
        <div className="sub header">Email - hemanshu.mahajan175@gmail.com</div>
        <div className="sub header">API provider - covid19.mathdro.id</div>
      </h4>
    </div>
  );
}

export default App;
