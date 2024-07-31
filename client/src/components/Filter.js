import React from "react";
import "../styles/Filter.css";

const Filter = ({ selectedLetter, onLetterSelect, terms, setTerms, data }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const handleToggle = (letter) => {
    onLetterSelect((prevLetter) => {
      if (prevLetter.includes(letter)) {
        const prepareData = terms?.filter(
          (item) => item?.title[0]?.toUpperCase() !== letter
        );
        setTerms(prepareData);
        return prevLetter.filter((item) => item !== letter);
      } else {
        const prepareData = data?.filter(
          (item) => item?.title[0]?.toUpperCase() == letter
        );
        setTerms([...terms, ...prepareData]);
        return [...prevLetter, letter];
      }
    });
  };
  return (
    <div className="filter">
      <h3 className="filter-title">Treatments, Services and Specialties</h3>
      <div className="filter-items">
        {letters.map((letter) => (
          <button
            key={letter}
            className={`filter-button ${
              selectedLetter.includes(letter) ? "active" : ""
            }`}
            onClick={() => handleToggle(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
