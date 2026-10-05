import AsyncStorage from
  '@react-native-async-storage/async-storage';

const CACHE_PREFIX =
  'stayfinder-conditions-';

export async function saveTravelCache(
  cityId,
  weather
) {
  // TODO 6:
  // Create an object with:
  // savedAt: Date.now()
  // weather: weather
  //
  // Save it using AsyncStorage.setItem()
  // and key `${CACHE_PREFIX}${cityId}`.
}

export async function loadTravelCache(
  cityId
) {
  // TODO 7:
  // Read `${CACHE_PREFIX}${cityId}`.
  // If nothing exists, return null.
  // Otherwise JSON.parse() and return the object.
}
