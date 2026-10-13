# Module 8 Assignment 2 — CampusSafe: Location and Security Assistance

## Objective

Complete the supplied CampusSafe application so a user can request a current device location, see latitude and longitude, recover from location problems, and still access Campus Security when location is denied.

## The App Is Already Built

The navigation, visual design, Campus Security panel, safety content, retry interface, and presentation screens are already supplied.

Your programming work is intentionally focused on the location logic.

Open:

```text
src/app/(tabs)/assist.js
```

Search for:

```text
TODO
```

Complete the four TODO sections inside `handleGetLocation()`.

## Run the Project

```bash
npm install
npx expo start --web
```

Use Expo Web for layout and code development.

For final location testing, run the project with Expo Go on a physical phone.

## What Your Code Must Do

The completed location function must:

1. Request foreground location permission.
2. Save the returned permission status.
3. Stop safely when permission is denied.
4. Request one current device position when permission is granted.
5. Store the returned location with `setLocation()`.

The supplied interface will then display the correct loading, success, denial, retry, and location states.

## Git Checkpoints

Suggested commits:

```bash
git add .
git commit -m "Add CampusSafe location permission"
```

```bash
git add .
git commit -m "Retrieve current device position"
```

```bash
git add .
git commit -m "Handle CampusSafe denied and retry states"
```

```bash
git add .
git commit -m "Verify CampusSafe physical device flow"
```

## Important

Do not remove the Campus Security contact when location is denied.

Do not redesign the supplied CampusSafe interface.

The phone number in `src/config/security.js` is a demo value for coursework. It must be replaced with an institution-approved number before any live deployment or public presentation that represents the app as functional.

Your Blackboard submission is one APA 7 document with your reflection and required Application Evidence screenshots.

Do not submit a repository link.
