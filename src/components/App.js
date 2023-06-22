
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
  let [search, setsearch] = useState("");

  useEffect(() => {
    setsearch(suggestions.filter((city) => city.toLowerCase().includes(inputData.toLowerCase())));

  }, [inputData])
  // let suggestions = suggestions.filter((city)=> city.toLowerCase().includes(inputData.toLowerCase()));

  function handelCity(value) {
    setInputData(value);
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
      {
        inputData !== "" && search.length > 0 &&
        (
          <div className="city-container">
            {
              search.map((value, index) => (
                <li key={index} onClick={() => handelCity(value)}>{value},{''}</li>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default App
