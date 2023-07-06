// Import the React library
import React from "react";
// Import components from the react-accessible-accordion library
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Import the CSS file for the component
import "./forecast.css";

// Define an array of week days
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Forecast component to display the weather forecast
const Forecast = ({ data }) => {
  // Get the current day of the week
  const dayInAWeek = new Date().getDay();
  // Create an array of forecast days starting from the current day
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <>
      <label className="title"></label>
      {/* Create an Accordion component */}
      <Accordion allowZeroExpanded>
        {/* Iterate over the forecast data and create an AccordionItem for each */}
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            {/* Create the heading for the AccordionItem */}
            <AccordionItemHeading>
              {/* Create the button for the AccordionItem */}
              <AccordionItemButton>
                <div className="daily-item">
                  {/* Display the weather icon */}
                  <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                  {/* Display the forecast day */}
                  <label className="day">{forecastDays[idx]}</label>
                  {/* Display the weather description */}
                  <label className="description">{item.weather[0].description}</label>
                  {/* Display the temperature range */}
                  <label className="min-max">{Math.round(item.main.temp_max)}°C / {Math.round(item.main.temp_min)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            {/* Create the panel for the AccordionItem */}
            <AccordionItemPanel>
              <div className="daily-details-grid">
                {/* Display additional weather details in a grid */}
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

// Export the Forecast component as the default export
export default Forecast;
