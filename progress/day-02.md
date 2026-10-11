# Day 02 — Cursor-Only Workflow and ClientFlow Foundation

**Date:** 2026-10-11

**Status:** ClientFlow Day 02 foundation **verified** (CI green + live RLS/role hardening). Day 03 product scope remains.

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

### ClientFlow foundation (separate implementation repository: `../clientflow`)

- [x] Independent ClientFlow repository initialized with architecture notes and threat model (`docs/architecture.md`, `docs/security.md`).
- [x] Next.js/TypeScript/Tailwind/Supabase foundation, environment template, and CI scaffold exist.
- [x] Auth, protected routes, organization model, and first authenticated tenant-safe vertical slice are implemented with real checks.
- [x] Manual slice against live Supabase verified (org create → dashboard → client create/list).
- [x] Suggested commits exist on GitHub: `9d520ad` foundation; `94abd04` CI/auth/RLS hardening.
- [x] GitHub Actions green on `94abd04` (20 passed, 2 integration skipped without secrets).
- [x] Live credentialed RLS: cross-tenant denial **and** admin self-promotion block **passed** after confirming membership hardening migration is applied.

## Verification evidence

| Check | Status | Evidence |
| --- | --- | --- |
| Cursor rule-loading exercise | Verified | Vietnamese chat / English artifacts; no commit/push unless requested; no fabricated passes; docs checks = links + `git diff --check`. |
| Roadmap migration | Verified | Active plan `roadmap/9-day-full-scope.md`. |
| ClientFlow CI | Verified | [Actions run on 94abd04](https://github.com/hangndat/clientflow/actions/runs/38139219095) — success; 20 passed, 2 skipped. |
| Membership hardening migration | Verified applied | Behavioral probe on configured Supabase project; no destructive reset. |
| ClientFlow live RLS integration | Verified | `npm run test:integration` — cross-tenant + role hardening both passed (~4s each). |
| ClientFlow lint/typecheck/test/build | Verified locally | All exit 0 in verification session after live RLS. |
| Conventional commit (ClientFlow foundation) | Verified | [`9d520ad`](https://github.com/hangndat/clientflow/commit/9d520ad) |
| Conventional commit (CI/security fix) | Verified | [`94abd04`](https://github.com/hangndat/clientflow/commit/94abd04) |
| Hub docs migration commit | Verified | [`a13e586`](https://github.com/hangndat/engineering-portfolio/commit/a13e586b2160347d22b4de979670bc634d487cad) |

## Unresolved risks and unverified outcomes

- **Schedule risk:** Days 03–09 full-scope compression remains extreme.
- **Callback host alignment:** Callback `Location` uses request origin; email redirects use `NEXT_PUBLIC_SITE_URL` — keep Auth allow-list aligned.
- **Org INSERT policy drift:** Live project blocks direct `organizations` INSERT via RLS; app uses `create_organization` RPC. Fresh environments should follow migration files carefully.
- **Day 03+:** Projects/documents, polish, deploy, demo video not started.
- **Day 01:** Evidence unchanged.

## Review notes

- Do not redefine showcases as toy MVPs.
- Secretless CI ≠ live RLS proof; both are now recorded separately.
- ClientFlow app rules live in that repo’s `.cursor/rules/project.mdc`.

## Suggested commits (pending approval)

- ClientFlow: `docs(clientflow): record Day 02 live RLS verification evidence`
- Hub: `docs: close Day 02 ClientFlow foundation verification`

## Next session

Proceed to **Day 03 — ClientFlow complete product and release** per `roadmap/9-day-full-scope.md`.
