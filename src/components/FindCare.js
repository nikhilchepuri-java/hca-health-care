import React from "react";
import "../styles/SecondaryHeader.css";

const FindCare = () => {
  return (
    <div className="find-care">
      <div className="find-care-title-section">
        <h1>Find Care</h1>
        <input
          type="text"
          className="find-care-search"
          placeholder="What are you looking for?"
        />
      </div>
      <div>Need help?We're here.</div>
    </div>
  );
};

export default FindCare;
