import React from "react";
import "./Main.scss";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

const Main = ({ weather }) => {
  const weatherJson = weather.map((weatherData) => {
    return (
      <WeatherCard
        className="Main"
        city={weatherData.name}
        temp={weatherData.temp_c}
        image={weatherData.icon}
      />
    );
  });
  return <div className="Main__weatherData">{weatherJson}</div>;
};

export default Main;
