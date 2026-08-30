# Module 2 Assignment 2
# Creator Queue — Interactive Content Planner

## Objective

Build a guided React Native application called **Creator Queue** that allows a content creator or social media team to add, display, filter, advance, and remove planned content.

This assignment reinforces:

- `useState`
- `TextInput`
- `Pressable`
- Props
- Parent/child components
- Arrays of objects
- Unique IDs
- React keys
- `.map()`
- `.filter()`
- Conditional rendering
- Shared state
- Event handlers

This assignment is **plug-and-play**. You are not expected to invent unfamiliar React Native syntax.

Follow:

**Read → Type/Paste → Save → Test → Commit**

---

## Industry Scenario

You are a junior mobile developer working with a digital content team. The team needs a lightweight mobile dashboard to track social content before it is published.

Each content item moves through:

```text
Draft → Scheduled → Published
```

The app must allow the team to create content ideas, filter the queue by status, move posts through the workflow, and remove completed published items.

---

## Props vs State

**Props** are values passed into reusable child components.

Examples in `PostCard`:

```text
title
platform
type
status
```

**State** is data managed by the application that can change.

Examples:

```text
posts
selectedFilter
title
platform
type
error
```

When state changes, React updates the interface.

---

# STEP 1 — Open the Project

Open the repository in GitHub Codespaces.

Run:

```bash
git status
git pull
git switch -c feature/creator-queue
npm install
npm run web
```

Do not run `git init`.

---

# STEP 2 — Add the Third Starter Post

Open:

```text
src/data/starterPosts.js
```

Under the comment for the third starter post, paste:

```javascript
{
  id: 'post-1003',
  title: 'Game Night Highlights',
  platform: 'YouTube',
  type: 'Short',
  status: 'Published',
},
```

Save the file.

### Commit

```bash
git add .
git commit -m "Add Creator Queue starter content"
```

---

# STEP 3 — Complete the Post Composer Inputs

Open:

```text
src/components/PostComposer.js
```

Update the title input to:

```jsx
<TextInput
  value={title}
  onChangeText={setTitle}
  placeholder="Post title"
  placeholderTextColor={colors.mutedText}
  style={styles.input}
/>
```

Update the platform input to:

```jsx
<TextInput
  value={platform}
  onChangeText={setPlatform}
  placeholder="Platform: Instagram, TikTok, YouTube..."
  placeholderTextColor={colors.mutedText}
  style={styles.input}
/>
```

Update the type input to:

```jsx
<TextInput
  value={type}
  onChangeText={setType}
  placeholder="Type: Reel, Carousel, Video..."
  placeholderTextColor={colors.mutedText}
  style={styles.input}
/>
```

---

# STEP 4 — Add Form Validation

Inside `handleSubmit()`, paste:

```javascript
if (!title.trim() || !platform.trim() || !type.trim()) {
  setError('Complete all three fields before adding content.');
  return;
}
```

Below that, paste:

```javascript
onAdd({
  title: title.trim(),
  platform: platform.trim(),
  type: type.trim(),
});
```

Then paste:

```javascript
setTitle('');
setPlatform('');
setType('');
setError('');
```

Below the third `TextInput`, add:

```jsx
{error ? <Text style={styles.error}>{error}</Text> : null}
```

### Checkpoint

Try submitting an empty form.

You should see the error message.

Then complete all three fields and submit again.

### Commit

```bash
git add .
git commit -m "Build and validate Creator Queue composer"
```

---

# STEP 5 — Complete PostCard Props

Open:

```text
src/components/PostCard.js
```

Replace the function line with:

```javascript
export default function PostCard({
  id,
  title,
  platform,
  type,
  status,
  onAdvance,
  onDelete,
}) {
```

Directly under the function line, add:

```javascript
const statusColor =
  status === 'Published'
    ? colors.published
    : status === 'Scheduled'
      ? colors.warning
      : colors.primary;
```

Change the platform line to:

```jsx
<Text style={styles.platform}>{platform}</Text>
```

Change the status line to:

```jsx
<Text
  style={[
    styles.status,
    {
      color: statusColor,
      backgroundColor: `${statusColor}20`,
    },
  ]}
>
  {status}
</Text>
```

Change the title line to:

```jsx
<Text style={styles.title}>{title}</Text>
```

Change the type line to:

```jsx
<Text style={styles.type}>{type}</Text>
```

Change the primary button to:

```jsx
<Pressable
  onPress={() => onAdvance(id)}
  style={styles.primaryButton}
  disabled={status === 'Published'}
>
  <Text style={styles.primaryButtonText}>
    {status === 'Draft'
      ? 'MOVE TO SCHEDULED'
      : status === 'Scheduled'
        ? 'MARK PUBLISHED'
        : 'PUBLISHED ✓'}
  </Text>
</Pressable>
```

Below that button, add:

```jsx
{status === 'Published' ? (
  <Pressable
    onPress={() => onDelete(id)}
    style={styles.deleteButton}
  >
    <Text style={styles.deleteButtonText}>
      REMOVE FROM QUEUE
    </Text>
  </Pressable>
) : null}
```

### Commit

```bash
git add .
git commit -m "Complete reusable PostCard component"
```

---

# STEP 6 — Complete the Status Filter

Open:

```text
src/components/StatusFilter.js
```

Inside the empty container, paste:

```jsx
{filterOptions.map((option) => {
  const isActive = selectedFilter === option;

  return (
    <Pressable
      key={option}
      onPress={() => onChangeFilter(option)}
      style={[
        styles.button,
        isActive && styles.activeButton,
      ]}
    >
      <Text
        style={[
          styles.text,
          isActive && styles.activeText,
        ]}
      >
        {option}
      </Text>
    </Pressable>
  );
})}
```

### Checkpoint

You should see:

