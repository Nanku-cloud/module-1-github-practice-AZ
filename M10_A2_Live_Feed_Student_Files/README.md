# Module 10 Assignment 2 — LiveFeed Video Feedback Lab

## Start Here

This assignment is a dark social-video feed inspired by the structure of modern social platforms.

You are NOT building the app from scratch.

The starter already includes:

- dark video-feed interface
- two short local videos
- play/pause behavior
- reactions/comments/share layout
- pull-to-refresh loading feedback
- Create Video Post screen
- video preview area
- upload-processing state
- success and error areas
- media-library integration
- clearly marked TODO sections

The goal is to make the app communicate clearly with the user.

## Run the Project

```bash
npm install
npx expo start --web
```

For the video-picker portion, also test on a physical phone when possible.

## Main Files

```text
src/app/index.js
src/app/create.js
src/components/VideoPost.js
src/data/feedData.js
```

Search the project for:

```text
TODO
```

There are six required TODO areas.

---

# TODO 1 — Create Button Animated Value

File:

```text
src/app/index.js
```

Create one `Animated.Value` for the Create Video Post control.

Ask yourself:

> What scale represents the normal size of a button?

---

# TODO 2 — Press-In Feedback

When the user touches Create Video Post, the button should react immediately.

Use a small scale change.

Do not use dramatic movement.

The goal is:

```text
Finger touches button
↓
Button responds
↓
User knows the touch registered
```

---

# TODO 3 — Press-Out Feedback

Return the Create Post control to normal size.

Decide whether `Animated.timing()` or `Animated.spring()` feels better.

Be prepared to explain why.

---

# TODO 4 — Connect the Animation

Wrap the supplied Create Post UI in `Animated.View`.

Connect your animated value to:

```text
transform → scale
```

Test the interaction several times.

It should feel quick, not slow.

---

# TODO 5 — Choose a Video

File:

```text
src/app/create.js
```

Use Expo ImagePicker to open the device media library.

Your picker must allow:

```text
videos
```

not just images.

Use:

```javascript
ImagePicker.launchImageLibraryAsync()
```

If the user chooses a video:

```text
result.assets[0].uri
```

contains the selected local video URI.

Store that URI in:

```text
selectedUri
```

If the user cancels the picker, do not crash the app.

The user should remain on the Create Video Post screen.

---

# TODO 6 — Success Feedback

The simulated upload already changes the application to the success state.

Your job is to animate the success message.

Use:

```text
successOpacity
Animated.timing()
```

The message should fade into view.

Do not make the success state bounce around the screen.

---

# What You Need to Think About

This assignment is not just about getting the code to run.

Think about these situations.

### The user taps Post twice.

Should the app create two uploads?

No.

That is why the button becomes disabled while `uploadState` is:

```text
uploading
```

### The user denies media permission.

Should the app crash?

No.

The app should explain what happened and remain usable.

### The user cancels the picker.

Is that an error?

No.

The user simply decided not to choose a video.

### The user chooses the wrong video.

How can preview help?

The preview gives the user a chance to review the selection before posting.

---

# Design Challenge

Add **one additional feedback improvement** to the app.

Choose one:

- animate the Like control
- show a small pause/play feedback animation
- improve the upload-processing feedback
- animate an error message into view
- create a subtle posted-success confirmation
- add a visual state to the selected video preview

You must be able to answer:

> What user question does this feedback answer?

---

# Media Requirement

The starter already contains two local demo videos.

You must successfully load both supplied videos.

For your upload test, select one short video from your own device.

Do not add copyrighted full-length movies, TV episodes, or other inappropriate media.

A short original phone recording is enough for testing.

---

# Test Before Submission

Verify:

- first supplied video loads
- second supplied video loads
- play/pause works
- Create Video Post button responds visually
- media picker opens
- canceling the picker does not crash the app
- selected video appears in preview
- Post button becomes disabled during upload
- `Uploading...` appears
- success message appears after upload
- missing-video error state works
- denied-permission state is handled
- pull-to-refresh shows loading feedback

---

# Suggested Git Checkpoints

```text
Add create post press feedback
Complete video picker TODO
Add selected video preview
Add upload success animation
Test denied permission and error states
Complete LiveFeed feedback challenge
```

---

# Think Like a Developer

A good interface answers questions before the user has to ask them.

Examples:

```text
Did my tap register?
Is my video loading?
Which video did I choose?
Is the app uploading?
Did the post work?
Why can't I press Post again?
What happened when permission was denied?
```

Your job is to make those answers visible in the interface.
