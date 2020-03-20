import React from "react";
import ResourceList from "./ResourceList";

function App() {
  return (
    <div className="ui container spacer-vertical">
      <h1 className="ui centered header">
        COVID19 INFO
        <div className="sub header">
          Live updates on Corona Virus Status in every Country
        </div>
      </h1>

      <ResourceList />
    </div>
  );
}

export default App;
