# Day 02 — Cursor & Claude Code Engineering Workflow

**Date:** 2026-10-11

**Status:** In progress — local validation done; Claude Code exercise, commit, and GitHub publication pending

## Objective

Establish a small, maintainable, verifiable workflow for AI-assisted engineering and document how both development assistants receive project instructions.

## Planned scope

- Add root `CLAUDE.md` with shared expectations and safety limits.
- Add `.cursor/rules/engineering-workflow.mdc` for Cursor Agent.
- Add `docs/ai-assisted-development.md` defining plan, implementation, verification, review, and commit responsibilities.
- Link the workflow document from the root README when published.
- Test the instruction-loading exercise with **both** Cursor Agent and Claude Code.

## Acceptance criteria

- [x] All three workflow files exist locally, and the root README links to the workflow.
- [ ] Both assistants can correctly report the language, commit, verification, and documentation-check rules without editing files.
- [x] The shared and Cursor-specific instructions do not contradict each other.
- [x] The Markdown links and diff are checked; exact validation steps/results are recorded.
- [ ] A conventional commit exists and its SHA is recorded.

## Verification evidence

| Check | Status | Evidence |
| --- | --- | --- |
| Cursor rule-loading exercise | Verified (this session) | Cursor Agent identified: (1) Vietnamese chat / English artifacts — `CLAUDE.md`, `.cursor/rules/engineering-workflow.mdc`; (2) no commit/push unless explicitly requested; (3) evidence = real commands/results, no fabricated passes; (4) docs checks = relative Markdown links + `git diff --check` |
| Claude Code rule-loading exercise | Pending | Not run in this session |
| Markdown links | Verified | Repo relative Markdown links: 10 checked, 0 broken (includes new README → `docs/ai-assisted-development.md`) |
| `git diff --check` | Verified | Clean after removing trailing hard-break spaces in Day 02 docs; `git diff --check` and `git diff --check README.md` exit 0 |
| Human review | Verified (local) | Reviewed for simplicity, consistency, security, maintainability; no showcase briefs changed; no dependencies added |
| GitHub publication | Pending | Commit/push deferred per request |

## Review notes

- No app code is expected today.
- Copy the workflow principles into future app repositories selectively, replacing documentation-only checks with real app tests and commands.
- Do not claim the assistants or validation checks succeeded until exercised.
- `CLAUDE.md` and `.cursor/rules/engineering-workflow.mdc` share the same language, safety, evidence, and documentation-check rules; Cursor rule stays shorter and points at the full workflow doc.

## Suggested commit

`docs: standardize AI-assisted engineering workflow`

## Next session

Day 03: ClientFlow scope, first vertical slice, repository structure, and architecture decisions.
