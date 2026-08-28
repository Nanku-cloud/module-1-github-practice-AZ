# Module 2 Assignment 1
# Drop Inventory — Modern Product Catalog

## Objective

Build a polished React Native product-drop inventory app using reusable components, props, state, JavaScript data, `.map()`, conditional stock labels, local images, `Pressable`, and `StyleSheet`.

This assignment is **plug-and-play**. You are not expected to invent React Native syntax. Follow each step in order:

**Read → Type/Paste → Save → Test → Commit**

---

## What You Are Building

You will build **Drop Inventory**, a modern product catalog inspired by the clean visual patterns used in real shopping and retail apps.

The finished app will include:

- Product drop header
- Product count
- Saved-item count
- Three provided products
- One original student-created product
- Reusable `ProductCard`
- Product images
- Price and stock information
- Save/Saved interaction
- Props
- State
- `.map()`
- Conditional UI

---

## Props vs State

This assignment reinforces an important React idea:

**Props** are product information passed from the screen into `ProductCard`.

Examples:

```text
name
category
price
quantity
image
accent
```

**State** is information the app manages and changes while it is running.

For this assignment:

```text
savedIds
```

is state because the user can save or unsave products.

---

# STEP 1 — Open the Assignment

Open the repository in GitHub Codespaces.

Run:

```bash
git status
git pull
git switch -c feature/drop-inventory
npm install
npm run web
```

Do not run `git init`.

Confirm that the dark **DROP INVENTORY** starter screen appears.

---

# STEP 2 — Add the Product Data

Open:

```text
src/data/products.js
```

The first product is already complete.

Under the Night Shift comment, paste:

```javascript
{
  id: 'drop-002',
  image: require('../assets/images/night-shift.png'),
  name: 'Night Shift 02',
  category: 'Street',
  price: 145,
  quantity: 4,
  accent: '#00C4A0',
},
```

Under the Studio Low comment, paste:

```javascript
{
  id: 'drop-003',
  image: require('../assets/images/studio-low.png'),
  name: 'Studio Low 03',
  category: 'Lifestyle',
  price: 110,
  quantity: 0,
  accent: '#F58E3C',
},
```

Save the file.

### Checkpoint

`products.js` should now contain three complete product objects.

### Commit

```bash
git add .
git commit -m "Add Drop Inventory product data"
```

---

# STEP 3 — Complete the Reusable ProductCard

Open:

```text
src/components/ProductCard.js
```

Replace the function line with:

```javascript
export default function ProductCard({
  image,
  name,
  category,
  price,
  quantity,
  accent,
  saved,
  onToggleSaved,
}) {
```

Change the `Image` element to:

```jsx
<Image source={image} style={styles.image} />
```

Change the category line to:

```jsx
<Text style={styles.category}>{category}</Text>
```

Change the name line to:

```jsx
<Text style={styles.name}>{name}</Text>
```

Change the price line to:

```jsx
<Text style={styles.price}>${price.toFixed(2)}</Text>
```

Change the stock line to:

```jsx
<Text style={[styles.stock, { color: accent }]}>
  {quantity === 0
    ? 'SOLD OUT'
    : quantity <= 5
      ? `LOW STOCK · ${quantity}`
      : `IN STOCK · ${quantity}`}
</Text>
```

Change the `Pressable` opening tag to:

```jsx
<Pressable onPress={onToggleSaved} style={styles.saveButton}>
```

Change the button text to:

```jsx
<Text style={styles.saveButtonText}>
  {saved ? 'SAVED ✓' : 'SAVE ITEM'}
</Text>
```

### Checkpoint

Your reusable card now knows how to display product information passed through props.

### Commit

```bash
git add .
git commit -m "Complete reusable ProductCard component"
```

---

# STEP 4 — Add State

Open:

```text
src/screens/DropInventoryScreen.js
```

You already have:

```javascript
const [savedIds, setSavedIds] = useState([]);
```

Under the comment for `toggleSaved`, paste:

```javascript
const toggleSaved = (productId) => {
  setSavedIds((currentIds) =>
    currentIds.includes(productId)
      ? currentIds.filter((id) => id !== productId)
      : [...currentIds, productId]
  );
};
```

This state stores the ids of products the user has saved.

Now find:

```jsx
<Text style={styles.statValue}></Text>
```

