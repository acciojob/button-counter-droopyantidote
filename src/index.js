import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ClickCounter from "./components/ClickCounter"; 



ReactDOM.render(  <React.StrictMode>
    <App>
      <ClickCounter /> 
    </App>
  </React.StrictMode>,
    document.getElementById("root"));
