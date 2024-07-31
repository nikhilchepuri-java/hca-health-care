import React from "react";
import "../styles/SecondaryHeader.css";
import FindCare from "./FindCare";

const SecondaryHeader = () => {
  return (
    <div className="secondary-header-wrapper">
      <div className="secondary-header">
        <div>HCA Houston Healthcare</div>
        <div className="nav-menu">book appointment</div>
      </div>
      <FindCare />
    </div>
  );
};

export default SecondaryHeader;
