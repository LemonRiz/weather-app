import React from "react";
import "./Main.scss";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

const Main = ({ weather }) => {
  const weatherJson = weather.map((weatherData) => {
    console.log(weatherData);
    return (
      <WeatherCard
        className="Main"
        city={weatherData.location.name}
        temp={weatherData.current.temp_c}
        image={weatherData.current.condition.icon}
        conditions={weatherData.current.condition.text}
        
      />
    );
  });
  return <div className="Main__weatherData">{weatherJson}</div>;
};

export default Main;
