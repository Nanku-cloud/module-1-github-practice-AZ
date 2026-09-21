# Module 5 Assignment 2 — StayFinder: Persistent Hotel Booking Explorer

## Objective
Build a production-style hotel discovery and saved-stays application inspired by the structure and density of current travel-booking apps. The app must support three cities, locally persist saved hotels and the selected city, and use accurate real-world imagery for full credit.

## Industry Scenario
You have joined the mobile team for StayFinder, a travel-booking product. The starter interface and component structure are already approved. Your job is to complete local persistence and replace all course placeholders with accurate real-world imagery.

This repository is a continuing project. Keep it organized. In Module 8, you will return to this same application and add real location and permission features. Do not throw away or rebuild this repository after Module 5.

## Required Cities
- Houston, Texas
- Chicago, Illinois
- New York, New York

## Real-Photo Requirement — Full Credit
The starter contains placeholder images on purpose.

For full credit you must replace:
- all 3 city hero images;
- all 6 hotel images.

That is **9 real photos total**.

Requirements:
1. Each city image must accurately represent that city.
2. Each hotel image must accurately represent the real hotel you choose.
3. Update the hotel name/neighborhood data if you choose a different real hotel than the starter fictional name.
4. Use images that are legally appropriate for coursework or clearly sourceable.
5. Record source information in `src/data/photoSources.js`.
6. Do not use AI-generated city or hotel images for this requirement.
7. Do not use the same generic hotel image for multiple properties.

## Assignment Tasks
1. Create branch `feature/saved-stays`.
2. Complete `bookingStorage.js`.
3. Restore saved hotels and selected city on startup.
4. Persist city selection.
5. Heart icon must save/unsave a hotel.
6. Saved tab must display saved hotels.
7. Remove one saved hotel and persist the removal.
8. Clear All must remove only the saved-hotels key.
9. Replace all 9 placeholder images with accurate real photos.
10. Update `photoSources.js` for all 9 images.
11. Preserve the supplied booking-style visual hierarchy. Do not convert it into generic giant cards or decorative AI-style blocks.
12. Test persistence after refresh/restart.
13. Keep the repository because Module 8 will extend it with location and permissions.

## Required Git Commits
Suggested checkpoints:
- `Add booking persistence service`
- `Restore saved hotels and selected city`
- `Persist hotel save and remove actions`
- `Add Houston real hotel and city imagery`
- `Add Chicago real hotel and city imagery`
- `Add New York real hotel and city imagery`
- `Verify saved stays persistence`

## APA 7 Reflection — 250–300 Words
Explain:
- why saved hotels and selected city should persist;
- how `JSON.stringify()` and `JSON.parse()` are used;
- how async/await appears in the app;
- why image accuracy matters in a travel-booking interface;
- how Git history will help when the same repository is extended with real location in Module 8.

## Screenshots to Upload in Blackboard
Upload screenshots only. Do not submit a repository link.
1. Houston screen with real city and hotel photos.
2. Chicago screen with real city and hotel photos.
3. New York screen with real city and hotel photos.
4. Saved tab with at least three saved hotels.
5. Saved hotels restored after refresh/restart.
6. `bookingStorage.js` completed.
7. `BookingScreen.js` showing startup restore logic.
8. `photoSources.js` showing all 9 completed source records.
9. Terminal showing clean `git status`.
10. Terminal showing `git log --oneline --graph --decorate -10`.
11. GitHub files on `main` after merge.
12. Completed APA 7 reflection.

## 100-Point Rubric
| Category | Points |
|---|---:|
| AsyncStorage save/load/remove + city persistence | 20 |
| Saved hotel add/remove/clear behavior | 15 |
| Startup restore, loading, error handling | 15 |
| All 3 city photos are real, accurate, and credited | 10 |
| All 6 hotel photos are real, accurate, and credited | 15 |
| Booking-style production UI preserved | 10 |
| Refresh/restart persistence verified | 5 |
| Git branch, meaningful commits, clean main, repo preserved | 5 |
| APA 7 reflection | 5 |
| **Total** | **100** |

**Important:** A working persistence solution with placeholder or inaccurate hotel/city images cannot earn full photo/UI credit.
