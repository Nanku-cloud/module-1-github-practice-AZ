# Module 6 Assignment 2 — StayFinder: Remote Travel Data and Caching

## Objective
Continue the StayFinder repository by adding remote destination data and a local cache.

You will combine:
- API requests
- `fetch()`
- JSON
- `async`/`await`
- `useEffect()`
- React state
- AsyncStorage
- cache-first loading
- manual refresh
- error fallback

## Industry Scenario
StayFinder already contains city and hotel information from your earlier work. Your product team now wants each destination page to display live travel conditions from a remote service.

The app should not become useless if the network request fails. If saved remote data exists, the app should keep showing the cached information and explain that the refresh failed.

## Remote API
Open-Meteo Forecast API:
https://api.open-meteo.com/v1/forecast

No API key is required.

## Required Cities
- Houston, Texas
- Chicago, Illinois
- New York, New York

Coordinates are already provided in `src/data/cities.js`.

## Assignment Tasks
1. Create `feature/remote-travel-cache`.
2. Complete `travelApi.js`.
3. Build the request URL from the selected city's coordinates.
4. Request current temperature, apparent temperature, weather code, and wind speed.
5. Check `response.ok`.
6. Convert the response with `response.json()`.
7. Return a clean weather object from the service.
8. Complete `travelCache.js`.
9. Save a `savedAt` timestamp and weather data per city.
10. Load cached data when available.
11. Show cache first.
12. Request fresh remote data after cache is displayed.
13. Replace state with fresh API data.
14. Update the cache after a successful request.
15. Show a fallback message if live refresh fails but cache exists.
16. Show a full error state if there is no cache and the request fails.
17. Make Houston, Chicago, and New York each load their own remote data and cache.
18. Implement manual Refresh behavior.
19. Preserve the existing StayFinder visual system.
20. Keep the same repository for future Module 8 location/permissions work.

## Required Git Commits
Use meaningful checkpoints such as:
- `Connect destination conditions to remote API`
- `Add destination cache service`
- `Add cache first destination loading`
- `Refresh remote data by selected city`
- `Add offline cache fallback`
- `Add manual travel data refresh`

## APA 7 Reflection — 250–300 Words
Explain:
- how remote data and cached data are different;
- why caching improves a mobile app;
- how AsyncStorage is used as a cache;
- why `savedAt` is useful;
- what happens when the API succeeds;
- what happens when the API fails but cache exists;
- what happens when the API fails and no cache exists;
- why the same repository should be preserved for later location work.

## Screenshot Evidence
Place screenshots in the same APA document:
1. Houston live destination data.
2. Chicago live destination data.
3. New York live destination data.
4. `travelApi.js`.
5. `travelCache.js`.
6. `BookingScreen.js` cache-first flow.
7. Cached fallback message after intentionally breaking the API URL.
8. Working screen after restoring the API URL.
9. Clean `git status`.
10. `git log --oneline --graph --decorate -8`.

Do not submit a repository link.

## 100-Point Rubric
| Category | Points |
|---|---:|
| Remote API request and response handling | 20 |
| Cache save/load with AsyncStorage | 20 |
| Cache-first flow and fresh-data replacement | 20 |
| Error fallback and manual refresh | 15 |
| All three cities use correct destination data | 10 |
| Existing StayFinder interface preserved | 5 |
| Git workflow and repository continuity | 5 |
| APA 7 reflection + screenshot evidence | 5 |
| **Total** | **100** |
