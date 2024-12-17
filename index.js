async function getWeather(location) {
  const url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
    location +
    "?unitGroup=metric&key=YC77CRACMAJZHU8YJRTC5RRWZ&contentType=json";
  const response = await fetch(url, { mode: "cors" });
  const weatherData = await response.json();
  const temperature = weatherData.currentConditions.temp;
  console.log(weatherData);
  console.log(temperature);
}

const searchInput = document.querySelector(".input");

searchInput.addEventListener("click", (e) => {
  let value = e.target.value;

  getWeather(value);
});
