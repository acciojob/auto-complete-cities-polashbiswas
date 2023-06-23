
import React, { useEffect, useState } from "react";
import './../styles/App.css';



const App = () => {
  let suggestions = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Jaipur",
    "Ahmedabad",
    "Pune",
    "Surat",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Patna",
    "Vadodara",
    "Ludhiana"
  ];
  let [inputData, setInputData] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    setFilteredSuggestions(suggestions.filter((suggestion) => suggestion.toLowerCase().includes(inputData.toLowerCase())));

  }, [inputData])

  function handelCity(suggestion) {
    setInputData(suggestion);
  }


  return (
    <div>
      <h1>Search cities of India</h1>
      <input
        type="text"
        onChange={(e) => setInputData(e.target.value)}
        value={inputData}
        className="searchBar"
      />
      <div className="suggestions-list">
      <ul>
      {
        inputData !== "" && filteredSuggestions.length > 0 &&
        (
          <div className="city-container">
            {
              filteredSuggestions.map((suggestion) => (
                <li key={suggestion} onClick={() => handelCity(suggestion)}>{suggestion}{''}</li>
              ))
            }
          </div>
        )
      }
      </ul>
      </div>
    </div>
  )
}

export default App
