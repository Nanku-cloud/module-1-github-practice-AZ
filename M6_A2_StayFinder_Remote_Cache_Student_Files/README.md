# StayFinder — Module 6 Assignment 2 Student Starter

This project continues the StayFinder travel application.

## Goal
Add **remote destination conditions + local caching**.

The hotel list remains local for this assignment. The new destination conditions come from the Open-Meteo API and are cached in AsyncStorage.

## Read → Type/Paste → Save → Test → Commit

### Checkpoint 1 — Branch
```bash
git status
git switch -c feature/remote-travel-cache
npm install
npx expo start --web
```

### Checkpoint 2 — travelApi.js
Open:
`src/services/travelApi.js`

Complete TODO 1–5.

Use:
`https://api.open-meteo.com/v1/forecast`

Required current fields:
- temperature_2m
- apparent_temperature
- weather_code
- wind_speed_10m

Use Fahrenheit and mph.

Commit:
`Connect destination conditions to remote API`

### Checkpoint 3 — travelCache.js
Open:
`src/services/travelCache.js`

Complete TODO 6–7.

Store:
```js
{
  savedAt: Date.now(),
  weather: weather
}
```

Commit:
`Add destination cache service`

### Checkpoint 4 — BookingScreen.js
Complete TODO 8.

Required flow:
```text
Load cache
↓
Show cache if it exists
↓
Request live API data
↓
Show fresh data
↓
Save fresh data to cache
```

Commit:
`Add cache first destination loading`

### Checkpoint 5 — City Switching
Complete TODO 9.

When Houston, Chicago, or New York is selected:
- load that city's cache;
- request that city's live remote conditions;
- save that city's refreshed cache.

Commit:
`Refresh remote data by selected city`

### Checkpoint 6 — Error Fallback
After a successful load, temporarily break the BASE_URL in `travelApi.js`.

Expected:
- cached data remains visible;
- banner explains that live refresh failed.

Restore the correct URL.

Commit:
`Add offline cache fallback`

### Checkpoint 7 — Manual Refresh
Press Refresh.

Expected:
- screen remains visible;
- refresh state appears;
- API request runs;
- cache is updated.

Commit:
`Add manual travel data refresh`

## Files You Should Edit
- `src/services/travelApi.js`
- `src/services/travelCache.js`
- `src/screens/BookingScreen.js`

Do not rebuild the application from scratch.
Keep this repository for future modules.
