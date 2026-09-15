# Module 5 Assignment 1 — Saved Cart: Modern Marketplace

## Objective
Build a production-style mobile marketplace that preserves cart data with AsyncStorage. The starter interface uses a modern dense shopping layout inspired by current large marketplace apps, but it uses original branding, original product data, and course-created assets.

## Industry Scenario
You have joined the mobile commerce team for Northstar Market. The visual design is already approved. Your job is to make the cart behave like a real shopping app: items must survive refresh/restart, quantity changes must remain saved, and the user must see appropriate loading, empty, data, and error states.

## Required Project Structure
Use the supplied structure. Do not move the entire project into App.js.

## Assignment Tasks
1. Create branch `feature/local-persistence`.
2. Install dependencies with `npm install`.
3. Start Expo Web with `npx expo start --web`.
4. Complete `src/services/cartStorage.js`.
5. Restore the saved cart when `MarketplaceScreen` first loads.
6. Add items to the cart. If the same item is added twice, increase quantity instead of duplicating the row.
7. Save the exact updated cart array after every add, increase, decrease, and remove action.
8. Decreasing quantity from 1 must remove that product.
9. Clear Cart must remove only the cart storage key.
10. Keep the supplied high-fidelity visual structure. Do not redesign it into giant cards, random gradients, oversized buttons, or generic dashboard blocks.
11. Test persistence: add at least two products, refresh/restart the app, and confirm the cart returns.
12. Demonstrate all four interface conditions: loading, empty, cart with items, and storage-error handling in code.
13. Finish with a clean Git working tree and meaningful commit history.

## Required Git Commits
Use at least these logical checkpoints:
- `Add AsyncStorage cart service`
- `Restore saved cart on startup`
- `Persist cart add and quantity changes`
- `Add remove and clear cart persistence`
- `Verify loading empty and saved cart states`

## APA 7 Reflection — 250–300 Words
Explain:
- the difference between React state and persistent storage;
- why `JSON.stringify()` and `JSON.parse()` are required;
- where asynchronous code appears in your app;
- one persistence bug you encountered and how you verified the fix;
- why a real shopping app should preserve cart data.

Use APA 7 student-paper formatting: 1-inch margins, double spacing, page numbers, 12-point Times New Roman or another APA-approved readable font, student title page, paragraph indentation, and professional academic writing. Add a References page only if outside sources are used.

## Screenshots to Upload in Blackboard
Upload screenshots only. Do not submit a repository link.
1. Shop screen showing the modern marketplace UI.
2. Cart with at least two different products.
3. Quantity greater than 1 for at least one product.
4. Cart restored after a refresh/restart.
5. `cartStorage.js` showing completed persistence functions.
6. `MarketplaceScreen.js` showing the restore logic and one cart update function.
7. Terminal showing `git status` with a clean working tree.
8. Terminal showing `git log --oneline --graph --decorate -8`.
9. GitHub repository files on `main` after merge.
10. Completed APA 7 reflection document.

## 100-Point Rubric
| Category | Points |
|---|---:|
| AsyncStorage service: save, load, remove specific key | 20 |
| Startup restore with loading/error handling | 15 |
| Add/increase/decrease/remove persistence | 20 |
| Refresh/restart persistence test works | 15 |
| Loading, empty, data, and error-state logic | 10 |
| Production UI preserved and functional | 10 |
| Git branch, meaningful commits, clean main | 5 |
| APA 7 reflection | 5 |
| **Total** | **100** |
