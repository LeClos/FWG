import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "./Header";
import Score from "./ScoreChoice";
import * as serviceWorker from "./serviceWorker";
import vanilla from "./app1";

ReactDOM.render(<Header />, document.getElementById("root"));
ReactDOM.render(<Score />, document.getElementById("score"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
