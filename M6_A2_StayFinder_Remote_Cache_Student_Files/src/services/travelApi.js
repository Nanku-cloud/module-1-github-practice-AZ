const BASE_URL =
  'https://api.open-meteo.com/v1/forecast';

export async function getTravelConditions(
  latitude,
  longitude
) {
  // TODO 1:
  // Build a URL using BASE_URL, latitude, longitude,
  // current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m
  // and temperature_unit=fahrenheit&wind_speed_unit=mph.

  // TODO 2:
  // Use fetch(url) and await the response.

  // TODO 3:
  // Check response.ok and throw an Error if needed.

  // TODO 4:
  // Convert the response with await response.json().

  // TODO 5:
  // Return a smaller object:
  // {
  //   temperature,
  //   apparentTemperature,
  //   weatherCode,
  //   windSpeed
  // }
}