```text
All
Draft
Scheduled
Published
```

### Commit

```bash
git add .
git commit -m "Add Creator Queue status filters"
```

---

# STEP 7 — Add New Posts to State

Open:

```text
src/screens/CreatorQueueScreen.js
```

Inside `handleAddPost`, paste:

```javascript
const newPost = {
  id: createId(),
  title: formValues.title,
  platform: formValues.platform,
  type: formValues.type,
  status: 'Draft',
};

setPosts((currentPosts) => [
  newPost,
  ...currentPosts,
]);
```

### Checkpoint

Add a new content item from the form.

It should appear at the top with:

```text
Draft
```

### Commit

```bash
git add .
git commit -m "Add new creator posts with unique IDs"
```

---

# STEP 8 — Advance Content Status

Inside `handleAdvancePost`, paste:

```javascript
setPosts((currentPosts) =>
  currentPosts.map((post) => {
    if (post.id !== id) {
      return post;
    }

    if (post.status === 'Draft') {
      return {
        ...post,
        status: 'Scheduled',
      };
    }

    if (post.status === 'Scheduled') {
      return {
        ...post,
        status: 'Published',
      };
    }

    return post;
  })
);
```

### Checkpoint

Move one post through:

```text
Draft → Scheduled → Published
```

### Commit

```bash
git add .
git commit -m "Add Creator Queue status workflow"
```

---

# STEP 9 — Delete Published Content

Inside `handleDeletePost`, paste:

```javascript
setPosts((currentPosts) =>
  currentPosts.filter((post) => post.id !== id)
);
```

Only published cards display the remove button.

### Commit

```bash
git add .
git commit -m "Add published-content removal"
```

---

# STEP 10 — Filter the Queue

Replace:

```javascript
const filteredPosts = posts;
```

with:

```javascript
const filteredPosts =
  selectedFilter === 'All'
    ? posts
    : posts.filter(
        (post) => post.status === selectedFilter
      );
```

### Commit

```bash
git add .
git commit -m "Filter Creator Queue by status"
```

---

# STEP 11 — Render the Post Cards

Under the comment for `filteredPosts.map()`, paste:

```jsx
{filteredPosts.map((post) => (
  <PostCard
    key={post.id}
    id={post.id}
    title={post.title}
    platform={post.platform}
    type={post.type}
    status={post.status}
    onAdvance={handleAdvancePost}
    onDelete={handleDeletePost}
  />
))}
```

Under the empty-list comment, paste:

```jsx
{filteredPosts.length === 0 ? (
  <Text style={styles.emptyMessage}>
    No content matches this filter.
  </Text>
) : null}
```

### Checkpoint

Test all four filters.

### Commit

```bash
git add .
git commit -m "Render Creator Queue from state"
```

---

# STEP 12 — Add One Original Content Item

Use the app form to create one original content item.

Your original item must include:

- Original title
- Platform
- Content type

Move it from:

```text
Draft → Scheduled → Published
```

Take screenshots during the process.

---

# STEP 13 — Final Test

Confirm:

- Starter content appears
- New posts can be added
- Empty forms are blocked
- Unique IDs are created
- Draft moves to Scheduled
- Scheduled moves to Published
- Published content can be removed
- All filter works
- Draft filter works
- Scheduled filter works
- Published filter works
- Empty-list message works
- Published count updates
- No red error screen appears

---

# STEP 14 — Push and Merge

```bash
git push -u origin feature/creator-queue
git switch main
git pull
git merge feature/creator-queue
git push
```

Run:

```bash
git status
git log --oneline --graph --all
```

---

# APA 7 Reflection

Submit a **250–300 word APA 7 reflection** explaining what you learned while building Creator Queue.

Address:

- What information was stored in props?
- What information was stored in state?
- How did the application create a unique ID for a new post?
- How did `.map()` change one post without changing every post?
- How did `.filter()` help with status filtering and deletion?
- What happens to the interface when state changes?
- What was one problem you encountered and how did you solve it?

## APA 7 Formatting Requirements

Use:

- APA 7 student paper format
- 1-inch margins
- Double spacing
- Page numbers
- 12-point Times New Roman or another APA-approved readable font
- APA 7 student title page
- Paragraph indentation
- Complete sentences
- Professional academic writing

Include a **References** page only if outside sources are used.

---

# Blackboard Submission

Upload screenshots only for the application evidence.

Submit:

1. Completed Creator Queue application
2. New original content item in Draft status
3. Same item in Scheduled status
4. Same item in Published status
5. Draft filter
6. Scheduled filter
7. Published filter
8. Empty-list message
9. `PostCard.js`
10. `CreatorQueueScreen.js`
11. `git status` showing a clean working tree
12. `git log --oneline --graph --all`
13. GitHub showing completed files on `main`
14. Completed APA 7 reflection document

**Do not submit a repository link.**

---

# Grading Rubric — 100 Points

| Criteria | Points |
|---|---:|
| Creator Queue interface completed | 10 |
| Composer state and validation work | 15 |
| New posts receive unique IDs | 10 |
| Reusable `PostCard` uses props correctly | 15 |
| Draft → Scheduled → Published workflow works | 15 |
| Status filters work correctly | 10 |
| Published content removal works | 5 |
| `.map()`, `.filter()`, and React keys used correctly | 10 |
| Git workflow and screenshots completed | 5 |
| APA 7 reflection completed | 5 |

---

# Reference Links

React Native – React Fundamentals  
https://reactnative.dev/docs/intro-react

React Native – TextInput  
https://reactnative.dev/docs/textinput

React Native – Pressable  
https://reactnative.dev/docs/pressable

React Native – StyleSheet  
https://reactnative.dev/docs/stylesheet

GitHub – Using Source Control in Codespaces  
https://docs.github.com/en/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace
