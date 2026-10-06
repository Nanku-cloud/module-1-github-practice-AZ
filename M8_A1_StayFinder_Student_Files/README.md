# Module 8 Assignment 1 — StayFinder: Use My Location

## Objective
Complete the supplied StayFinder application so it can request foreground location permission, retrieve a real device location, display latitude and longitude, and remain usable when location is denied or unavailable.

## Setup
Open the project in GitHub Codespaces and run:
```bash
npm install
npx expo start --web
```
Use Expo Web while developing the interface. Final location evidence must come from a physical phone using Expo Go.

## Where You Work
Open:
```text
src/app/index.js
```
Search for `TODO`. All required code is inside `handleUseMyLocation()`.

## Checkpoint 1 — Permission
Request foreground location permission.
Expected: the phone shows a location permission prompt; denial does not crash the app.
Commit: `git commit -m "Add foreground location permission"`

## Checkpoint 2 — Current Position
After permission is granted, request the current device location.
Expected: the device returns a location object.
Commit: `git commit -m "Request current device location"`

## Checkpoint 3 — Save and Display
Store the returned location in state.
Expected: latitude and longitude appear and the loading message stops.
Commit: `git commit -m "Display current location coordinates"`

## Checkpoint 4 — Failure States
Test granted permission, denied permission, location error/retry when possible, and manual city selection after denial.
Commit: `git commit -m "Verify StayFinder location states"`

## Important
Do not remove the manual city-selection feature. Do not redesign the supplied StayFinder interface.

## Final Evidence
Submit one APA 7 document with the 250–300 word reflection and required Application Evidence screenshots. Do not submit a repository link.
