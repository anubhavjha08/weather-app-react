import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [err, setErr] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "6d7f9a47ab06e9315a68e006ee975952";

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
console.log(result)
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErr(false); // Reset error state (Just to ensure that the err is set to false)
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className="SearchBox">
      <h3>Search for the weather:)</h3>

      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
      <br />
      {err && <p style={{ color: "red" }}>No such place exists!</p>}
    </div>
  );
}
