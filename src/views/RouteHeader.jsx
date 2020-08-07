import "./../assets/RouteHeader.css";
import React, { useEffect } from "react";
import "./../assets/RouteHeader.css";
import "@fortawesome/fontawesome-free/css/all.css";

const RouteHeader = () => {
  return (
    <div className="header">
      <div className="pageTitle">
        <a href="/">react-router-dom Demo</a>
      </div>
      <div className="pageList">
        <a href="/">ProgressBar</a>
        <a href="/#/FetchAPI">FetchAPI</a>
        <a href="/#/DrawGame">DrawGame</a>
      </div>
    </div>
  );
};
export default RouteHeader;
