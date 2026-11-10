# Module 12 Assignment 1 — StreamFix: Mobile Music App Quality Audit

## Purpose

You are working as the QA / mobile development team for StreamFix, a nearly finished music-streaming application.

The application is intentionally designed to look complete.

It is not complete.

Your job is to identify, reproduce, fix, and retest the supplied quality defects.

Do not redesign the interface into a generic classroom app.

Preserve the existing music-streaming structure and visual hierarchy.

---

# Local Setup

This project runs on your LOCAL computer.

You do not need GitHub.

## 1. Extract the ZIP

Do not run the project from inside the ZIP file.

Extract it first.

## 2. Open the Project in VS Code

Use:

```text
File → Open Folder
```

Choose the extracted `streamfix` folder.

## 3. Verify Node.js and npm

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

Both should return version numbers.

## 4. Install Packages

Run:

```bash
npm install
```

## 5. Start the App

Run:

```bash
npx expo start --web
```

Open the project in Chrome or Microsoft Edge.

## 6. Use Mobile Device View

Open browser Developer Tools and turn on Mobile Device View / Responsive Device Toolbar.

Test at least two different phone sizes.

---

# Your QA Tickets

The application contains six intentional defects.

Do not randomly rewrite the project.

For each defect:

1. reproduce it
2. document what happened
3. determine the likely cause
4. correct the code
5. retest the feature
6. test a related feature for regression

---

# QA-01 — Mini Player Covers Bottom Navigation

Reproduce this on a smaller phone viewport.

Expected:
- mini player remains visible
- Home / Search / Your Library remain fully usable
- mini player does not cover navigation

---

# QA-02 — Search Has No Proper Initial or No-Results State

Current problem:
- blank query can look empty
- a search with zero results can also look empty

Expected:
- initial state clearly tells the user how to begin
- zero-result state clearly says no results were found
- successful search still shows results

Test:
- blank search
- successful search
- unsuccessful search

---

# QA-03 — Favorites Can Be Added More Than Once

Current problem:
- repeated taps can add the same item multiple times

Expected:
- the same track should not be duplicated in Favorites

Test:
- add once
- add repeatedly
- confirm only one saved item exists

---

# QA-04 — Broken Artwork Has No Graceful Fallback

One supplied item intentionally uses an invalid image source.

Expected:
- broken artwork does not destroy the layout
- a fallback visual or safe local replacement is shown
- title and artist remain readable

Do not delete the track to hide the bug.

---

# QA-05 — Long Track Title Breaks the Mini Player

Use the supplied long track title.

Expected:
- Play/Pause remains visible
- text does not push controls off-screen
- title truncates or wraps appropriately
- mini player keeps its compact height

---

# QA-06 — Search Performs Unnecessary Expensive Work

Current problem:
- search intentionally performs wasteful work while typing

Expected:
- remove unnecessary processing
- use an appropriate optimization only if justified
- do not add React.memo / useMemo / useCallback just because they exist

Be prepared to explain what you changed and why.

---

# Required Testing Matrix

Create a table in your assignment document with at least these columns:

| Test ID | Feature | Steps | Expected Result | Actual Result | Status | Severity |
|---|---|---|---|---|---|---|

Use:
- PASS
- FAIL
- NEEDS WORK

Severity:
- Critical
- High
- Medium
- Low

---

# Required Evidence

Include screenshots showing:

1. StreamFix Home screen
2. Search screen
3. Your Library screen
4. Now Playing screen
5. QA-01 before fix
6. QA-01 after fix
7. QA-02 initial state after fix
8. QA-02 no-results state after fix
9. QA-03 duplicate-favorite problem or evidence of repeated test
10. QA-03 corrected result
11. QA-04 broken-artwork problem
12. QA-04 fallback / corrected result
13. QA-05 long-title problem
14. QA-05 corrected result
15. QA-06 code before / area identified
16. QA-06 corrected code
17. app tested at a second mobile viewport
18. completed QA test table

---

# Reflection

Write 250–300 words explaining:

- why “the app opens” is not enough to prove quality
- which defect was easiest to reproduce
- which defect required the most troubleshooting
- how you determined severity
- how you verified a fix
- what regression testing you performed
- why a polished interface can still contain serious defects
- what you changed for QA-06 and why

Use APA 7 student-paper formatting.

---

# Submission

Submit ONE APA 7 document containing:

- reflection
- QA testing matrix
- application evidence screenshots
- References page if outside sources were used

Do not submit a GitHub repository link.
