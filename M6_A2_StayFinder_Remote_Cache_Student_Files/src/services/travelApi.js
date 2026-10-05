const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export async function getTravelConditions(latitude, longitude) {
  // TODO 1: Build URL using BASE_URL, latitude, longitude, required current fields, and units
  const url = `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph`;

  // TODO 2: Use fetch(url) and await the response
  const response = await fetch(url);

  // TODO 3: Check response.ok and throw an Error if needed
  if (!response.ok) {
    throw new Error('Failed to fetch destination travel conditions');
  }

  // TODO 4: Convert the response with await response.json()
  const data = await response.json();

  // TODO 5: Return a smaller object
  return {
    temperature: data.current.temperature_2m,
    apparentTemperature: data.current.apparent_temperature,
    weatherCode: data.current.weather_code,
    windSpeed: data.current.wind_speed_10m,
  };
}