# StreamBox — Module 7 Assignment 1

## Read → Type/Paste → Save → Test → Commit

### 1. Run
```bash
npm install
npx expo start --web
```
Expected: Home, Browse, My List work.

### 2. Add Account Tab
Open `src/app/(tabs)/_layout.js` and complete TODO 1.
Test: four tabs visible.
Commit: `Add account tab navigation`

### 3. Connect Home to Details
Open `src/app/(tabs)/index.js` and complete TODO 2.
Test: pressing a poster opens the details route.
Commit: `Navigate home titles to dynamic route`

### 4. Read the Dynamic ID
Open `src/app/title/[id].js` and complete TODO 3 and TODO 4.
Test: different titles open different details; Back returns correctly.
Commit: `Load selected title from route parameter`

### 5. Verify Browse
Open at least three titles from Browse and use Back.
Commit: `Verify browse and back navigation`

## Only Edit
- `src/app/(tabs)/_layout.js`
- `src/app/(tabs)/index.js`
- `src/app/title/[id].js`

## Recovery
```bash
rm -rf node_modules
npm install
npx expo start --web -c
```
