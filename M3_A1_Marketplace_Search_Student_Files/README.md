# Module 3 Assignment 1
# Marketplace Search — Production Shopping Results

## Objective

Complete a guided React Native marketplace screen that closely follows the **layout, density, and interaction pattern of a major shopping app**. You will use local product images, reusable components, `FlatList`, `Pressable`, state, loading feedback, empty results, and stable IDs.

This assignment is **plug-and-play**. You are not expected to invent unfamiliar React Native syntax.

**Read → Type/Paste → Save → Test → Commit**

---

## Industry Scenario

You are a junior mobile developer for an online retailer. The design team has already created a production-style shopping shell. Your job is to connect the data and interaction without changing the supplied visual system.

The screen must keep its compact search header, product rows, prices, ratings, delivery text, availability messages, cart count, and bottom navigation.

---

## Props vs State

**Props** pass product information into `ProductResult`:

```text
id, name, rating, reviewCount, price, quantity, delivery, imageSource
```

**State** remembers values that change:

```text
query, cartIds, loading
```

---

# STEP 1 — Open the Project

```bash
git status
git pull
git switch -c feature/marketplace-search
npm install
npm run web
```

Do **not** run `git init`.

### Checkpoint

The app should open with the marketplace header and bottom navigation. The product list is not complete yet.

---

# STEP 2 — Add the Original Product

Open:

```text
src/data/products.js
```

Replace the `TODO 1` comment with:

```javascript
{
  id: 'product-106',
  name: 'Metro Tech Commuter Backpack',
  rating: 4.6,
  reviewCount: 529,
  price: 74.99,
  quantity: 8,
  delivery: 'FREE delivery Friday',
  imageSource: require('../assets/images/backpack.png'),
},
```

### Commit

```bash
git add .
git commit -m "Add original marketplace product"
```

---

# STEP 3 — Complete Product Availability and Cart Action

Open:

```text
src/components/ProductResult.js
```

Replace the three starter availability lines under `TODO 2` with:

```javascript
const unavailable = quantity === 0;
const lowStock = quantity > 0 && quantity <= 5;
const availability = unavailable
  ? 'Currently unavailable'
  : lowStock
    ? `Only ${quantity} left in stock`
    : 'In Stock';
```

Then find `TODO 3` and change the `onPress` to:

```jsx
onPress={() => onAddToCart(id)}
```

### Checkpoint

You are preparing three states:

```text
In Stock
Only X left in stock
Currently unavailable
```

### Commit

```bash
git add .
git commit -m "Complete product availability and cart action"
```

---

# STEP 4 — Add the Loading State

Open:

```text
src/screens/SearchResultsScreen.js
```

Under `TODO 4`, paste:

```javascript
useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 900);

  return () => clearTimeout(timer);
}, []);
```

### Checkpoint

Refresh the app. The loading state should appear briefly before the results.

### Commit

```bash
git add .
git commit -m "Add marketplace loading state"
```

---

# STEP 5 — Connect Search Filtering

Replace the `visibleProducts` starter line under `TODO 5` with:

```javascript
const visibleProducts = useMemo(() => {
  const clean = query.trim().toLowerCase();

  if (!clean) {
    return products;
  }

  return products.filter((product) =>
    product.name.toLowerCase().includes(clean)
  );
}, [query]);
```

### Checkpoint

Type `keyboard` in the search box. Only the keyboard result should remain.

Type a word that matches nothing. The empty state will appear after Step 8.

### Commit

```bash
git add .
git commit -m "Filter marketplace search results"
```

---

# STEP 6 — Add Cart State

Inside `handleAddToCart(id)`, replace `TODO 6` with:

```javascript
setCartIds((current) =>
  current.includes(id)
    ? current
    : [...current, id]
);
```

### Checkpoint

The cart count will update after the product rows are connected in the next step.

### Commit

```bash
git add .
git commit -m "Add marketplace cart state"
```

---

# STEP 7 — Connect ProductResult

Replace `renderProduct()` with:

```javascript
function renderProduct({ item }) {
  return (
    <ProductResult
      {...item}
      inCart={cartIds.includes(item.id)}
      onAddToCart={handleAddToCart}
    />
  );
}
```

### Checkpoint

The reusable component now receives one product object at a time.

---

# STEP 8 — Display Products with FlatList

Inside the `SafeAreaView`, keep `MarketplaceHeader` and `BottomNavigation`.

Replace the temporary `SearchTools` line with:

```jsx
{loading ? (
  <LoadingState />
) : (
  <FlatList
    data={visibleProducts}
    keyExtractor={(item) => item.id}
    ListHeaderComponent={
      <SearchTools resultCount={visibleProducts.length} />
    }
    ListEmptyComponent={<EmptyResults />}
    renderItem={renderProduct}
    contentContainerStyle={
      visibleProducts.length === 0
        ? styles.emptyList
        : null
    }
  />
)}
```

### Checkpoint

Confirm all of the following:

- Product rows display.
- Images display.
- Price, rating, reviews, and delivery display.
- One item shows **Only 4 left in stock**.
- One item shows **Currently unavailable**.
- Unavailable button is disabled.
- Add to Cart changes to **Added to Cart**.
- Cart counter increases.
- Searching an impossible term shows **No results found**.

### Commit

```bash
git add .
git commit -m "Display marketplace products with FlatList"
```

---

# STEP 9 — Final Visual Check

Do not redesign the supplied interface.

Verify that your screen still uses:

- compact product rows
- controlled image sizes
- thin dividers
- realistic product typography
- small delivery/availability text
- marketplace search header
- compact Add to Cart controls
- bottom navigation

Do **not** add giant cards, random gradients, oversized shadows, neon colors, or large empty spaces.

---

# STEP 10 — Final Git Check and Merge

```bash
git status
git log --oneline --graph --all
git push -u origin feature/marketplace-search
git switch main
git pull
git merge feature/marketplace-search
git push
git status
```

The final `git status` should show a clean working tree.

---

# APA 7 Reflection

Write **250–300 words** explaining:

- why `FlatList` is appropriate for product results;
- what `ProductResult` receives through props;
- what is stored in state;
- what happens when Add to Cart is pressed;
- how `keyExtractor` uses IDs;
- how loading, empty, low-stock, and unavailable states work;
- one visual detail that helped the screen look more like a production shopping app;
- one problem you solved.

Use APA 7 student-paper formatting. Include a References page only if outside sources are used.

---

# Screenshots to Upload in Blackboard

1. Required folder structure in Codespaces.
2. Loading screen with `ActivityIndicator`.
3. Completed marketplace results screen.
4. Low-stock product.
5. Unavailable product with disabled button.
6. Product showing **Added to Cart** and updated cart count.
7. Empty-results screen.
8. Original product object in `products.js`.
9. `ProductResult.js`.
10. `SearchResultsScreen.js`.
11. `git status` showing a clean working tree.
12. `git log --oneline --graph --all`.
13. GitHub showing completed files on `main`.
14. Completed APA 7 reflection.

Students upload **screenshots only**. Do not submit a repository link.
