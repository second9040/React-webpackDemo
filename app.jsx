import React from "react";
import ReactDOM from "react-dom";
import DrawGame from "./src/views/DrawGame.jsx";
import ProgressBar from "./src/views/ProgressBar.jsx";
import FetchAPI from "./src/views/FetchAPI.jsx";
import RouteHeader from "./src/views/RouteHeader.jsx";
import "./index.js";
import { HashRouter, Route, Switch } from "react-router-dom";
ReactDOM.render(
  <div>
    <RouteHeader />
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ProgressBar} />
        <Route path="/FetchAPI" component={FetchAPI} />
        <Route path="/DrawGame" component={DrawGame} />
      </Switch>
    </HashRouter>
  </div>,
  document.getElementById("root")
);
