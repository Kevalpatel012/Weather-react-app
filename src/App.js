// Import the useState hook from the React library
import { useState } from "react";
// Import the Search component from the specified file path
import Search from "./components/search/search";
// Import the CurrentWeather component from the specified file path
import CurrentWeather from "./components/current-weather/current-weather";
// Import the Forecast component from the specified file path
import Forecast from "./components/forecast/forecast";
// Import the WEATHER_API_URL and WEATHER_API_KEY from the "api" file
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
// Import the CSS file for the application
import "./App.css";

// Function component for the main App
function App() {
  // State to store the current weather data
  const [currentWeather, setCurrentWeather] = useState(null);
  // State to store the forecast data
  const [forecast, setForecast] = useState(null);

  // Event handler for the search input change
  const handleOnSearchChange = (searchData) => {
    // Extract the latitude and longitude from the selected search data
    const [lat, lon] = searchData.value.split(" ");

    // Fetch the current weather data
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    // Fetch the forecast data
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    // Wait for both fetch requests to complete
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        // Extract the JSON response from the fetch requests
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        // Update the currentWeather state with the fetched data
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        // Update the forecast state with the fetched data
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log); // Log any errors to the console
  };

  // Render the main App component
  return (
    <div className="container">
      {/* Render the Search component and pass the handleOnSearchChange event handler */}
      <Search onSearchChange={handleOnSearchChange} />
      {/* Render the CurrentWeather component if currentWeather data is available */}
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {/* Render the Forecast component if forecast data is available */}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

// Export the App component as the default export
export default App;
