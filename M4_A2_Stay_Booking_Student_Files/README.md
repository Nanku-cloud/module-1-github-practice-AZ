# Module 4 Assignment 2
# Stay Booking — Travel Reservation Interface

## Objective

Complete a guided React Native application called **Stay Booking** for a modern travel platform. The application uses reusable components, props, state, `TextInput`, `useRef()`, `ScrollView`, `Pressable`, `Modal`, validation, conditional rendering, and `StyleSheet`.

Students will also complete a short **APA 7 reflection** explaining how input, refs, state, validation, scrolling, and modal interfaces are used.

## Industry Scenario

You are a junior mobile developer working for a travel-booking company. The design team has provided a production-style reservation screen.

Your job is to connect the form behavior while preserving the supplied mobile layout.

Follow the assignment in order:

**Read → Type/Paste → Save → Test → Commit**

---

# STEP 1 — Open the Project

```bash
git status
git pull
git switch -c feature/stay-booking
npm install
npm run web
```

Do **not** run `git init`.

### Checkpoint

The reservation screen should open with destination and guest fields, guest controls, room preference, and booking summary.

---

# STEP 2 — Add One Original Room Preference

Open:

```text
src/data/roomOptions.js
```

Replace `TODO 1` with:

```javascript
{
  id: 'room-balcony',
  name: 'Balcony King',
  description: 'King bed with private balcony',
  nightlyPrice: 219,
},
```

### Commit

```bash
git add .
git commit -m "Add Stay Booking room data"
```

---

# STEP 3 — Complete Guest Count

Open:

```text
src/screens/BookingScreen.js
```

Replace `TODO 4` with:

```javascript
setGuestCount((current) => Math.max(1, current - 1));
```

Replace `TODO 5` with:

```javascript
setGuestCount((current) => current + 1);
```

### Checkpoint

Guest count can increase but cannot drop below 1.

### Commit

```bash
git add .
git commit -m "Add guest count controls"
```

---

# STEP 4 — Add useRef Input Focus

Replace `TODO 3` with:

```javascript
const destinationRef = useRef(null);
const guestNameRef = useRef(null);
```

Connect the destination input:

```jsx
ref={destinationRef}
```

Change:

```jsx
onSubmitEditing={() => {}}
```

to:

```jsx
onSubmitEditing={() => guestNameRef.current?.focus()}
```

Connect the guest-name input:

```jsx
ref={guestNameRef}
```

Change the Focus Destination button to:

```jsx
onPress={() => destinationRef.current?.focus()}
```

### Checkpoint

- Press **Focus destination**.
- Press Enter/Next from the destination field.
- Focus should move to the guest-name field.

### Commit

```bash
git add .
git commit -m "Add useRef input focus"
```

---

# STEP 5 — Open the Room Modal

The screen already opens `RoomPreferenceModal`.

Your job is to complete the room list in the next step.

---

# STEP 6 — Build the Room Preference Modal

Open:

```text
src/components/RoomPreferenceModal.js
```

Replace `TODO 2` with:

```jsx
{rooms.map((room) => (
  <Pressable
    key={room.id}
    onPress={() => {
      onSelect(room.id);
      onClose();
    }}
    style={styles.room}
  >
    <View style={styles.roomTop}>
      <Text style={styles.roomName}>{room.name}</Text>

      <Ionicons
        name={
          selectedId === room.id
            ? 'checkmark-circle'
            : 'ellipse-outline'
        }
        size={24}
        color={
          selectedId === room.id
            ? colors.accent
            : colors.muted
        }
      />
    </View>

    <Text style={styles.description}>
      {room.description}
    </Text>

    <Text style={styles.price}>
      ${room.nightlyPrice} / night
    </Text>
  </Pressable>
))}
```

### Checkpoint

The modal should show every room, including your original room.

### Commit

```bash
git add .
git commit -m "Build room preference modal"
```

---

# STEP 7 — Add Booking Validation

Inside `handleConfirm()`, replace `TODO 6` with:

```javascript
setError('');
setConfirmed(false);

if (!destination.trim()) {
  setError('Enter a destination before continuing.');
  destinationRef.current?.focus();
  return;
}

if (!guestName.trim()) {
  setError('Enter the primary guest name before continuing.');
  guestNameRef.current?.focus();
  return;
}

if (!selectedRoomId) {
  setError('Choose a room preference before continuing.');
  return;
}

setConfirmed(true);
```

### Checkpoint

Test all three validation errors.

Then complete all required fields and confirm the successful state.

### Commit

```bash
git add .
git commit -m "Add booking validation"
```

---

# STEP 8 — Final Test

Confirm:

- Destination input works
- Guest-name input works
- `useRef()` moves focus
- Guest count cannot go below 1
- Room modal opens and closes
- Room selection updates the summary
- Missing destination shows an error
- Missing guest name shows an error
- Missing room shows an error
- Successful confirmation appears
- Original room appears

### Commit

```bash
git add .
git commit -m "Test Stay Booking workflow"
```

---

# STEP 9 — Push and Merge

```bash
git push -u origin feature/stay-booking
git switch main
git pull
git merge feature/stay-booking
git push
git status
git log --oneline --graph --all
```

---

# APA 7 Reflection

Submit a **250–300 word APA 7 reflection**.

Address:

- How is `TextInput` used in the reservation form?
- What information is stored in state?
- How does `useRef()` move focus?
- Why is `ScrollView` needed?
- How is `Modal` used?
- How does validation prevent incomplete reservations?
- How does the interface change after success?
- What problem did you encounter and how did you solve it?

Use APA 7 student paper format, 1-inch margins, double spacing, page numbers, an approved readable font such as 12-point Times New Roman, a student title page, paragraph indentation, complete sentences, and professional academic writing.

Include a References page only if outside sources are used.

---

# Screenshots to Upload in Blackboard

1. Completed Stay Booking application
2. Destination `TextInput`
3. Guest-name `TextInput`
4. Guest count above 1
5. Room-preference modal open
6. Selected room preference
7. Validation error
8. Successful booking confirmation
9. Original room preference
10. Completed `RoomPreferenceModal.js`
11. Completed `BookingScreen.js`
12. `git status` showing clean working tree
13. `git log --oneline --graph --all`
14. GitHub showing files on `main`
15. Completed APA 7 reflection document

**Do not submit a repository link.**
