# Module 10 Assignment 1 — Social Reel Motion Lab

## What You Are Building

You are starting with a polished dark social-media feed inspired by modern image-and-reel apps. The interface is already built. Your job is to make it feel alive **without turning it into a circus**.

This is your first focused animation assignment, so the required work is clearly marked with `TODO` comments. You will still make design decisions instead of copying every value from a worksheet.

## Run First

```bash
npm install
npx expo start --web
```

Make sure the starter works before changing anything.

## Main Files

```text
src/app/index.js
src/components/PostCard.js
src/components/StoryBubble.js
src/data/socialData.js
```

Search the project for:

```text
TODO
```

You will find six required TODO areas.

## TODO 1 — Heart Animation Value

File: `src/components/PostCard.js`

Create an `Animated.Value` for the heart scale. A normal-size element uses a scale of `1`.

Think before you type: if the heart begins at `0`, what would the user see? Why is `1` the better starting value?

## TODO 2 — Make the Like Feel Acknowledged

When the user taps the heart, the icon should briefly grow and return to normal size.

Possible tools:

```text
Animated.timing()
Animated.spring()
Animated.sequence()
```

Do not make it spin, fly away, or bounce forever. The motion should simply communicate: **your tap registered**.

## TODO 3 — Connect the Scale

Replace the normal wrapper around the heart with `Animated.View` and connect your scale through `transform`.

Test both Like and Unlike. The app must still update the heart icon and count.

## TODO 4 — Plan the Feed Entrance

File: `src/app/index.js`

Choose a short entrance for the feed:

- fade
- small vertical slide
- fade + small vertical slide

There is no bonus for the most complicated choice. Pick the motion you can justify.

## TODO 5 — Start the Feed Animation

Start the animation when the screen loads. Use `useEffect()`.

Ask yourself: would a one-second entrance feel smooth, or would it make the user wait for content they already asked to see?

## TODO 6 — Apply the Entrance

Wrap only the feed content in `Animated.View` and apply the animated style.

**Do not animate the bottom navigation.** Navigation is a stable control surface and should remain visually anchored while content changes.

## Design Challenge — Your Decision

After the six TODOs work, add **one additional purposeful micro-interaction**.

Choose one:

- bookmark/save feedback
- story press feedback
- Feed/Reels tab feedback
- comment-button feedback
- share-button feedback

You must be able to explain:

> What does this animation communicate to the user?

If your answer is only “it looks cool,” rethink it.

## Media Challenge

Replace at least **two starter post images** with your own appropriate images or properly sourced media. Keep the dark social-feed layout intact.

Record the source information because you will cite the media on your APA References page.

Do not use watermarked images, blurry screenshots, or images you cannot identify a source for.

## Reels Thinking Questions

The Reels tab is intentionally a design-thinking screen in this assignment. In your reflection, answer:

1. Should a reel appear instantly or have a short loading state?
2. What feedback should appear when a user taps a playing video?
3. How should play/pause be communicated?
4. Should every reel use a dramatic entrance animation? Why or why not?
5. Which motion would help the user and which motion would distract them?

## Test Before You Finish

You should be able to demonstrate:

- feed entrance animation
- animated Like and Unlike
- one original micro-interaction
- Feed/Reels tabs still work
- story row still scrolls
- feed still scrolls normally
- no animation blocks navigation or basic app use

## Git Checkpoints

Use meaningful commits such as:

```text
Complete feed entrance animation
Add animated like feedback
Add bookmark micro interaction
Replace social feed media
Test Module 10 animation states
```

Avoid meaningless commits such as `stuff`, `work`, `done`, or `fix`.

## Think Like a Mobile Developer

Animation should answer a user question:

```text
Did my tap work?
Did I like this post?
Did the screen change?
Did the app receive my action?
```

If the animation does not help answer something, it may not belong in the interface.
