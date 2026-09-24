# Module 6 Assignment 1 — Product Discovery: Live Marketplace API

## Objective
Convert a production-style mobile marketplace from local/static data into a connected application that requests live product data from a remote API. You will use `fetch()`, JSON, `async`/`await`, React state, `useEffect()`, `FlatList`, loading/error/empty states, retry behavior, and a separate API service file.

## Industry Scenario
You have joined the mobile commerce team for Northstar Market. The visual team already approved the interface. Your task is to connect the catalog to a remote API so the app no longer depends on a hard-coded product array.

## API Used
`https://dummyjson.com/products?limit=30`

The API returns an object containing a `products` array.

## Assignment Tasks
1. Create branch `feature/live-product-api`.
2. Run the starter with `npm install` and `npx expo start --web`.
3. Complete `src/services/productApi.js`.
4. Use `fetch()` to request the endpoint.
5. Check `response.ok`.
6. Throw an error for unsuccessful HTTP responses.
7. Convert the body with `await response.json()`.
8. Return only `data.products` from the service.
9. Complete `loadProducts()` in `MarketplaceScreen.js`.
10. Use `useEffect()` to request products when the screen starts.
11. Store returned products in React state.
12. Display remote data with `FlatList`.
13. Preserve loading, error, empty, and data states.
14. Make Try Again run the request again.
15. Make Refresh perform a manual remote refresh.
16. Search and category filters must work on downloaded data.
17. Preserve the supplied dense production marketplace layout.
18. Finish with clean Git status and meaningful commits.

## Required Testing
- Initial load: loading appears, then remote products display.
- Search: use a real product term.
- Category: filter the downloaded data.
- Empty state: search a nonsense term.
- Refresh: press Refresh and confirm another request completes.
- Error/retry: temporarily change endpoint to `https://dummyjson.com/not-a-real-products-route`, verify error, restore endpoint, press Try Again.

## Required Git Commits
- `Connect product service to remote API`
- `Load remote products on startup`
- `Add loading error and retry states`
- `Add live search and category filters`
- `Add manual API refresh`
- `Verify live marketplace request flow`

## APA 7 Reflection — 250–300 Words
Explain what an API does, client vs server, why `fetch()` is asynchronous, what `response.json()` does, how loading/empty/error/data states work, one API problem you tested, and why API logic belongs in a service file.

## Screenshots to Upload in Blackboard
**Do not submit a repository link.** Upload screenshots of: live marketplace, search results, category results, empty state, temporary error state, successful retry, completed `productApi.js`, `loadProducts()` + `useEffect()`, clean `git status`, `git log --oneline --graph --decorate -8`, GitHub files on `main`, and completed APA 7 reflection.

## 100-Point Rubric
| Category | Points |
|---|---:|
| API service: fetch, response.ok, JSON, correct returned array | 20 |
| Remote data loads into React state on startup | 15 |
| Loading, error, retry, empty, and data states | 20 |
| Search and category filtering | 10 |
| Manual remote refresh | 10 |
| Production marketplace UI preserved | 10 |
| API logic separated in service layer | 5 |
| Git branch, meaningful commits, clean main | 5 |
| APA 7 reflection | 5 |
| **Total** | **100** |

## References
React useEffect: https://react.dev/reference/react/useEffect
React useState: https://react.dev/reference/react/useState
W3Schools Fetch API: https://www.w3schools.com/js/js_api_fetch.asp
W3Schools JSON: https://www.w3schools.com/js/js_json.asp
DummyJSON Products: https://dummyjson.com/docs/products
