# Module 4 Assignment 1
# Order Customizer — Food Delivery Interface

## Objective

Complete a guided React Native application called **Order Customizer** for a modern food-delivery platform. The application uses reusable components, props, state, `TextInput`, `useRef()`, `ScrollView`, `Pressable`, `Modal`, conditional rendering, validation, and `StyleSheet`.

Students will also complete a short **APA 7 reflection** explaining how input, refs, state, scrolling, and modal interfaces are used in the application.

## Industry Scenario

You are a junior mobile developer working for a food-delivery company. The design team has provided a production-style item customization screen.

Your job is to connect the interaction while preserving the supplied mobile layout.

Follow the assignment in order:

**Read → Type/Paste → Save → Test → Commit**

---

# STEP 1 — Open the Project

Run:

```bash
git status
git pull
git switch -c feature/order-customizer
npm install
npm run web
```

Do **not** run `git init`.

### Checkpoint

The item page should open with the product image, quantity control, instructions area, add-on button, and total.

---

# STEP 2 — Add One Original Add-On

Open:

```text
src/data/menuItem.js
```

Replace `TODO 1` with:

```javascript
{ id: 'addon-onion', label: 'Crispy Onions', price: 1.00 },
```

### Commit

```bash
git add .
git commit -m "Add Order Customizer menu data"
```

---

# STEP 3 — Complete Quantity Controls

Open:

```text
src/screens/OrderCustomizerScreen.js
```

Replace `TODO 4` with:

```javascript
setQuantity((current) => Math.max(1, current - 1));
```

Replace `TODO 5` with:

```javascript
setQuantity((current) => current + 1);
```

### Checkpoint

Quantity increases and never drops below 1.

### Commit

```bash
git add .
git commit -m "Complete quantity controls"
```

---

# STEP 4 — Add useRef Input Focus

Under the state variables, replace `TODO 3` with:

```javascript
const instructionsRef = useRef(null);
```

Inside `TextInput`, replace `TODO 8` with:

```jsx
ref={instructionsRef}
```

Replace the empty `onPress` under `TODO 9` with:

```jsx
onPress={() => instructionsRef.current?.focus()}
```

### Checkpoint

Press **Tap to focus instructions**. The special-instructions field should receive focus.

### Commit

```bash
git add .
git commit -m "Add useRef input focus"
```

---

# STEP 5 — Add Add-On State

Inside `handleToggleAddOn(id)`, replace `TODO 6` with:

```javascript
setSelectedAddOns((current) =>
  current.includes(id)
    ? current.filter((itemId) => itemId !== id)
    : [...current, id]
);
```

### Commit

```bash
git add .
git commit -m "Add selected add-on state"
```

---

# STEP 6 — Build the Add-On Modal

Open:

```text
src/components/AddOnModal.js
```

Replace `TODO 2` with:

```jsx
{addOns.map((item) => (
  <OptionRow
    key={item.id}
    label={item.label}
    price={item.price}
    selected={selectedIds.includes(item.id)}
    onPress={() => onToggle(item.id)}
  />
))}
```

### Checkpoint

Open the modal and select more than one add-on.

### Commit

```bash
git add .
git commit -m "Build add-on modal"
```

---

# STEP 7 — Calculate the Total

Return to:

```text
src/screens/OrderCustomizerScreen.js
```

Replace the total TODO with:

```javascript
const addOnTotal = menuItem.addOns
  .filter((item) => selectedAddOns.includes(item.id))
  .reduce((sum, item) => sum + item.price, 0);

return (menuItem.basePrice + addOnTotal) * quantity;
```

### Checkpoint

Changing quantity or add-ons should update the total.

### Commit

```bash
git add .
git commit -m "Calculate order total"
```

---

# STEP 8 — Test the Full Screen

Test:

- Quantity = 1 disables decrease behavior
- Quantity can increase
- TextInput accepts instructions
- `useRef()` focuses the input
- Modal opens and closes
- Add-ons can be selected and removed
- Total updates
- Original add-on appears
- Add to Cart displays success feedback

### Commit

```bash
git add .
git commit -m "Test Order Customizer interactions"
```

---

# STEP 9 — Push and Merge

```bash
git push -u origin feature/order-customizer
git switch main
git pull
git merge feature/order-customizer
git push
git status
git log --oneline --graph --all
```

---

# APA 7 Reflection

Submit a **250–300 word APA 7 reflection**.

Address:

- How is `TextInput` used?
- What information is stored in state?
- What does `useRef()` do?
- Why is `ScrollView` appropriate?
- How does the `Modal` improve the experience?
- How is the total calculated?
- What problem did you encounter and how did you solve it?

Use APA 7 student paper format, 1-inch margins, double spacing, page numbers, an approved readable font such as 12-point Times New Roman, a student title page, paragraph indentation, complete sentences, and professional academic writing.

Include a References page only if outside sources are used.

---

# Screenshots to Upload in Blackboard

1. Completed Order Customizer application
2. Special-instructions `TextInput`
3. Quantity above 1
4. Add-on modal open
5. One selected add-on
6. Updated order total
7. Original student-created add-on
8. Add-to-cart success feedback
9. Completed `AddOnModal.js`
10. Completed `OrderCustomizerScreen.js`
11. `git status` showing clean working tree
12. `git log --oneline --graph --all`
13. GitHub showing files on `main`
14. Completed APA 7 reflection document

**Do not submit a repository link.**
