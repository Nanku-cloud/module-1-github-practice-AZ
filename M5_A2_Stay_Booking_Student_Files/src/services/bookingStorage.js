import AsyncStorage from '@react-native-async-storage/async-storage';

export const SAVED_HOTELS_KEY = 'stayfinder-saved-hotels';
export const SELECTED_CITY_KEY = 'stayfinder-selected-city';

export async function saveHotels(hotels) {
  try {
    const jsonValue = JSON.stringify(hotels);
    await AsyncStorage.setItem(SAVED_HOTELS_KEY, jsonValue);
  } catch (e) {
    console.error('Failed to save hotels', e);
  }
}

export async function loadHotels() {
  try {
    const storedValue = await AsyncStorage.getItem(SAVED_HOTELS_KEY);
    return storedValue != null ? JSON.parse(storedValue) : [];
  } catch (e) {
    console.error('Failed to load hotels', e);
    return [];
  }
}

export async function clearSavedHotels() {
  try {
    await AsyncStorage.removeItem(SAVED_HOTELS_KEY);
  } catch (e) {
    console.error('Failed to clear saved hotels', e);
  }
}

export async function saveSelectedCity(cityId) {
  try {
    await AsyncStorage.setItem(SELECTED_CITY_KEY, cityId);
  } catch (e) {
    console.error('Failed to save selected city', e);
  }
}

export async function loadSelectedCity() {
  try {
    const storedValue = await AsyncStorage.getItem(SELECTED_CITY_KEY);
    return storedValue != null ? storedValue : 'houston';
  } catch (e) {
    console.error('Failed to load selected city', e);
    return 'houston';
  }
}