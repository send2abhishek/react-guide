import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import Counters from "./components/counters";

// bable used to convert this using React.CreateElement()
//const element = <h1>Abhishek Aryan</h1>;

// render method used to display ui to browser
ReactDom.render(<Counters />, document.getElementById("root"));
