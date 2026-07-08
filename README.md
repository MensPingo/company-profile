# company-profile

Official company profile, documentation, and workflow guidelines for MensaPingo Tech.

## Repository status

This repository uses `main` as the primary production branch. The local branch was normalized from `work` to `main` so the project follows a conventional deployment-ready branch naming model.

> Note: No Git remote is currently configured in this checkout. Add the GitHub remote before pushing or pruning remote branches.

## Branch strategy

- `main`: Production-ready branch. Keep this branch deployable.
- `develop`: Optional integration or staging branch if the team needs a pre-production workflow.
- `feature/<short-name>`: Short-lived branches for new features.
- `fix/<short-name>`: Short-lived branches for bug fixes.
- `chore/<short-name>`: Short-lived branches for maintenance tasks.

## Remote setup

Before pushing changes, configure the project remote:

```bash
git remote add origin <repository-url>
git fetch origin --prune
```

After the remote is configured, verify branch tracking:

```bash
git branch -a -vv
git status --short --branch
```

If `main` is the deployed branch, push and track it with:

```bash
git push -u origin main
```
