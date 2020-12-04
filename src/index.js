import React from "react";
import ReactDOM from "react-dom";
import Display from "./components/Display";
import EagerDisplay from "./components/EagerDisplay";

const App = () => (
  <div>
    <Display />
    <EagerDisplay />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
