import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import "./styles/index.css";
import "./styles/button.css";
import axios from "axios";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "http://localhost:3000";
} else {
  axios.defaults.baseURL = "https://news-in-progress-api.herokuapp.com";
}

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
