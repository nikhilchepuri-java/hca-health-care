import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SecondaryHeader from "./components/SecondaryHeader";
import TermList from "./components/TermList";
import Filter from "./components/Filter";
import "./App.css";
import Footer from "./components/Footer";
const App = () => {
  const [terms, setTerms] = useState([]);
  const [responsedata, setResponseData] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState(["A"]);

  useEffect(() => {
    fetch("/hca-health-care/data.json")
      .then((response) => response.json())
      .then((data) => {
        setTerms(
          data?.termList?.filter(
            (item) => item?.title[0]?.toUpperCase() === "A"
          )
        );
        setResponseData(data?.termList);
      });
  }, []);

  return (
    <div className="app">
      <div className="primary-section">
        <Header />
        <SecondaryHeader />
        <Filter
          selectedLetter={selectedLetter}
          onLetterSelect={setSelectedLetter}
          terms={terms}
          data={responsedata}
          setTerms={setTerms}
        />
        <TermList terms={terms} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
