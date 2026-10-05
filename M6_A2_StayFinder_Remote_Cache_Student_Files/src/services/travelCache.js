import AsyncStorage from '@react-native-async-storage/async-storage';

const CACHE_KEY_PREFIX = '@stayfinder_weather_';

// TODO 6: Save weather data with timestamp to cache
export async function cacheWeatherData(cityId, weatherData) {
  try {
    const dataToCache = {
      savedAt: Date.now(),
      weather: weatherData,
    };
    await AsyncStorage.setItem(
      `${CACHE_KEY_PREFIX}${cityId}`,
      JSON.stringify(dataToCache)
    );
  } catch (error) {
    console.error('Error saving to cache:', error);
  }
}

// TODO 7: Get cached weather data for a city
export async function getCachedWeatherData(cityId) {
  try {
    const cachedData = await AsyncStorage.getItem(`${CACHE_KEY_PREFIX}${cityId}`);
    return cachedData ? JSON.parse(cachedData) : null;
  } catch (error) {
    console.error('Error reading from cache:', error);
    return null;
  }
}
export const loadTravelCache = getCachedWeatherData;
export const saveTravelCache = cacheWeatherData;