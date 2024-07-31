import React from "react";
import "../styles/Filter.css";

const Filter = ({ selectedLetter, onLetterSelect }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="filter">
      <h3 className="filter-title">Treatments, Services and Specialties</h3>
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
