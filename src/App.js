import { React, useState, useEffect } from "react";
import Searchbox from "./components/Searchbox/Searchbox";
import "./index.css";
import Main from "./containers/Main/Main";

function App() {
  const [location, setLocation] = useState("London");
  const [data, setData] = useState([]);

  const fetchWeather = async (location) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=60403eae3c4246bab07122409231003&q=london`;
    const result = await fetch(url);
    const weatherData = await result.json();
    setData([weatherData]);
  };

  useEffect(() => {
    fetchWeather(data);
  }, [location]);

  const handleInput = (event) => {
    const newLocation = event.target.value;
    setLocation(newLocation);
  };

  return (
    <>
      <div className="App">
        <h1>Hello, World!</h1>
        <p>This is my first Fullstack project, a weather app.</p>

        <Searchbox />
      </div>
      <div>
        <Main weather={data} />
      </div>
    </>
  );
}

export default App;
