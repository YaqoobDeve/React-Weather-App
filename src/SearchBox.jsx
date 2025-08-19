import { useState } from "react";
import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox({updateinfo}) {
  const [city, setCity] = useState("");

  const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
  const API_KEY = "912cefda46c0991c2373b58bca4a0bd4";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${URL}&q=${city}&appid=${API_KEY}`);
      const jsonResponse = await response.json();

      // Basic guard if city not found
      if (jsonResponse.cod && jsonResponse.cod !== 200) {
        console.warn(jsonResponse.message || "City not found");
        return;
      }

      const result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempmin: jsonResponse.main.temp_min,
        tempmax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
      // TODO: lift this up via props if you want to display in InfoBox
      // onWeather(result)
    } catch (e) {
      console.error("Failed to fetch weather:", e);
    }
  };

  const handleChange = (event) => setCity(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!city.trim()) return;
    getWeatherInfo();
    setCity("");
    let newinfo = await getWeatherInfo();
    updateinfo(newinfo)
  };

  return (
    <div className="SearchBox">
      <form className="search-row" onSubmit={handleSubmit} autoComplete="off">
        <TextField
          id="City"
          label="Enter City"
          type="search"
          required
          value={city}
          onChange={handleChange}
          size="small"
          fullWidth
        />

        <Button
          className="search-btn"
          type="submit"
          variant="contained"
          disableElevation
          disabled={!city.trim()}
        >
          Search
        </Button>
      </form>
    </div>
  );
}
