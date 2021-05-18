import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppContainer from "./Containers/App";

import "./Theme/global.scss"

ReactDOM.render(<BrowserRouter><AppContainer /></BrowserRouter>,document.getElementById("root"));
