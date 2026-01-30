const weatherInfo = document.querySelector("#weather-info");
const weatherIcon = document.querySelector("#weather-icon");
const currentTemp = document.querySelector("#current-temp");
const iconDesc = document.querySelector("#desc");
const high = document.querySelector("#high");
const low = document.querySelector("#low");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const forecast = document.querySelector("#forecast-info");

  
export async function apiFetchWeather(weatherUrl) {
  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      displayWeatherResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

export async function apiFetchForecast(forecastUrl) {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      displayForecastResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

export function displayWeatherResults(data) {
  currentTemp.innerHTML = `<strong>${data.main.temp}&deg;C</strong>`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", "weather icon");
  iconDesc.innerHTML = `<strong>${data.weather[0].description}</strong>`;
  high.innerHTML = `<strong>High:</strong> ${data.main.temp_max}&deg;C`;
  low.innerHTML = `<strong>Low:</strong> ${data.main.temp_min}&deg;C`;
  humidity.innerHTML = `<strong>Humidity:</strong> ${data.main.humidity}%`;

  const sunriseTime = new Date(data.sys.sunrise);
  const sunsetTime = new Date(data.sys.sunset);
  sunrise.innerHTML = `<strong>Sunrise:</strong> ${sunriseTime.getHours()}:${sunriseTime.getMinutes()} AM`;
  sunset.innerHTML = `<strong>Sunset:</strong> ${sunsetTime.getHours()}:${sunsetTime.getMinutes()} PM`;
}

export function displayForecastResults(data) {
  for (let i = 2; i <= 20; i += 8) {
    const day = new Date(data.list[i].dt_txt).toLocaleString("en-US", {
      weekday: "long",
    });
    const temp = data.list[i].main.temp;
    const li = document.createElement("li");
    if (i == 2) {
      li.innerHTML = `<strong>Tommorow:</strong> ${temp}&deg;C`;
    } else {
      li.innerHTML = `<strong>${day}:</strong> ${temp}&deg;C`;
    }
    forecast.appendChild(li);
  }
}

