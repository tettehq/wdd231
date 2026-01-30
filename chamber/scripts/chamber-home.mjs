import { getBusinessData } from "./spotlight.mjs";
import {
  apiFetchForecast,
  apiFetchWeather,
  displayWeatherResults,
  displayForecastResults,
} from "./weather.mjs";

const weatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=5.69340&lon=0.05101&appid=adcf64205c6a3b7c707899e786bb29ed&units=metric";

const forecastUrl =
  "https://api.openweathermap.org/data/2.5/forecast?lat=5.69340&lon=0.05101&appid=adcf64205c6a3b7c707899e786bb29ed&units=metric";

const dataUrl = "data/members.json";

apiFetchWeather(weatherUrl);
apiFetchForecast(forecastUrl);
getBusinessData(dataUrl);
