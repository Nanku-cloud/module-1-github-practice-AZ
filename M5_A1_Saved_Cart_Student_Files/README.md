# Northstar Market — Student Starter

This starter is intentionally **not finished**. The production-style UI is already built so you can focus on Module 5 persistence instead of inventing unfamiliar React Native syntax from scratch.

## Read → Type/Paste → Save → Test → Commit

### Checkpoint 1 — Open and Run
```bash
npm install
npx expo start --web
```
Expected result: Northstar Market opens with Shop and Cart tabs.

Commit:
```bash
git add .
git commit -m "Run Northstar starter"
```

### Checkpoint 2 — Build the Storage Service
Open:
`src/services/cartStorage.js`

Complete TODO 1, TODO 2, and TODO 3 using:
- `AsyncStorage.setItem()`
- `AsyncStorage.getItem()`
- `AsyncStorage.removeItem()`
- `JSON.stringify()`
- `JSON.parse()`

Expected result: no syntax errors.

Commit:
`Add AsyncStorage cart service`

### Checkpoint 3 — Restore the Cart
Open:
`src/screens/MarketplaceScreen.js`

Complete TODO 4 with `useEffect()`.

Required sequence:
1. Set loading.
2. Clear the previous error.
3. `await loadCart()`.
4. Put the returned array into `cartItems`.
5. Catch errors.
6. End loading in `finally`.

Expected result: app still opens normally.

Commit:
`Restore saved cart on startup`

### Checkpoint 4 — Add and Persist
Complete TODO 5.

Test:
1. Add one product.
2. Add the same product again.
3. Open Cart.
4. Quantity should be 2, not two separate rows.
5. Refresh the app.
6. Quantity should still be 2.

Commit:
`Persist cart add and quantity changes`

### Checkpoint 5 — Quantity and Remove
Complete TODO 6, TODO 7, TODO 8.

Test every action, then refresh after each one.

Expected result: state and saved storage always match.

Commit:
`Add remove and clear cart persistence`

### Checkpoint 6 — Clear Cart
Complete TODO 9.

Important: use `removeItem()` through `clearSavedCart()`. Do **not** use `AsyncStorage.clear()`.

Expected result: cart becomes empty and stays empty after refresh.

### Final Verification
- Add at least two different products.
- Make one quantity greater than 1.
- Refresh/restart.
- Confirm items remain.
- Remove one.
- Refresh again.
- Confirm the removal remains.
- Run `git status`.
- Run `git log --oneline --graph --decorate -8`.

## Troubleshooting
If Expo Web has package problems:
```bash
rm -rf node_modules
npm install
npx expo start --web -c
```

If the cart updates on screen but disappears after refresh:
- state is working;
- persistence is not;
- check whether `saveCart(updatedCart)` runs after the action.

If `[object Object]` appears in storage logic:
- you likely forgot `JSON.stringify()`.

If `.map()` or `.reduce()` fails after loading:
- you may have forgotten `JSON.parse()` or returned `null` instead of `[]`.

## Files You Should Edit
- `src/services/cartStorage.js`
- `src/screens/MarketplaceScreen.js`

Do not redesign the supplied interface. The goal is to add persistence to a professional shell.
