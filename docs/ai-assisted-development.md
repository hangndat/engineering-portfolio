# AI-Assisted Engineering Workflow

**Status:** Initial standard (Day 02)

**Applies to:** Documentation work in `engineering-portfolio` now, and as a reference for future app repositories.

## Responsibilities

The developer is accountable for architecture, scope, security, quality, verification, and final approval. Cursor and Claude Code are implementation assistants, not sources of truth about completed work.

## The five-step loop

1. **Plan:** Read the task and relevant code or documents. Define the smallest testable change, acceptance criteria, affected files, risks, and checks. Do not begin with a large rewrite.
2. **Implement:** Make focused changes. Respect repository conventions. Avoid adding dependencies or unrelated refactors.
3. **Test:** Run the smallest meaningful checks. For documentation: inspect links, filenames, references, and claims. For application code: use the project's existing lint, type check, test, build, and targeted integration checks as appropriate. Never invent pass results.
4. **Review:** Inspect `git diff` for correctness, security, accessibility, maintainability, accidental changes, secrets, and unsupported assertions. Review AI output as untrusted.
5. **Commit:** Only after human review. Use a descriptive conventional commit and capture the real SHA/PR URL in the progress log.

## Tool roles

- **Cursor:** Convenient for navigating a repository, implementing small focused edits, reviewing diffs, and visually inspecting frontend changes when application code exists.
- **Claude Code:** Convenient for terminal-driven investigation, bounded refactoring, test execution, and reasoned implementation summaries. Require the same evidence and review as Cursor.
- **Neither tool:** Has blanket permission to invent results, bypass checks, upload secrets, or push code automatically.

Choose the tool based on the task and review experience rather than rigidly assigning all coding to one assistant.

## Reusable task brief

Use a prompt with these fields:

- **Context:** Repository purpose and relevant files.
- **Objective:** One observable behavior or documentation outcome.
- **In scope / out of scope:** Explicit boundaries.
- **Acceptance criteria:** Conditions that a reviewer can verify.
- **Validation:** Commands or manual checks to run and evidence to report.
- **Output:** Changed files, decisions, known limitations, and suggested commit.

## Quality and security review

- **Correctness:** Does the change solve the stated problem and handle known failure modes?
- **Architecture:** Is responsibility clear? Is the solution simpler than plausible alternatives?
- **Security:** Are input, authorization, secrets, and external content handled appropriately where relevant?
- **Testing:** Are checks meaningful, actually run, and repeatable?
- **Operations:** Is the change observable, deployable, or supportable where relevant?
- **Documentation:** Are instructions accurate, current, and useful for another engineer?

## Day 02 rule-loading exercise

Run the following instruction **separately** in Cursor Agent and Claude Code, from the root of this repository:

> Without changing files, read the repository's AI instructions and identify (1) language requirements, (2) rules for committing/pushing, (3) evidence required before claiming success, and (4) how a documentation-only change should be verified. Name the relevant instruction files. Do not execute commands.

Record whether both assistants correctly identify these four points. Rule files existing on disk alone are not proof the tools actually loaded them.

## Documentation validation

From the repository root:

```bash
git status --short
git diff --check
git diff --stat
```

Manually open and check all new relative links. For staged content, also run `git diff --cached --check`. Confirm project status labels are supported by real evidence.

## Definition of done

Complete only after acceptance criteria are met, applicable checks are reported, changes have been reviewed, documentation is updated where necessary, and a meaningful commit has been created and verified. If any of these are missing, record the task as in progress or blocked.
