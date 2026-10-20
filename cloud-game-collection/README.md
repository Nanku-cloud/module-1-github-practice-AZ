# Module 9 — Cloud Game Collection

## Start Here

This project is already designed for you.

The interface includes:
- console-style dark layout
- desktop navigation rail
- mobile-friendly layout
- search
- genre filters
- horizontal game rows
- placeholder game covers
- Firebase service files
- SQLite service file

Your job is to complete the database code, not rebuild the whole interface.

## 1. Install and Run

```bash
npm install
npx expo start --web
```

The app should run immediately with demo data.

## 2. Firebase Setup

Copy:

```text
.env.example
```

to:

```text
.env.local
```

Add your own Firebase project values after the `=` signs.

## 3. Complete the TODO File

Open:

```text
src/services/gameRepository.js
```

Search for:

```text
TODO
```

There are four TODO sections:

```text
TODO 1 — READ
TODO 2 — CREATE
TODO 3 — UPDATE
TODO 4 — DELETE
```

Complete them in order.

Use the Module 9 Firebase lesson as your code reference.

## 4. Do Not Change Everything

The UI already works.

Focus on:
- Firebase connection
- Firestore CRUD
- real game data
- real cover art
- SQLite local storage practice

## 5. SQLite

Open:

```text
src/services/sqliteGames.js
```

The local database code is already supplied.

Use it to practice:
- opening SQLite
- creating a table
- saving a game locally
- reading local games

## 6. Real Games

The starter artwork is only placeholder content.

When instructed:
- replace the fictional games with real games
- use multiple genres
- use clear, appropriately sourced cover artwork
- preserve the console-style layout

## Suggested Git Checkpoints

```text
Configure Firebase project
Complete Firestore read
Complete Firestore create
Complete Firestore update and delete
Add real game data and cover art
Test SQLite local game storage
```
