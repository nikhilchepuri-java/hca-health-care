import React from "react";
import "../styles/TermItem.css";

const TermItem = ({ term }) => {
  return (
    <li className="term-item">
      <a href="#">{term}</a>
    </li>
  );
};

export default TermItem;
