import React from "react";
import TermItem from "./TermItem";
import "../styles/TermList.css";

const TermList = ({ terms }) => {
  return (
    <ul className="term-list">
      {(terms || []).map((term, index) => (
        <TermItem key={index} term={term} />
      ))}
    </ul>
  );
};

export default TermList;
