# Day 02 — Cursor-Only Workflow and ClientFlow Foundation

**Date:** 2026-10-11

**Status:** In progress — portfolio docs migration committed; ClientFlow foundation not verified

## Objective

1. Adopt Cursor as the only AI development tool and replace the 90-day plan with the [9-day full-scope roadmap](../roadmap/9-day-full-scope.md) (workload compression, not toy-MVP reduction).
2. Begin ClientFlow foundation work in the same development day (independent repo, architecture, auth, tenant-safe vertical slice) — tracked separately below until evidenced.

## Planned scope

- Replace `roadmap/90-day-plan.md` with `roadmap/9-day-full-scope.md`.
- Update README links, portfolio status, and project briefs to full showcase requirements.
- Use `.cursor/rules/engineering-workflow.mdc` as the sole AI coding rules file; remove `CLAUDE.md` and Claude Code requirements.
- Keep `docs/ai-assisted-development.md` as the Cursor-only **Plan → Implement → Test → Review → Commit** workflow.
- Verify Cursor instruction loading.
- Start ClientFlow: architecture/threat model, Next.js/TypeScript/Tailwind/Supabase setup, env template, CI, auth, protected routes, organization model, first authenticated tenant-safe slice.

## Acceptance criteria

### Portfolio hub / tooling (this repository)

- [x] `roadmap/9-day-full-scope.md` is the active roadmap; the 90-day plan file is removed; reduced-MVP sprint docs are not used as the plan of record.
- [x] README and project briefs reference full-scope outcomes and correct sprint days.
- [x] `.cursor/rules/engineering-workflow.mdc` is the single source of AI coding rules; `CLAUDE.md` is removed.
- [x] `docs/ai-assisted-development.md` describes a Cursor-only Plan → Implement → Test → Review → Commit loop.
- [x] Cursor Agent can correctly report language, commit, verification, and documentation-check rules without editing files.
- [x] Relative Markdown links and `git diff --check` are verified; unresolved risks are recorded.
- [x] A conventional commit for this docs migration exists and its SHA is recorded.

### ClientFlow foundation (separate implementation repository)

- [ ] Independent ClientFlow repository initialized with architecture notes and threat model.
- [ ] Next.js/TypeScript/Tailwind/Supabase foundation, environment template, and CI scaffold exist.
- [ ] Auth, protected routes, organization model, and first authenticated tenant-safe vertical slice are demonstrated with real checks.
- [ ] Suggested first code commit evidence exists: `feat(clientflow): establish authenticated tenant foundation`.

## Verification evidence

| Check | Status | Evidence |
| --- | --- | --- |
| Cursor rule-loading exercise | Verified | Cursor Agent identified: (1) Vietnamese chat / English artifacts — `.cursor/rules/engineering-workflow.mdc`; (2) no commit/push unless explicitly requested; (3) evidence = real commands/results, no fabricated passes; (4) docs checks = relative Markdown links + `git diff --check`. |
| Roadmap migration | Verified (local) | Active plan is `roadmap/9-day-full-scope.md`; `roadmap/90-day-plan.md` and MVP sprint plan removed from the plan of record. |
| Markdown links | Verified | Relative Markdown links in `.md`/`.mdc`: 16 checked, 0 broken (includes README → `roadmap/9-day-full-scope.md` and project sprint links). |
| `git diff --check` | Verified | `git diff --check` exit 0 on working tree changes after full-scope edits. |
| Human review | Verified (local) | Docs reviewed for full-scope consistency (not toy MVP); Day 01 evidence untouched; no dependencies added. |
| Tooling change | Recorded | Cursor-only: `CLAUDE.md` removed; Claude Code requirements dropped. |
| ClientFlow foundation | Unverified | No ClientFlow application repository or auth slice evidence in this session. |
| Conventional commit (docs) | Verified | [`a13e586`](https://github.com/hangndat/engineering-portfolio/commit/a13e586b2160347d22b4de979670bc634d487cad) — `docs: compress full portfolio roadmap into nine days` |

## Unresolved risks and unverified outcomes

- **Schedule risk:** Compressing original 90-day outcomes into Days 02–09 is an extreme stretch; feasibility is not guaranteed.
- **ClientFlow Day 02 foundation:** Not started/verified; Day 02 cannot be marked complete until foundation AC and evidence exist (or are explicitly deferred with impact recorded).
- **Deployment / secrets / CI:** Production-minded releases for three apps plus a portfolio website may exceed available time; failures must stay **In progress / Blocked / Partial**, not silently green.
- **GitHub publication:** Docs migration commit `a13e586` exists locally; remote push and ClientFlow commits remain unverified until confirmed on GitHub.
- **Day 01:** Completion evidence remains valid and is not retroactively expanded to cover Day 02–09 work.

## Review notes

- Do not redefine showcases as toy MVPs to make status look complete.
- Preserve original engineering quality gates from the full-scope roadmap.
- Copy Cursor workflow principles into app repositories when those repos are created.

## Suggested commits

- Hub: `docs: compress full portfolio roadmap into nine days`
- ClientFlow (after evidence): `feat(clientflow): establish authenticated tenant foundation`

## Next session

Continue Day 02 ClientFlow foundation, then Day 03 ClientFlow complete product and release per the full-scope roadmap.
