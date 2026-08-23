# Beginner Git Command Guide

Complete each blank.

| Task | Command |
|---|---|
| Create a repository in a regular folder | `git init` |
| Inspect changed, staged, and untracked files | `git status` |
| Stage every current change | `git add .` |
| Create a commit with a message | `git commit -m "Describe the change"` |
| Display local branches | `git branch` |
| Create and move to a new branch | `git switch -c feature/example` |
| Combine another branch into the current branch | `git merge feature/example` |
| Temporarily store unfinished work | `git stash` |
| Restore the most recent stash | `git stash pop` |
| Download and combine remote changes | `git pull` |
| Send commits to GitHub | `git push` |
| Display a short commit history | `git log --oneline` |

## Short Responses

1. Why should `git init` not be used inside a GitHub Classroom repository?

GitHub Classroom repositories are already initialized Git repositories when cloned. Running git init inside an existing repository creates a nested Git repository, which corrupts the project structure and breaks tracking.

2. What is the difference between `git add`, `git commit`, and `git push`?

git add stages modified files to prepare them for saving, git commit saves those staged changes as a local snapshot with a message, and git push uploads those local snapshots to the online GitHub repository.

3. Why are clear commit messages important?

Clear commit messages help team members and your future self understand what changes were made and why. They make project history easy to read, simple to search through, and far easier to debug if something breaks.
