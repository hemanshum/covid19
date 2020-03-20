import React from "react";
import ResourceList from "./ResourceList";
import Summary from "./Summary";

function App() {
  return (
    <div className="ui container spacer-vertical">
      <h1 className="ui centered header">
        COVID19 INFO
        <div className="sub header">
          Updates on Corona Virus Status in every Country
        </div>
      </h1>
      <Summary />
      <ResourceList />
      <h4 className="ui centered header">
        Developed By
        <div className="sub header">Hemanshu Mahajan - Pune</div>
        <div className="sub header">API provider - covid19.mathdro.id</div>
      </h4>
    </div>
  );
}

export default App;
