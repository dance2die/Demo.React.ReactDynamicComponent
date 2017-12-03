import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const events = [
  "PushEvent",
  "PushEvent",
  "PushEvent",
  "ReleaseEvent",
  "StatusEvent",
  "BadEvent"
];
ReactDOM.render(<App events={events} />, document.getElementById("root"));
registerServiceWorker();