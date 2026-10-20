import { starterGames } from '../data/starterGames';

/*
  MODULE 9 TODO FILE
  ------------------
  This is the main file students complete.

  The app starts in DEMO MODE with starterGames so the UI works first.
  Replace each TODO section with Firestore code from the lesson.
*/

export async function getGames() {
  // TODO 1 — READ
  // Read the "games" collection from Firestore.
  // Convert each Firestore document into:
  // { id: doc.id, ...doc.data() }
  // Return the final array.

  return starterGames;
}

export async function addGame(game) {
  // TODO 2 — CREATE
  // Add the supplied game object to the "games" collection.
  // Return the new game with its Firestore document id.

  return {
    id: String(Date.now()),
    ...game,
  };
}

export async function updateGame(id, changes) {
  // TODO 3 — UPDATE
  // Use the document id to update only the supplied fields.

  return {
    id,
    ...changes,
  };
}

export async function deleteGame(id) {
  // TODO 4 — DELETE
  // Delete the Firestore document that matches this id.

  return id;
}
