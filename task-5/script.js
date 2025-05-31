const apiKey = "021bba1a457941833d3846f1e4e8f03b"; 

document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const result = document.getElementById("result");

  if (!city) {
    result.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    if (data.cod === 200) {
      result.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${data.weather[0].main} - ${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${
          data.weather[0].icon
        }@2x.png" alt="Weather Icon">
        <p><strong>${Math.round(data.main.temp)}°C</strong></p>
      `;
    } else {
      result.innerHTML = `<p>City not found. Please check the spelling.</p>`;
    }
  } catch (error) {
    console.error("Error fetching weather:", error);
    result.innerHTML = "<p>Something went wrong. Please try again later.</p>";
  }
}
