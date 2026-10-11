# Repository Instructions

This repository is the public documentation hub for a senior software engineering portfolio. It currently contains project plans and evidence; it is **not** the source repository for ClientFlow, RelayOps, or DocPilot.

## Operating principles

- Communicate with the developer in Vietnamese. Write code, README files, technical documents, commit messages, and code comments in clear professional English.
- Work in small vertical slices with explicit acceptance criteria. Prefer simplicity and maintainability over broad scaffolding, new dependencies, or abstractions without a proven need.
- Before changing files, inspect the relevant repository context and summarize the intended scope and validation method.
- Preserve the existing directory layout and naming conventions. If requirements are ambiguous, state assumptions and choose a safe, reversible approach.
- Treat AI-generated code and claims as untrusted until reviewed and verified.
- Never fabricate completed features, test passes, performance numbers, deployments, client experience, or commit evidence.
- Do not read, print, or commit credentials, tokens, private environment files, or unrelated personal data.
- Do not run destructive commands, change remote settings, commit, or push unless explicitly requested by the developer.

## Before declaring a task complete

1. Check the requested acceptance criteria against actual changes.
2. Review the diff for correctness, security implications, unnecessary changes, and readability.
3. Run the relevant tests and checks available in **this** repository. For documentation-only changes, validate local Markdown links and run `git diff --check`.
4. Report exactly what was tested, with commands and observed results. Explicitly disclose checks that could not run.
5. Update progress documentation when the task calls for it. Suggest a conventional commit message; do not claim the commit exists before verification.

## Reference

Read [docs/ai-assisted-development.md](docs/ai-assisted-development.md) for the workflow, review checklist, and tool-verification exercise. App-specific rules belong in each app repository, not in this portfolio hub.
