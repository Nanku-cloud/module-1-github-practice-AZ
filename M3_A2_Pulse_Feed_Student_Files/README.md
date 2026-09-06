# Module 3 Assignment 2
# Pulse Feed — Production Social Feed

## Objective

Complete a guided React Native application called **Pulse Feed** that recreates the structure and density of a professional social-media feed.

You will use reusable components, props, state, `FlatList`, `Pressable`, `Image`, `ActivityIndicator`, stable IDs, conditional styling, and feed filtering.

This assignment is **plug-and-play**. You are not expected to invent unfamiliar React Native syntax.

**Read → Type/Paste → Save → Test → Commit**

---

## Industry Scenario

You are a junior mobile developer working for a social media company. The design team has already created a production-style mobile feed shell.

Your job is to connect the post data and interaction while keeping the supplied visual system:

- Compact post rows
- Profile images
- Display name, username, and time
- Optional media
- Reply, repost, like, views, and bookmark controls
- For You / Following tabs
- Bottom navigation
- Loading and empty-feed feedback

---

## Props vs State

**Props** pass post information into `PostCard`:

```text
displayName
username
time
content
avatar
imageSource
replies
reposts
likes
views
```

**State** remembers values that change while the app runs:

```text
selectedFeed
likedIds
bookmarkedIds
loading
```

---

# STEP 1 — Open the Project

Open the repository in GitHub Codespaces.

Run:

```bash
git status
git pull
git switch -c feature/pulse-feed
npm install
npm run web
```

Do **not** run `git init`.

### Checkpoint

You should see the Pulse header, feed tabs, dark production-style shell, and bottom navigation.

---

# STEP 2 — Add the Original Post

Open:

```text
src/data/posts.js
```

Replace the `TODO 1` comment with:

```javascript
{
  id: 'post-205',
  displayName: 'Jordan Miles',
  username: 'jmiles',
  time: '3h',
  content: 'Small UI details matter: consistent icon sizing, clean dividers, and readable spacing can completely change how polished a mobile feed feels.',
  avatar: require('../assets/images/you.png'),
  imageSource: null,
  replies: 6,
  reposts: 17,
  likes: 144,
  views: 5200,
  following: true,
},
```

Save the file.

### Commit

```bash
git add .
git commit -m "Add Pulse Feed post data"
```

---

# STEP 3 — Connect the Like Action

Open:

```text
src/components/PostActions.js
```

Find `TODO 2`.

Change:

```jsx
onPress={() => {}}
```

to:

```jsx
onPress={() => onLike(id)}
```

### Checkpoint

The action is connected, but the Like button will not change until state is added later.

### Commit

```bash
git add .
git commit -m "Connect Pulse Feed like action"
```

---

# STEP 4 — Connect the Bookmark Action

In the same file, find `TODO 3`.

Change:

```jsx
onPress={() => {}}
```

to:

```jsx
onPress={() => onBookmark(id)}
```

### Commit

```bash
git add .
git commit -m "Connect Pulse Feed bookmark action"
```

---

# STEP 5 — Add the Loading State

Open:

