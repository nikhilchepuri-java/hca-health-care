import React from "react";
import "../styles/TermItem.css";

const TermItem = ({ terms, key }) => {
  return (
    <div className="term-items" key={key}>
      {terms?.map((item, index) => {
        return (
          <a className="term-list-item" key={index} href="#">
            {item}
          </a>
        );
      })}
    </div>
  );
};

export default TermItem;
