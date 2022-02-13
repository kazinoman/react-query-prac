import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import History from "./pages/history";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter history={History}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
