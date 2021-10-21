import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import "./styles/index.css";
import "./styles/button.css";


window.store = store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