```text
src/screens/FeedScreen.js
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

Refresh the app after the list is connected later. The loading indicator will appear briefly.

### Commit

```bash
git add .
git commit -m "Add Pulse Feed loading state"
```

---

# STEP 6 — Filter the Following Feed

Replace the `visiblePosts` starter line under `TODO 5` with:

```javascript
const visiblePosts = useMemo(() => {
  if (selectedFeed === 'following') {
    return posts.filter((post) => post.following);
  }

  return posts;
}, [selectedFeed]);
```

### Checkpoint

The **For You** feed will show all posts.

The **Following** feed will show only records where:

```javascript
following: true
```

### Commit

```bash
git add .
git commit -m "Add Pulse Feed tab filtering"
```

---

# STEP 7 — Add Like State

Inside `handleLike(id)`, replace `TODO 6` with:

```javascript
setLikedIds((current) =>
  current.includes(id)
    ? current.filter((postId) => postId !== id)
    : [...current, id]
);
```

This allows the same post to be liked and unliked.

### Commit

```bash
git add .
git commit -m "Add Pulse Feed like state"
```

---

# STEP 8 — Add Bookmark State

Inside `handleBookmark(id)`, replace `TODO 7` with:

```javascript
setBookmarkedIds((current) =>
  current.includes(id)
    ? current.filter((postId) => postId !== id)
    : [...current, id]
);
```

### Commit

```bash
git add .
git commit -m "Add Pulse Feed bookmark state"
```

---

# STEP 9 — Connect the Reusable PostCard

Replace `renderPost()` with:

```javascript
function renderPost({ item }) {
  return (
    <PostCard
      {...item}
      liked={likedIds.includes(item.id)}
      bookmarked={bookmarkedIds.includes(item.id)}
      onLike={handleLike}
      onBookmark={handleBookmark}
    />
  );
}
```

### Checkpoint

One post object is now passed into one reusable `PostCard`.

---

# STEP 10 — Display the Feed with FlatList

Find `TODO 9`.

Replace the placeholder comment with:

```jsx
{loading ? (
  <LoadingState />
) : (
  <FlatList
    contentContainerStyle={styles.listContent}
    data={visiblePosts}
    keyExtractor={(item) => item.id}
    ListEmptyComponent={EmptyFeed}
    renderItem={renderPost}
  />
)}
```

### Checkpoint

You should now see the complete social feed.

Test:

1. Press **For You**.
2. Press **Following**.
3. Like a post.
4. Unlike the same post.
5. Bookmark a post.
6. Remove the bookmark.

### Commit

```bash
git add .
git commit -m "Display Pulse Feed with FlatList"
```

---

# STEP 11 — Test the Empty Feed

Temporarily change:

```javascript
const visiblePosts = ...
```

to:

```javascript
const visiblePosts = [];
```

Save.

You should see:

```text
Nothing here yet
```

After the screenshot, restore the correct `useMemo()` code.

---

# STEP 12 — Final Test

Confirm:

- Pulse Feed opens without errors.
- Profile images display.
- Media images display.
- For You displays all posts.
- Following displays only followed accounts.
- Like changes the heart state and count.
- Like can be removed.
- Bookmark changes the bookmark state.
- Bookmark can be removed.
- Loading state appears.
- Empty-feed state appears.
- Your original post appears.
- Every post has a unique ID.

Run:

```bash
git status
git log --oneline --graph --all
```

`git status` should show a clean working tree.

---

# STEP 13 — Push and Merge

Push the feature branch:

```bash
git push -u origin feature/pulse-feed
```

Then merge:

```bash
git switch main
git pull
git merge feature/pulse-feed
git push
```

Verify:

```bash
git status
git log --oneline --graph --all
```

---

# APA 7 Reflection

Submit a **250–300 word APA 7 reflection**.

Address:

- What is a reusable React Native component?
- How does `PostCard` use props?
- What information is stored in state?
- What happens when the user presses Like?
- Why is `FlatList` useful for a social feed?
- Why does each post need a unique ID?
- How do the For You and Following feeds differ?
- What was one problem you encountered and how did you solve it?

Use APA 7 student paper format, 1-inch margins, double spacing, page numbers, an approved readable font such as 12-point Times New Roman, a student title page, paragraph indentation, complete sentences, and professional academic writing.

Include a References page only if outside sources are used.

---

# Screenshots to Upload in Blackboard

Upload screenshots of:

1. Completed Pulse Feed application
2. For You feed
3. Following feed
4. One liked post
5. One bookmarked post
6. One post displaying a media image
7. Loading screen with `ActivityIndicator`
8. Empty-feed message
9. Original student-created post
10. Completed `PostCard.js`
11. Completed `posts.js`
12. `git status` showing a clean working tree
13. `git log --oneline --graph --all`
14. GitHub showing completed files on `main`
15. Completed APA 7 reflection document

**Do not submit a repository link.**
