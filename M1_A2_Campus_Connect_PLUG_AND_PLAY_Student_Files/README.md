# Module 1 Assignment 2: Campus Connect

## Objective

Build a colorful React Native student-life app by following the code exactly as shown. This is your first React Native assignment, so **you are not expected to invent React code on your own**.

Follow each step in order:

**Read → Type/Paste → Save → Test → Commit**

Do not skip ahead.

---

# Before You Begin

Open the project in GitHub Codespaces.

Run:

```bash
git status
git pull
git switch -c feature/campus-connect
npm install
npx expo start --web
```

You should see the purple **Campus Connect** starter screen.

Do not run `git init`.

---

# STEP 1 — Add the Section Heading

Open:

```text
App.js
```

Find:

```jsx
{/* STEP 1: Type exactly: What's Happening? */}
<Text style={styles.sectionTitle}></Text>
```

Change it to:

```jsx
<Text style={styles.sectionTitle}>What's Happening?</Text>
```

Now find:

```javascript
sectionTitle: {
},
```

Add these exact properties:

```javascript
sectionTitle: {
  color: '#FFFFFF',
  fontSize: 28,
  fontWeight: '900',
  marginBottom: 16,
},
```

Save `App.js`.

### Check Your Screen

You should now see **What's Happening?** in large white text under the purple header.

### Commit

```bash
git add .
git commit -m "Add Campus Connect section heading"
```

---

# STEP 2 — Complete the Game Lounge Card

Still in `App.js`, find the first activity card.

Change:

```jsx
<Text style={styles.activityEmoji}></Text>
```

to:

```jsx
<Text style={styles.activityEmoji}>🎮</Text>
```

Change:

```jsx
<Text style={styles.activityTitle}></Text>
```

to:

```jsx
<Text style={styles.activityTitle}>Game Lounge</Text>
```

Change:

```jsx
<Text style={styles.activityDescription}></Text>
```

to:

```jsx
<Text style={styles.activityDescription}>
  Drop in, play games, and meet other students.
</Text>
```

Change:

```jsx
<Text style={styles.activityStatus}></Text>
```

to:

```jsx
<Text style={styles.activityStatus}>OPEN TODAY</Text>
```

Now complete the styles exactly as shown:

```javascript
activityCard: {
  backgroundColor: '#151B31',
  borderColor: '#2A3357',
  borderRadius: 22,
  borderWidth: 1,
  marginBottom: 16,
  padding: 20,
},

activityEmoji: {
  fontSize: 34,
},

activityTitle: {
  color: '#FFFFFF',
  fontSize: 22,
  fontWeight: '900',
  marginTop: 12,
},

activityDescription: {
  color: '#AEB8D4',
  fontSize: 15,
  lineHeight: 22,
  marginTop: 8,
},

activityStatus: {
  color: '#8B5CF6',
  fontSize: 12,
  fontWeight: '900',
  letterSpacing: 0.8,
  marginTop: 14,
},
```

### Check Your Screen

You should see one dark rounded card containing:

```text
🎮
Game Lounge
Drop in, play games, and meet other students.
OPEN TODAY
```

### Commit

```bash
git add .
git commit -m "Build and style Game Lounge card"
```

---

# STEP 3 — Add Study Jam and Campus Eats

In `App.js`, find:

```jsx
{/* STEP 3: Paste the Study Jam card directly below this comment. */}
```

Paste:

```jsx
<View style={styles.activityCard}>
  <Text style={styles.activityEmoji}>📚</Text>
  <Text style={styles.activityTitle}>Study Jam</Text>
  <Text style={styles.activityDescription}>
    Find a study space and get ready for your next exam.
  </Text>
  <Text style={styles.activityStatus}>STUDY NOW</Text>
</View>
```

Then find:

```jsx
{/* STEP 3: Paste the Campus Eats card directly below this comment. */}
```

Paste:

```jsx
<View style={styles.activityCard}>
  <Text style={styles.activityEmoji}>🍕</Text>
  <Text style={styles.activityTitle}>Campus Eats</Text>
  <Text style={styles.activityDescription}>
    Find food, snacks, and student dining options around campus.
  </Text>
  <Text style={styles.activityStatus}>GET FOOD</Text>
</View>
```

### Check Your Screen

You should now see three matching cards:

- Game Lounge
- Study Jam
- Campus Eats

### Commit

```bash
git add .
git commit -m "Add three Campus Connect activity cards"
```

---

# STEP 4 — Create the Reusable CampusCard Component

Open:

```text
src/components/CampusCard.js
```

Replace the entire file with:

```javascript
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function CampusCard({
  emoji,
  title,
  description,
  status,
  accent,
  onPress,
  isSelected,
}) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={[
          styles.card,
          { borderColor: isSelected ? accent : '#2A3357' },
        ]}
      >
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={[styles.status, { color: accent }]}>{status}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#151B31',
    borderColor: '#2A3357',
    borderRadius: 22,
    borderWidth: 2,
    marginBottom: 16,
    padding: 20,
  },

  emoji: {
    fontSize: 34,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    marginTop: 12,
  },

  description: {
    color: '#AEB8D4',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },

  status: {
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginTop: 14,
  },
});
```

Save the file.

### Commit

```bash
git add .
git commit -m "Create reusable CampusCard component"
```

---

# STEP 5 — Use Props in App.js

At the top of `App.js`, add:

```javascript
import CampusCard from './src/components/CampusCard';
```

Delete the three hard-coded `<View style={styles.activityCard}>...</View>` cards.

Replace them with:

```jsx
<CampusCard
  emoji="🎮"
  title="Game Lounge"
  description="Drop in, play games, and meet other students."
  status="OPEN TODAY"
  accent="#8B5CF6"
  isSelected={false}
  onPress={() => {}}
/>

<CampusCard
  emoji="📚"
  title="Study Jam"
  description="Find a study space and get ready for your next exam."
  status="STUDY NOW"
  accent="#22D3EE"
  isSelected={false}
  onPress={() => {}}
/>

<CampusCard
  emoji="🍕"
  title="Campus Eats"
  description="Find food, snacks, and student dining options around campus."
  status="GET FOOD"
  accent="#FB923C"
  isSelected={false}
  onPress={() => {}}
/>
```

### Check Your Screen

The screen should still show the same three cards.

### Commit

```bash
git add .
git commit -m "Pass activity information with props"
```

---

# STEP 6 — Make the Cards Interactive

`App.js` already imports `useState` and already contains:

```javascript
const [selectedActivity, setSelectedActivity] = useState(null);
```

Replace your three `CampusCard` components with:

```jsx
<CampusCard
  emoji="🎮"
  title="Game Lounge"
  description="Drop in, play games, and meet other students."
  status="OPEN TODAY"
  accent="#8B5CF6"
  isSelected={selectedActivity === 'Game Lounge'}
  onPress={() => setSelectedActivity('Game Lounge')}
/>

<CampusCard
  emoji="📚"
  title="Study Jam"
  description="Find a study space and get ready for your next exam."
  status="STUDY NOW"
  accent="#22D3EE"
  isSelected={selectedActivity === 'Study Jam'}
  onPress={() => setSelectedActivity('Study Jam')}
/>

<CampusCard
  emoji="🍕"
  title="Campus Eats"
  description="Find food, snacks, and student dining options around campus."
  status="GET FOOD"
  accent="#FB923C"
  isSelected={selectedActivity === 'Campus Eats'}
  onPress={() => setSelectedActivity('Campus Eats')}
/>
```

Now replace this:

```jsx
<Text style={styles.selectionText}>
  Pick a campus activity to see what you're checking out.
</Text>
```

with:

