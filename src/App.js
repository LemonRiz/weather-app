import { React, useState, useEffect } from "react";
import Searchbox from "./components/Searchbox/Searchbox.jsx";
import "./index.css";
import Main from "./containers/Main/Main.jsx";

function App() {
  const [location, setLocation] = useState("Manc");
  const [data, setData] = useState([]);

  const fetchWeather = async (location) => {
    if (location === "") {
      return;
    }
    let url = `http://api.weatherapi.com/v1/current.json?key=60403eae3c4246bab07122409231003&q=${location}`;
    const result = await fetch(url);
    if (result.status === 200) {
      const weatherData = await result.json();
      setData([weatherData]);
      console.log(weatherData);
    }
  };
  const handleInput = (event) => {
    setLocation(event.target.value);
  };

  useEffect(() => {
    fetchWeather(location, handleInput);
  }, [location]);

  return (
    <>
      <div className="App">
        <h1>Hello, World!</h1>

        <p>This is my first Fullstack project, a weather app.</p>

        <Searchbox value={location} onInput={handleInput} />
      </div>
      <div>
        <Main weather={data} />
      </div>
    </>
  );
}

export default App;
