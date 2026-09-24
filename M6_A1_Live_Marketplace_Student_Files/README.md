# Northstar Live Market — Student Starter

The professional marketplace shell is already built. Your task is the remote-data logic.

## Read → Type/Paste → Save → Test → Commit

### 1. Run
```bash
git status
git switch -c feature/live-product-api
npm install
npx expo start --web
```

### 2. Complete `src/services/productApi.js`
Required flow: `fetch()` → `response.ok` → `response.json()` → `data.products`.

Commit: `Connect product service to remote API`

### 3. Complete `loadProducts()`
Use loading/refreshing state, clear previous error, `await getProducts()`, update state, catch errors, and finish in `finally`.

### 4. Add `useEffect()`
Call `loadProducts()` once when the screen starts.

### 5. Test Search / Category / Empty
Search `phone`, select a category, and use a nonsense search term to show the empty state.

### 6. Test Refresh
Press Refresh. The list should remain visible while the request runs again.

### 7. Test Error and Retry
Temporarily change the endpoint to `https://dummyjson.com/not-a-real-products-route`. Restore the correct endpoint and use Try Again.

## Troubleshooting
If FlatList fails, verify the service returns `data.products`, which is an array. If loading never ends, check `finally`. If requests repeat, check `useEffect()` uses `[]`.
