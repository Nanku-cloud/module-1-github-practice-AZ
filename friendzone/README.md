# Module 11 Assignment 1 — FriendZone: Find Your People

## IMPORTANT: This Assignment Runs on Your Local Computer

You are NOT using GitHub Codespaces for this assignment.

You will use:

- Visual Studio Code installed on your computer
- Node.js LTS
- npm
- Expo Web
- Chrome or Microsoft Edge
- the browser's Mobile Device View / Responsive Device Toolbar

You do NOT need to upload this project to GitHub.

---

# Part 1 — Prepare Your Computer

## Step 1: Install Visual Studio Code

Install Visual Studio Code on your local computer.

Open VS Code after installation.

## Step 2: Install Node.js LTS

Install the current Node.js LTS version.

Node.js also installs npm.

After Node.js installs, close VS Code completely and reopen it.

## Step 3: Verify Node and npm

In VS Code:

```text
Terminal → New Terminal
```

Run:

```bash
node -v
```

Then:

```bash
npm -v
```

Both commands should return version numbers.

If you see:

```text
node is not recognized
```

or:

```text
npm is not recognized
```

do not change the app code yet.

Fix the local development environment first.

---

# Part 2 — Open the Assignment Correctly

Download the ZIP.

Extract the ZIP to a normal folder on your computer.

Do NOT work directly inside the ZIP file.

In VS Code choose:

```text
File → Open Folder
```

Open the extracted `friendzone` project folder.

You should see:

```text
src/
app.json
package.json
README.md
```

---

# Part 3 — Install the Project Locally

Open the VS Code terminal.

Make sure the terminal is inside the project folder.

Run:

```bash
npm install
```

This reads `package.json` and installs the packages required by the project.

You should see a new:

```text
node_modules
```

folder.

Do not edit that folder.

---

# Part 4 — Run the App

Run:

```bash
npx expo start --web
```

Expo should open the project in a web browser.

Use Chrome or Microsoft Edge.

---

# Part 5 — Turn On Mobile Device View

This app must be tested as a MOBILE interface.

In Chrome or Edge:

1. Open Developer Tools.
2. Turn on the phone/tablet device toolbar.
3. Choose a phone preset such as an iPhone or Pixel.
4. Use portrait orientation.
5. Test more than one mobile screen size.

You should be looking at the project as though it is running on a phone.

Do NOT judge the layout only from a full desktop browser window.

---

# What You Are Building

FriendZone is a light, friendly social app for meeting new friends.

It is NOT a dating app.

The starter already includes:

- polished light interface
- Discover screen
- profile cards
- shared-interest section
- Friend Zone and Pass buttons
- Upcoming Events
- profile setup screen
- profile-image selection
- React Native Gesture Handler
- Reanimated

Your job is to complete the touch and gesture behavior.

Search the project for:

```text
TODO
```

There are four required TODO areas.

---

# TODO 1 — Swipe the Profile Card

File:

```text
src/components/FriendCard.js
```

Create a:

```javascript
Gesture.Pan()
```

During the gesture:

```javascript
translateX.value =
  event.translationX;
```

The card should follow the user's drag.

When the user releases:

### Swipe Right

If the card passes:

```javascript
SWIPE_THRESHOLD
```

on the right:

```text
Friend Zone
```

the profile.

### Swipe Left

If the card passes the threshold on the left:

```text
Pass
```

the profile.

### Not Far Enough

If the user does NOT cross the threshold:

```javascript
withSpring(0)
```

should return the card to the center.

---

# TODO 2 — Movement and Rotation

Connect:

```text
translateX
```

to the profile card.

The card should move horizontally with the user.

Add a SMALL amount of rotation.

Do not make the card spin.

The movement should feel natural.

---

# TODO 3 — Friend Zone and Pass Feedback

The card contains two feedback labels:

```text
FRIEND ZONE
```

and:

```text
PASS
```

When the card moves right:

```text
FRIEND ZONE
```

should gradually become visible.

When the card moves left:

```text
PASS
```

should gradually become visible.

This feedback should happen BEFORE the user releases the card.

---

# TODO 4 — Add Your Profile Photo

File:

```text
src/app/profile.js
```

Use Expo ImagePicker.

Allow the user to choose an IMAGE from the local computer/device.

Use:

```javascript
ImagePicker.launchImageLibraryAsync()
```

When an image is selected:

```text
result.assets[0].uri
```

contains the selected file URI.

Store it in:

```text
photoUri
```

If the user cancels the picker:

- do not crash
- do not show an unnecessary error
- keep the Profile screen usable

---

# Build Your Student Profile

On the Profile screen:

- add your first name
- write a short bio
- choose a profile photo
- select at least 5 interests

Available interests include:

- Gaming
- Technology
- Basketball
- Music
- Movies
- Anime
- Fitness
- Photography
- Art
- Travel
- Food
- Sports

---

# Shared Interests

The app compares your interests with another profile.

Example:

Your interests:

```text
Gaming
Technology
Basketball
Music
Movies
```

Jordan's interests:

```text
Gaming
Technology
Anime
Food
Music
```

The app should show:

```text
You Both Like

Gaming
Technology
Music
```

This helps users understand what they have in common.

---

# Friend Zone vs Pass

## Friend Zone

Swipe right or use the visible:

```text
Friend Zone
```

button.

The Friend Zone count should increase.

## Pass

Swipe left or use:

```text
Pass
```

The Passed count should increase.

## Accessibility

The swipe gesture is NOT the only way to use the app.

Do not remove the visible buttons.

A user who cannot comfortably perform a swipe should still be able to complete the same action.

---

# Events Panel

The starter includes:

- Game & Chill Night
- Coffee & Creatives Meetup
- Campus Fitness Meetup

Test:

```text
I'm Interested
```

When selected, the event should clearly show:

```text
Interested ✓
```

You do not need to create a backend for the events.

---

# Browser Mobile Testing

Test the project in Chrome or Edge Mobile Device View.

Test at least TWO different phone sizes.

Check:

- profile card width
- readable text
- Friend Zone / Pass labels
- buttons
- interest chips
- events panel
- bottom navigation
- scrolling

The app should not require a desktop-sized window to look correct.

---

# Final Testing Checklist

Before finishing, verify:

- `node -v` works
- `npm -v` works
- `npm install` completed
- `npx expo start --web` runs
- app opens in Chrome or Edge
- Mobile Device View is enabled
- tested at two phone sizes
- swipe right works
- swipe left works
- small swipe returns to center
- Friend Zone label appears
- Pass label appears
- Friend Zone button works
- Pass button works
- Friend Zone count updates
- Passed count updates
- profile-image picker works
- canceling image picker does not crash
- at least 5 interests selected
- shared interests display
- events display
- Interested button works

---

# What to Remember

The important interaction is:

```text
See Profile
    ↓
Compare Shared Interests
    ↓
Drag Card
    ↓
Receive Feedback
    ↓
Friend Zone or Pass
    ↓
Next Profile
```

The user should always understand what the gesture is about to do.

Good gestures are predictable, responsive, and easy to recover from.
