import AsyncStorage from '@react-native-async-storage/async-storage';

export const SAVED_HOTELS_KEY = 'stayfinder-saved-hotels';
export const SELECTED_CITY_KEY = 'stayfinder-selected-city';

export async function saveHotels(hotels) {
  // TODO 1:
  // Save hotels using SAVED_HOTELS_KEY and JSON.stringify().
}

export async function loadHotels() {
  // TODO 2:
  // Load SAVED_HOTELS_KEY.
  // Return [] if nothing has been saved.
  // Otherwise return JSON.parse(storedValue).
}

export async function clearSavedHotels() {
  // TODO 3:
  // Remove only SAVED_HOTELS_KEY.
}

export async function saveSelectedCity(cityId) {
  // TODO 4:
  // Save cityId using SELECTED_CITY_KEY.
}

export async function loadSelectedCity() {
  // TODO 5:
  // Load SELECTED_CITY_KEY.
  // Return 'houston' if nothing has been saved.
}
