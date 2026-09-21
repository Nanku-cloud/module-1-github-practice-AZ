# StayFinder — Student Starter

This is a continuing project. **Do not delete this repository after Module 5.** You will return to it in Module 8 to add real location and permission features.

The starter already contains the production-style shell. Your work is persistence + accurate real-world imagery.

## Read → Type/Paste → Save → Test → Commit

### Checkpoint 1 — Run
```bash
npm install
npx expo start --web
```

Expected result:
- StayFinder header
- Stays and Saved tabs
- Houston, Chicago, New York city choices
- placeholder hero/hotel images

### Checkpoint 2 — Storage Service
Open:
`src/services/bookingStorage.js`

Complete TODO 1–5.

You need:
- `AsyncStorage.setItem()`
- `AsyncStorage.getItem()`
- `AsyncStorage.removeItem()`
- `JSON.stringify()`
- `JSON.parse()`

Expected result: no syntax errors.

Commit:
`Add booking persistence service`

### Checkpoint 3 — Restore Startup Data
Open:
`src/screens/BookingScreen.js`

Complete TODO 6.

Restore:
- saved hotels
- selected city

Required:
- try
- catch
- finally
- `setIsLoading(false)` in finally

Commit:
`Restore saved hotels and selected city`

### Checkpoint 4 — Persist City
Complete TODO 7.

Test:
1. Choose Chicago.
2. Refresh.
3. Chicago should still be selected.

### Checkpoint 5 — Save Hotels
Complete TODO 8.

Test:
1. Save one Houston hotel.
2. Save one Chicago hotel.
3. Open Saved.
4. Refresh.
5. Both should remain.

Commit:
`Persist hotel save and remove actions`

### Checkpoint 6 — Remove and Clear
Complete TODO 9 and TODO 10.

Refresh after each action to prove persistence.

### Checkpoint 7 — Replace All Placeholder Images
You must replace 9 images:
- 3 city hero images
- 6 hotel images

Use the same filenames so the code does not need to change unless you choose to.

For every image, complete the matching record in:
`src/data/photoSources.js`

If you choose a real hotel different from the starter fictional property, update:
`src/data/hotels.js`

The visible hotel name and neighborhood must match the real hotel represented by the photo.

No AI-generated hotel/city imagery for this requirement.

### Checkpoint 8 — Repository Continuity
Do not start over later.

Keep:
- this repository;
- meaningful commits;
- stable `main`;
- the existing component structure.

Module 8 will add real location and permissions to this same project.

### Final Test
- Select New York.
- Save at least three hotels across the three cities.
- Refresh/restart.
- Confirm selected city returns.
- Confirm all saved hotels return.
- Remove one saved hotel.
- Refresh.
- Confirm it stays removed.
- Verify all 9 real photos and all 9 photo-source records.

## Troubleshooting
If the UI changes but refresh loses it:
- React state works;
- persistence does not;
- check whether the updated array was passed to `saveHotels()`.

If `.map()` fails after load:
- verify `loadHotels()` returns `[]` instead of `null`;
- verify JSON was parsed.

If a hotel image does not appear:
- verify the filename exactly matches the `require()` path;
- use JPG/PNG supported by Expo;
- restart Expo with cache clear if needed:
```bash
npx expo start --web -c
```
