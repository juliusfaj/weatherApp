import React from "react";
import { useState, useEffect } from "react";
import Result from "./result";
import Loading from "./loading";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Weather = () => {
  const currentDay = new Date();

  const [city, setCity] = useState("ibadan");
  const [weather, setWeather] = useState({});
  const [cityInput, setCityInput] = useState("");
  const [loading, setLoading] = useState(false);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c830865482mshad14dc47e9ab6cdp129804jsn836f7ea3e592",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const fetchWeather = () => {
    setLoading(true);
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setWeather(response);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setWeather({});
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  console.log(weather);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cityInput) {
      setCity(city);
    } else {
      setCity(cityInput);
      setCityInput("");
    }
  };

  const { humidity, max_temp, min_temp, wind_speed } = weather;

  // if (loading) {
  //   return (
  //     <div className="center">
  //       <Loading />
  //     </div>
  //   );
  // }

  return (
    <div className="center">
      <div className="form-container">
        <form className="weather-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="city"
            placeholder="search any city"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
        </form>
      </div>
      <header className="header">
        <h4>
          {days[currentDay.getDay()]}{" "}
          {currentDay.getHours() < 12
            ? currentDay.getHours()
            : currentDay.getHours() - 12}
          :
          {currentDay.getMinutes() < 10
            ? `0${currentDay.getMinutes()}`
            : currentDay.getMinutes()}
          {currentDay.getHours() > 12 ? "PM" : "AM"}
        </h4>
        <h1>{city}</h1>
      </header>
      {!max_temp ? (
        <h4 className="error-message">no city has this name</h4>
      ) : (
        <Result {...weather} loading={loading} />
      )}
    </div>
  );
};

export default Weather;
