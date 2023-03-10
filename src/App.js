import React from "react";
import Searchbox from "./components/Searchbox/Searchbox";
import "./index.css";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  return (
    <>
      <div className="App">
        <h1>Hello, World!</h1>
        <p>This is my first Fullstack project, a weather app.</p>

        <Searchbox />
      </div>
      <WeatherCard />
    </>
  );
}

export default App;
