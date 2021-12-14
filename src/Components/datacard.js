import React from "react";
import "./style.css";
import SearchBar from "./searchbar";

const DataCard = ({ final }) => {
  const { temp, visibility, humidity, pressure, mood, name, speed, country } =
    final;
  return (
    <>
      <section className="box">
        <div className="icons">
          <img src="./logo.gif" id="image" />
          {/* <i className={"wi wi-sunset"}></i> */}
        </div>

        <div className="section2">
          <div className="temperature">
            <span>{temp}&deg;C</span>
          </div>
          <div className="condition">
            <span>{mood}</span>
          </div>
          <div className="place">
            <span>
              {name} {country}{" "}
            </span>
          </div>
        </div>

        <div className="conditions">
          <div className="date">
            {new Date().toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </div>
        </div>
      </section>

      <div className="allInfo">
        <div className="sectionhalf">
          <div className="desc">
            {/* <i className={"wi wi-sunset"}></i> */}
            <p> V: {visibility}</p>
          </div>
          <div className="desc">
            <i className={"wi wi-humidity"}></i>
            <p>{humidity}</p>
          </div>
        </div>
        <div className="sectionhalf2">
          <div className="desc">
            <i className="fab fa-product-hunt"></i>
            <p>P: {pressure}</p>
          </div>
          <div className="desc">
            <i className={"wi wi-strong-wind"}></i>
            <p>{speed}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DataCard;
