// Import the React library
import React from "react";

// Import the CSS file for the component
import "./current-weather.css";

// Component to display the current weather data
const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          {/* Display the city */}
          <p className="city">{data.city}</p>
          {/* Display the weather description */}
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        {/* Display the weather icon */}
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        {/* Display the current temperature */}
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          {/* Display additional weather details */}
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          {/* Display "Feels like" temperature */}
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          {/* Display wind speed */}
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          {/* Display humidity */}
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          {/* Display atmospheric pressure */}
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the CurrentWeather component as the default export
export default CurrentWeather;
