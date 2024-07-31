import React from "react";
import "../styles/TermItem.css";

const TermItem = ({ terms, key }) => {
  return (
    <div className="term-items" key={key}>
      {terms?.map((item, index) => {
        return (
          <div className="term-list-item" key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default TermItem;
