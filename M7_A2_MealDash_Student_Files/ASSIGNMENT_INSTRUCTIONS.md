# Module 7 Assignment 2 — MealDash: Food Delivery Navigation App

## Objective
Complete the supplied MealDash app so users can move from a simulated login into a multi-screen food-delivery experience.

## Requirements
Your completed app must:
- validate the Login form;
- use `router.replace()` to enter the main app;
- use Home, Search, Orders, and Account tabs;
- open restaurant details with a dynamic `[id]` route;
- read the selected restaurant with `useLocalSearchParams()`;
- navigate from Restaurant Details to Cart;
- navigate from Cart to Order Summary;
- use simulated Logout to return to Login;
- preserve the supplied design;
- use meaningful Git commits.

## APA 7 Reflection
Write 250–300 words explaining:
- why Login is outside the tabs;
- how `useState()` manages login form values;
- how validation works;
- why `router.replace()` is used after Login;
- how dynamic restaurant routes work;
- the difference between simulated login and real authentication;
- one navigation issue you tested or fixed.

## Application Evidence
Insert screenshots into the same APA document:
1. Login screen.
2. Login validation message.
3. Home with all four tabs.
4. Restaurant details.
5. Cart.
6. Order Summary.
7. Login code showing `router.replace()`.
8. `[id].js` showing `useLocalSearchParams()`.
9. Clean `git status`.
10. `git log --oneline --graph --decorate -8`.

Do not submit a repository link.

## Rubric — 100 Points
| Criteria | Points |
|---|---:|
| Simulated login and validation work | 20 |
| `router.replace()` correctly opens main app | 15 |
| Four-tab navigation works | 15 |
| Dynamic restaurant route works | 20 |
| Cart and Order Summary navigation work | 10 |
| Logout returns to Login | 5 |
| Supplied MealDash design is preserved | 5 |
| Git history and clean final status | 5 |
| APA 7 reflection and screenshots | 5 |
| **Total** | **100** |