Change it to:

```jsx
<Text style={styles.statValue}>{savedIds.length}</Text>
```

### Checkpoint

The SAVED counter should display `0`.

### Commit

```bash
git add .
git commit -m "Add saved-product state"
```

---

# STEP 5 — Render Products with .map()

Still in:

```text
src/screens/DropInventoryScreen.js
```

Find the empty `View` under:

```text
Latest Drop
```

Paste this inside it:

```jsx
{products.map((product) => (
  <ProductCard
    key={product.id}
    image={product.image}
    name={product.name}
    category={product.category}
    price={product.price}
    quantity={product.quantity}
    accent={product.accent}
    saved={savedIds.includes(product.id)}
    onToggleSaved={() => toggleSaved(product.id)}
  />
))}
```

### Checkpoint

You should now see three polished product cards:

- Apex Runner 01
- Night Shift 02
- Studio Low 03

You should also see:

- one normal in-stock label
- one low-stock label
- one sold-out label

### Commit

```bash
git add .
git commit -m "Render product cards from data"
```

---

# STEP 6 — Test Props and State

Press **SAVE ITEM** on one product.

The button should change to:

```text
SAVED ✓
```

The SAVED counter at the top should increase.

Press the same product again.

It should return to:

```text
SAVE ITEM
```

and the counter should decrease.

### What You Just Tested

```text
Product data → props → ProductCard
User press → state changes → screen re-renders
```

### Commit

```bash
git add .
git commit -m "Test saved-item interaction"
```

---

# STEP 7 — Add One Original Product

Open:

```text
src/data/products.js
```

Add one original product object.

Use this image:

```javascript
require('../assets/images/your-drop.png')
```

Your object must include:

```text
id
image
name
category
price
quantity
accent
```

Example:

```javascript
{
  id: 'drop-004',
  image: require('../assets/images/your-drop.png'),
  name: 'Metro Canvas 04',
  category: 'Everyday',
  price: 98,
  quantity: 7,
  accent: '#EB569E',
},
```

You may change the name, category, price, quantity, and accent color.

### Checkpoint

Your fourth product should appear automatically because the screen uses `.map()`.

The Save button must also work for your original product.

### Commit

```bash
git add .
git commit -m "Add original product drop"
```

---

# STEP 8 — Final Test

Confirm:

- Four product cards appear
- All images load
- All names and prices are correct
- Price displays with two decimal places
- In Stock works
- Low Stock works
- Sold Out works
- Save/Saved works
- Saved counter changes correctly
- Original product appears
- No red error screen appears

---

# STEP 9 — Push and Merge

```bash
git push -u origin feature/drop-inventory
git switch main
git pull
git merge feature/drop-inventory
git push
```

Run:

```bash
git status
git log --oneline --graph --all
```

---

# Blackboard Submission

Upload screenshots only.

Submit:

1. Completed Drop Inventory application
2. Product card showing **LOW STOCK**
3. Product card showing **SOLD OUT**
4. One product showing **SAVED ✓**
5. SAVED counter showing at least `1`
6. Original student-created product
7. `ProductCard.js`
8. `products.js`
9. `git status` showing a clean working tree
10. `git log --oneline --graph --all`
11. GitHub showing the completed files on `main`

**Do not submit a repository link.**

---

# Grading Rubric — 100 Points

| Criteria | Points |
|---|---:|
| Modern Drop Inventory interface completed | 10 |
| Product data completed correctly | 10 |
| Reusable `ProductCard` completed | 15 |
| Props display correct product information | 15 |
| State and Save/Saved interaction work | 15 |
| `.map()` and React keys used correctly | 10 |
| Stock-status UI works correctly | 10 |
| Original product added | 5 |
| Git workflow completed | 5 |
| Required Blackboard screenshots submitted | 5 |

---

# Reference Links

React Native – React Fundamentals  
https://reactnative.dev/docs/intro-react

React Native – Core Components and APIs  
https://reactnative.dev/docs/components-and-apis

React Native – Image  
https://reactnative.dev/docs/image

React Native – Pressable  
https://reactnative.dev/docs/pressable

React Native – StyleSheet  
https://reactnative.dev/docs/stylesheet

GitHub – Using Source Control in Codespaces  
https://docs.github.com/en/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace
