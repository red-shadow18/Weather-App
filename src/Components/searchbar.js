import React, { useEffect, useState } from "react";
import "./style.css";
import DataCard from "./datacard";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [final, setFinal] = useState({});
  const getData = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f7deb7a2d25adc2547c9b42a8fd160a9`;
      let res = await fetch(url);
      let data = await res.json();

      console.log(data);

      const { temp, humidity, pressure } = data.main;
      const { main: mood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country } = data.sys;
      const { visibility } = data;

      const finalInfo = {
        temp,
        humidity,
        pressure,
        mood,
        name,
        speed,
        country,
        visibility,
      };

      console.log(visibility);

      setFinal(finalInfo);
      console.log(finalInfo);

      console.log(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);
  return (
    <>
      <div className="top-container">
        <div className="searchBar">
          <input
            type="search"
            placeholder="Enter City Name"
            autoFocus
            id="search"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <button className="searchButton" onClick={getData}>
            Search
          </button>
        </div>
      </div>
      <DataCard final={final} />
    </>
  );
};

export default SearchBar;
