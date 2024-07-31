import React from "react";
import "../styles/Filter.css";

const Filter = ({ selectedLetter, onLetterSelect }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="filter">
      <div className="filter-title">Treatments, Services and Specialties</div>
      <div className="filter-items">
        {letters.map((letter) => (
          <button
            key={letter}
            className={`filter-button ${
              selectedLetter === letter ? "active" : ""
            }`}
            onClick={() => onLetterSelect(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
