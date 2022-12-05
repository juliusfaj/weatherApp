import React from "react";
import Loading from "./loading";

import {
  FaCloudSun,
  FaCloudRain,
  FaCloudSunRain,
  FaCloudMoonRain,
  FaSnowflake,
} from "react-icons/fa";

const Result = ({ humidity, max_temp, min_temp, wind_speed, loading }) => {
  if (loading) {
    return (
      <main className="weather-section">
        <Loading />
      </main>
    );
  }

  return (
    <main className="weather-section">
      <div className="current-weather">
        {max_temp < 10 ? <FaSnowflake /> : <FaCloudSun />}
        <p>
          {min_temp}
          <sup>o</sup>C / {max_temp}
          <sup>o</sup>C
        </p>
        <p>Humidity : {humidity}%</p>
        <p>Wind : {wind_speed}km/h</p>
      </div>
    </main>
  );
};

export default Result;
