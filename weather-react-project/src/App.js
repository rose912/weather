import React, { useState } from "react";
import axios from "axios";

export default function App() {
  let [city, setCity] = useState(" ");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3f6be1c407b0d9d1933561808db358ba&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} placeholder="Enter a city.." />
      <input type="submit" value="search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div>
          <p>🌡️ Temperature: {Math.round(weather.temperature)}°C</p>
          <p>🌥️ Weather: {weather.description}</p>
          <p>💧 Humidity: {weather.humidity}%</p>
          <p>🌬️ Wind: {weather.wind}km/h</p>
          <p>
            <img src={weather.icon} />
          </p>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