```jsx
<Text style={styles.selectionText}>
  {selectedActivity
    ? `You're checking out: ${selectedActivity}`
    : "Pick a campus activity to see what you're checking out."}
</Text>
```

### Check Your Screen

Press all three cards.

The **YOUR PICK** message should change every time.

### Commit

```bash
git add .
git commit -m "Add interactive campus activity selection"
```

---

# STEP 7 — Move the Activity Information Into Data

Open:

```text
src/data/campusActivities.js
```

Replace the entire file with:

```javascript
export const campusActivities = [
  {
    id: '1',
    emoji: '🎮',
    title: 'Game Lounge',
    description: 'Drop in, play games, and meet other students.',
    status: 'OPEN TODAY',
    accent: '#8B5CF6',
  },
  {
    id: '2',
    emoji: '📚',
    title: 'Study Jam',
    description: 'Find a study space and get ready for your next exam.',
    status: 'STUDY NOW',
    accent: '#22D3EE',
  },
  {
    id: '3',
    emoji: '🍕',
    title: 'Campus Eats',
    description: 'Find food, snacks, and student dining options around campus.',
    status: 'GET FOOD',
    accent: '#FB923C',
  },
];
```

At the top of `App.js`, add:

```javascript
import { campusActivities } from './src/data/campusActivities';
```

Delete the three manually written `CampusCard` components.

Replace them with:

```jsx
{campusActivities.map((activity) => (
  <CampusCard
    key={activity.id}
    emoji={activity.emoji}
    title={activity.title}
    description={activity.description}
    status={activity.status}
    accent={activity.accent}
    isSelected={selectedActivity === activity.title}
    onPress={() => setSelectedActivity(activity.title)}
  />
))}
```

### Check Your Screen

The same three cards should still display and work.

### Commit

```bash
git add .
git commit -m "Render Campus Connect cards from data"
```

---

# STEP 8 — Add One Original Activity

Open:

```text
src/data/campusActivities.js
```

Below the Campus Eats object, add one activity of your own.

You may copy this example and change it:

```javascript
{
  id: '4',
  emoji: '🎤',
  title: 'Open Mic Night',
  description: 'Catch student performers, music, comedy, and spoken word.',
  status: 'TONIGHT',
  accent: '#F472B6',
},
```

You may also create your own activity.

### Check Your Screen

Your fourth card should appear automatically.

Press it and confirm the **YOUR PICK** message changes.

### Commit

```bash
git add .
git commit -m "Add an original Campus Connect activity"
```

---

# STEP 9 — Final Folder Refactor

Open:

```text
src/screens/HomeScreen.js
```

Replace the entire file with the completed `App.js` screen code.

Then change the import paths inside `HomeScreen.js` to:

```javascript
import CampusCard from '../components/CampusCard';
import { campusActivities } from '../data/campusActivities';
```

Make sure the function is named:

```javascript
export default function HomeScreen()
```

Now replace all of `App.js` with:

```javascript
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return <HomeScreen />;
}
```

### Check Your Screen

The app should look and work exactly the same.

If it changed or disappeared, stop and fix the file paths before continuing.

### Commit

```bash
git add .
git commit -m "Organize Campus Connect into course folders"
```

---

# Final Git Check

Run:

```bash
git status
git log --oneline --graph --all
```

Then push your feature branch:

```bash
git push -u origin feature/campus-connect
```

Merge it into `main`:

```bash
git switch main
git pull
git merge feature/campus-connect
git push
```

Run one final check:

```bash
git status
git log --oneline --graph --all
```

---

# Submit These Screenshots in Blackboard

Upload screenshots only.

1. Completed Campus Connect app
2. One selected activity showing in the **YOUR PICK** panel
3. Your original fourth activity
4. Completed project folders visible in Codespaces
5. `CampusCard.js`
6. `campusActivities.js`
7. `git status` showing a clean working tree
8. `git log --oneline --graph --all`
9. GitHub showing completed files on `main`

**Do not submit a repository link.**
