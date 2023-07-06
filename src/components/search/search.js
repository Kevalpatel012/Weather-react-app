// Import the useState hook from the React library
import { useState } from "react";
// Import the AsyncPaginate component from the react-select-async-paginate library
import { AsyncPaginate } from "react-select-async-paginate";
// Import the GEO_API_URL, geoApiOptions from the "api" file
import { GEO_API_URL, geoApiOptions } from "../../api";

// Search component to handle city search
const Search = ({ onSearchChange }) => {
    // State to store the search value
    const [search, setSearch] = useState(null);

    // Function to load options for the search input
    const loadOptions = (inputValue) => {
        // Fetch cities data based on the input value using the GEO_API_URL and geoApiOptions
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoApiOptions
        )
            .then(response => response.json()) // Convert the response to JSON
            .then(response => {
                // Transform the response data into the required format for options
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`, // Set the value of the option to the latitude and longitude
                            label: `${city.name}, ${city.countryCode}`, // Set the label of the option to the city name and country code
                        }
                    })
                }
            })
            .catch(err => console.error(err)); // Log any errors to the console
    };

    // Function to handle the change event of the search input
    const handleOnChange = (searchData) => {
        setSearch(searchData); // Update the search state with the new search data
        onSearchChange(searchData); // Call the onSearchChange callback function with the new search data
    };

    // Render the Search component
    return (
        <AsyncPaginate
            placeholder="Search for city" // Set the placeholder text for the search input
            debounceTimeout={600} // Set the debounce timeout for the search input
            value={search} // Set the current value of the search input
            onChange={handleOnChange} // Set the onChange event handler for the search input
            loadOptions={loadOptions} // Set the function to load options for the search input
        />
    );
};

// Export the Search component as the default export
export default Search;
