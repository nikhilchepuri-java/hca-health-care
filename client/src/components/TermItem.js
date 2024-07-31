import React from "react";
import "../styles/TermItem.css";

const TermItem = ({ terms }) => {
  return (
    <div className="term-items">
      {terms?.map((item) => {
        return <div className="term-list-item">{item}</div>;
      })}
    </div>
  );
};

export default TermItem;
