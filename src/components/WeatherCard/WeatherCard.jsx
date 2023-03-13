import React from "react";
import "./WeatherCard.scss";

const WeatherCard = ({ city, image, temp }) => {
  return (
    <div className="Main__weather">
      <h2 className="Main__title">The City</h2>
      <img className="Main__icon" src={image} />
      <ul>
        <li>City: {city}</li>
        <li>Temp: {temp}</li>
      </ul>
    </div>
  );
};

export default WeatherCard;
