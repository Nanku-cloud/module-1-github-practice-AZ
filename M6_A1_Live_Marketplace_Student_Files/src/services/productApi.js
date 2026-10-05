const PRODUCT_URL = 'https://dummyjson.com/products?limit=30';

export async function getProducts() {
  // TODO 1: await fetch(PRODUCT_URL)
  const response = await fetch(PRODUCT_URL);

  // TODO 2: check response.ok and throw Error if false
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  // TODO 3: const data = await response.json()
  const data = await response.json();

  // TODO 4: return data.products
  return data.products;
}