import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SecondaryHeader from "./components/SecondaryHeader";
import TermList from "./components/TermList";
import Filter from "./components/Filter";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  const [terms, setTerms] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setTerms(data));
  }, []);

  return (
    <div className="app">
      <div className="primary-section">
        <Header />
        <SecondaryHeader />
        <Filter
          selectedLetter={selectedLetter}
          onLetterSelect={setSelectedLetter}
        />
        <TermList terms={terms?.termList} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
