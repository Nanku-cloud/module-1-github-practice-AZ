# MealDash — Module 7 Assignment 2 Student Starter

## Goal
Complete a simulated login and multi-screen food-delivery navigation flow.

The Expo Router structure is already configured. Do not rebuild the project.

## Read → Type/Paste → Save → Test → Commit

### Checkpoint 1 — Run
```bash
npm install
npx expo start --web
```

Expected:
- Login screen opens first.

### Checkpoint 2 — Login Validation
Open:
`src/app/login.js`

Complete TODO 1.

Test:
- blank fields show the validation message;
- valid text opens the main app;
- Back should not immediately return to Login.

Commit:
`Add simulated login validation`

### Checkpoint 3 — Restaurant Navigation
Open:
`src/app/(tabs)/index.js`

Complete TODO 2.

Test:
- selecting Burger Bay opens `/restaurant/burger-bay`.

Commit:
`Navigate home to restaurant details`

### Checkpoint 4 — Dynamic Route
Open:
`src/app/restaurant/[id].js`

Complete TODO 3 and TODO 4.

Test at least two restaurants.

Expected:
- selected restaurant name, image, and details are correct;
- Back returns to Home or Search.

Commit:
`Load restaurant from route parameter`

### Checkpoint 5 — Cart and Summary
The starter already includes:
- `/cart`
- `/order/summary`

Test:
Restaurant Details → View Cart → Continue to Order Summary → Return Home

Commit:
`Verify cart and order summary flow`

### Checkpoint 6 — Logout
Open:
`src/app/(tabs)/account.js`

Complete TODO 5.

Test:
- Log Out returns to Login using `router.replace()`.

Commit:
`Add simulated logout navigation`

## Only Edit These Files
- `src/app/login.js`
- `src/app/(tabs)/index.js`
- `src/app/restaurant/[id].js`
- `src/app/(tabs)/account.js`

## Troubleshooting
If Login does not leave the screen:
- verify both fields contain text;
- check `router.replace('/(tabs)')`.

If restaurant details do not load:
- confirm the parameter name is `id`;
- confirm `[id].js` reads `id`;
- confirm `item.id === id`.

If Expo Web has dependency problems:
```bash
rm -rf node_modules
npm install
npx expo start --web -c
```
