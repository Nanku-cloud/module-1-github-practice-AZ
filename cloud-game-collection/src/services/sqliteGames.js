import * as SQLite from 'expo-sqlite';

let database;

export async function openLocalGamesDatabase() {
  if (!database) {
    database = await SQLite.openDatabaseAsync('cloud-games.db');

    await database.execAsync(`
      CREATE TABLE IF NOT EXISTS games (
        id TEXT PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        genre TEXT,
        platform TEXT,
        status TEXT,
        rating INTEGER,
        favorite INTEGER DEFAULT 0,
        coverUrl TEXT
      );
    `);
  }

  return database;
}

export async function saveGameLocally(game) {
  const db = await openLocalGamesDatabase();

  await db.runAsync(
    `INSERT OR REPLACE INTO games
      (id, title, genre, platform, status, rating, favorite, coverUrl)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    game.id,
    game.title,
    game.genre ?? '',
    game.platform ?? '',
    game.status ?? '',
    game.rating ?? 0,
    game.favorite ? 1 : 0,
    game.coverUrl ?? ''
  );
}

export async function getLocalGames() {
  const db = await openLocalGamesDatabase();

  const rows = await db.getAllAsync(
    'SELECT * FROM games ORDER BY title ASC'
  );

  return rows.map((row) => ({
    ...row,
    favorite: Boolean(row.favorite),
  }));
}
