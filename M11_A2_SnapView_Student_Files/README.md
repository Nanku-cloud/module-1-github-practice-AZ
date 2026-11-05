# Module 11 Assignment 2 — SnapView: Interactive Photo Gallery

## IMPORTANT: This Assignment Runs on Your Local Computer

You are NOT using GitHub Codespaces.

You will use:

- Visual Studio Code installed locally
- Node.js LTS
- npm
- Expo Web
- Chrome or Microsoft Edge
- Mobile Device View / Responsive Device Toolbar

You do NOT need GitHub.

---

# Part 1 — Verify Your Local Setup

Open the extracted SnapView project folder in VS Code.

Open:

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

Both must return version numbers.

If either command fails, fix Node.js / npm before editing the project.

---

# Part 2 — Install the Project

Run:

```bash
npm install
```

This installs the project packages listed in `package.json`.

Then run:

```bash
npx expo start --web
```

Open the app in Chrome or Microsoft Edge.

---

# Part 3 — Use Mobile Device View

Open Developer Tools.

Turn on the browser's phone/tablet device toolbar.

Choose a phone preset.

Use portrait orientation.

Test at least TWO different phone sizes.

Do not judge the app from a full desktop browser window.

---

# What You Are Building

SnapView is an interactive photo-gallery application.

The starter already includes:

- polished photo grid
- six supplied course-safe images
- full-screen viewer
- Previous / Next controls
- Favorite control
- dark full-screen image-viewer layout
- Gesture Handler
- Reanimated
- shared values
- zoom constants
- swipe threshold
- clearly marked TODO areas

Your job is to complete the gesture behavior.

Search the project for:

```text
TODO
```

There are five main TODO sections.

---

# TODO 1 — Pinch to Zoom

File:

```text
src/app/viewer.js
```

Create a:

```javascript
Gesture.Pinch()
```

Use:

```text
event.scale
```

with:

```text
savedScale
```

The image should zoom while the user pinches.

The starter defines:

```javascript
const MIN_SCALE = 1;
const MAX_SCALE = 3;
```

Your scale must stay inside those limits.

The image should never become smaller than normal size or zoom beyond the maximum.

---

# TODO 2 — Pan and Swipe

Create:

```javascript
Gesture.Pan()
```

The behavior changes depending on zoom.

## Normal Size

When:

```text
scale = 1
```

horizontal movement should support image navigation.

Swipe left past the threshold:

```text
Next image
```

Swipe right past the threshold:

```text
Previous image
```

If the user does not cross the threshold:

```javascript
withSpring(0)
```

should return the image to the center.

## Zoomed Image

When:

```text
scale > 1
```

the user should be able to drag/pan around the zoomed image.

Use:

```text
translationX
translationY
```

for that movement.

---

# TODO 3 — Double Tap

Create a double-tap interaction.

If the image is at normal size:

```text
double tap
↓
zoom to approximately 2x
```

If the image is already zoomed:

```text
double tap
↓
return to normal
```

The transition should feel smooth.

---

# TODO 4 — Long Press

Use:

```javascript
Gesture.LongPress()
```

A long press should show the supplied image-information panel.

The panel displays:

- image title
- image description
- hint for closing the panel

Long press again to hide it.

---

# TODO 5 — Gesture Composition

SnapView needs several gestures on the same image.

You need:

- pinch
- pan
- double tap
- long press

Combine them so they can work together without removing one another.

Think about:

> Why can a photo viewer need both simultaneous and competing gestures?

Your final viewer should still allow normal swipe navigation when the image is not zoomed.

---

# Favorite Feedback

The starter includes a Favorite button and heart icon.

Test both.

When favorited:

- heart icon should change
- button text should change to:

```text
Favorited
```

The gesture assignment is not complete if the rest of the interface becomes unusable.

---

# Accessibility Requirement

Gestures cannot be the only navigation method.

Do not remove:

```text
Previous
Next
Favorite
Close
```

A user who cannot comfortably perform a swipe, pinch, double tap, or long press should still have visible controls for important actions.

---

# Gesture Testing

Do not test each gesture only once.

Test:

### Swipe
- short left movement
- strong left swipe
- short right movement
- strong right swipe

### Pinch
- small zoom
- maximum zoom
- attempt to exceed maximum
- return to normal

### Pan
- drag while zoomed
- drag while not zoomed
- release image

### Double Tap
- normal → zoom
- zoomed → reset

### Long Press
- hold long enough
- release early
- show/hide information panel

---

# Browser Mobile Testing

Test SnapView in at least TWO browser phone presets.

Check:

- image grid
- full-screen viewer
- controls
- gesture area
- long-press panel
- text readability
- image scaling
- portrait layout

---

# Final Testing Checklist

Before finishing, verify:

- `node -v`
- `npm -v`
- `npm install`
- `npx expo start --web`
- app runs in Chrome or Edge
- Mobile Device View enabled
- two phone sizes tested
- gallery opens correctly
- tap opens image
- Previous works
- Next works
- swipe left works
- swipe right works
- small swipe returns to center
- pinch zoom works
- minimum zoom works
- maximum zoom works
- zoomed image can be dragged
- double tap works
- long press works
- favorite state works
- visible controls remain available

---

# What to Remember

A strong gesture experience follows this pattern:

```text
User Touches
      ↓
Gesture Is Recognized
      ↓
Interface Responds Immediately
      ↓
Threshold / Scale Is Evaluated
      ↓
Action Completes or Returns
```

The user should always understand what happened.

The goal is not to add as many gestures as possible.

The goal is to make the image viewer feel natural, responsive, and usable.
