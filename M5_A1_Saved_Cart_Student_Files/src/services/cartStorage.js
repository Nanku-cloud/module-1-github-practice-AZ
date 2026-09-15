import AsyncStorage from '@react-native-async-storage/async-storage';

export const CART_STORAGE_KEY = 'northstar-shopping-cart';

export async function saveCart(items) {
  // TODO 1:
  // Convert the cart array to JSON text and save it with AsyncStorage.setItem().
}

export async function loadCart() {
  // TODO 2:
  // Read CART_STORAGE_KEY with AsyncStorage.getItem().
  // If nothing has been saved, return [].
  // If data exists, convert it back to JavaScript with JSON.parse().
}

export async function clearSavedCart() {
  // TODO 3:
  // Remove only CART_STORAGE_KEY. Do not use AsyncStorage.clear().
}
