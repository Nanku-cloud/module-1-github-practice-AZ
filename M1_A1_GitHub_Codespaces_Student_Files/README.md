# Module 1 Assignment 1: GitHub and Codespaces Workflow

## Objective

In this assignment, you will practice the GitHub workflow used throughout the course. You will open a prepared repository in GitHub Codespaces, inspect the project, create a feature branch, make small changes, stage files, create commits, push work to GitHub, and merge the completed branch into `main`.

## Learning Outcomes

By completing this assignment, you will:

- Open a GitHub Classroom repository in GitHub Codespaces.
- Identify the Explorer, editor, terminal, Source Control panel, and branch indicator.
- Explain the difference between saving, staging, committing, and pushing.
- Use `git status`, `git add`, `git commit`, `git pull`, `git push`, `git branch`, `git switch`, `git merge`, and `git stash`.
- Review commit history and verify completed work on GitHub.

## Scenario

You have joined a development team as a beginning mobile application developer. Before working on production code, your supervisor asks you to complete a GitHub onboarding activity. The team expects every developer to use feature branches, clear commit messages, and regular pushes.

## Files Provided

```text
module-1-github-practice/
├── evidence/
│   └── README.md
├── .gitignore
├── README.md
├── git-command-guide.md
├── student-profile.md
└── workflow-checklist.md
```

## Part 1 – Open the Repository

1. Accept the GitHub Classroom assignment.
2. Open your personal repository.
3. Select **Code → Codespaces → Create codespace on main**.
4. Wait for the Codespace to load.
5. Open `README.md`.

Do not run `git init`. The assignment repository is already connected to GitHub.

## Part 2 – Inspect the Repository

Run:

```bash
pwd
ls -la
git status
git branch --show-current
git remote -v
git pull
```

## Part 3 – Create a Feature Branch

```bash
git switch -c feature/github-onboarding
git branch
```

## Part 4 – Complete the Student Profile

Open `student-profile.md` and replace every `[COMPLETE THIS]` item.

Then run:

```bash
git status
git diff student-profile.md
git add student-profile.md
git commit -m "Add student developer profile"
```

## Part 5 – Complete the Git Command Guide

Open `git-command-guide.md` and complete every `_____` blank.

Then run:

```bash
git status
git diff git-command-guide.md
git add git-command-guide.md
git commit -m "Complete beginner Git command guide"
```

## Part 6 – Practice Git Stash

Open `workflow-checklist.md`. Add one sentence under **Work Session Notes** and save the file without committing it.

Run:

```bash
git status
git stash
git status
git stash pop
git status
```

Finish the checklist, then run:

```bash
git add workflow-checklist.md
git commit -m "Complete Git workflow checklist"
```

## Part 7 – Push the Feature Branch

```bash
git push -u origin feature/github-onboarding
```

## Part 8 – Merge into Main

```bash
git switch main
git pull
git merge feature/github-onboarding
git push
```

## Part 9 – Review History

```bash
git log --oneline --graph --all
```

Your repository should show at least three meaningful commits.

## Submission Requirements

Submit:

- GitHub repository link
- Screenshot of completed files in Codespaces
- Screenshot of `git log --oneline --graph --all`
- Screenshot of the updated `main` branch on GitHub

## Grading Rubric – 100 Points

| Criteria | Points |
|---|---:|
| Repository opened correctly in Codespaces | 10 |
| Student profile completed | 10 |
| Git command guide completed accurately | 20 |
| Git stash activity completed | 10 |
| Feature branch created and pushed | 15 |
| Branch merged into `main` | 15 |
| At least three meaningful commits | 10 |
| Repository link and screenshots submitted | 10 |

## Important Reminders

- Saving does not create a commit.
- Committing does not automatically push to GitHub.
- Run `git status` before and after major Git actions.
- Do not use `git push --force`, `git reset --hard`, or `git clean -fd`.
