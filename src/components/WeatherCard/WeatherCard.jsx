import React from "react";
import "./WeatherCard.scss";

const WeatherCard = ({ city, image, temp, conditions }) => {
  return (
    <div className="Main__weather">
      <h2 className="Main__title">{city}</h2>
      <img className="Main__icon" src={image} />
      <p>{conditions}</p>
      <p>Temperature: {temp} °C</p>
    </div>
  );
};

export default WeatherCard;
