import React from "react";
import "../styles/SecondaryHeader.css";
import FindCare from "./FindCare";

const SecondaryHeader = () => {
  return (
    <div className="secondary-header-wrapper">
      <div className="secondary-header">
        <div className="er-time">View All ER Wait Times</div>
        <div className="secondary-header-actions">
          <div className="appointment">Make an Appointment</div>
          <div className="alerts">Alerts</div>
        </div>
      </div>
      <FindCare />
    </div>
  );
};

export default SecondaryHeader;
