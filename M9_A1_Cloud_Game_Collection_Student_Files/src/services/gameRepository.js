import { starterGames } from '../data/starterGames';
import { db } from './firebaseConfig';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
/*
  MODULE 9 TODO FILE
  ------------------
  This is the main file students complete.

  The app starts in DEMO MODE with starterGames so the UI works first.
  Replace each TODO section with Firestore code from the lesson.
*/

export async function getGames() {
  // TODO 1 — READ
  const querySnapshot = await getDocs(collection(db, 'games'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

export async function addGame(game) {
  // TODO 2 — CREATE
  const docRef = await addDoc(collection(db, 'games'), game);
  return {
    id: docRef.id,
    ...game,
  };
}

export async function updateGame(id, changes) {
  // TODO 3 — UPDATE
  const gameRef = doc(db, 'games', id);
  await updateDoc(gameRef, changes);
  return {
    id,
    ...changes,
  };
}

export async function deleteGame(id) {
  // TODO 4 — DELETE
  const gameRef = doc(db, 'games', id);
  await deleteDoc(gameRef);
  return id;
}
