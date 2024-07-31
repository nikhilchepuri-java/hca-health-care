import React from "react";
import TermItem from "./TermItem";
import "../styles/TermList.css";

const TermList = ({ terms }) => {
  const onlyItem = (terms || [])?.map((item) => item?.title);
  const groupedData = (onlyItem || [])?.reduce((acc, item) => {
    const firstLetter = item[0]?.toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    } else {
      acc[firstLetter].push(item);
    }
    return acc;
  }, {});
  return (
    <div className="term-list-wrapper">
      {Object.keys(groupedData)?.map((key, index) => (
        <div className="term-list">
          <h2 className="term-header">{key}</h2>
          <TermItem key={index} terms={groupedData[key]} />
        </div>
      ))}
    </div>
  );
};

export default TermList;
