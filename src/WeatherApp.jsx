import SearchBox from "./SearchBox";
import Infobox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 33.05,
    tempMIn: 33.05,
    tempMax: 33.05,
    humidity: 62,
    feelsLike: 40.05,
    weather: "haze",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <>
      <SearchBox updateInfo={updateInfo} />
      <Infobox info={weatherInfo} />
    </>
  );
}
