
import React, { useEffect, useState } from "react";
import './../styles/App.css';

let cities = [
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
]

const App = () => {
  let [inputData, setInputData] = useState("");
  let [search, setsearch] = useState("");

  useEffect(() => {
    setsearch(cities.filter((city) => city.toLowerCase().includes(inputData.toLowerCase())));

  }, [inputData])
  // let suggestions = cities.filter((city)=> city.toLowerCase().includes(inputData.toLowerCase()));

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
                <p key={index} onClick={() => handelCity(value)}>{value},{''}</p>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default App
