# Day 03 — ClientFlow P0 Blockers (RLS + Auth Callback)

**Date:** 2026-10-12

**Status:** ClientFlow **P0 blockers complete** (code + live migration apply + tests). Full roadmap Day 03 product scope (projects/documents/deploy/demo) **not started**.

## Objective

Resolve two P0 blockers recorded at Day 02 close:

1. Organization INSERT RLS policy drift (repo vs live / intended RPC-only bootstrap).
2. Authentication callback origin and redirect handling.

## Acceptance criteria

### ClientFlow (`../clientflow`)

- [x] Audit + remediation plan written (`docs/day-03-remediation-plan.md`).
- [x] Forward migration `20261012000000_align_organizations_insert_rpc_only.sql` (RPC-only org bootstrap; no rewrite of applied migrations).
- [x] Auth callback uses trusted allow-listed origin; safe `next`; PKCE cookies on redirect response.
- [x] Unit tests for origin/callback; integration tests for org INSERT denial + membership escalation.
- [x] lint / typecheck / unit / integration / build verified locally (exit 0).
- [x] Live SQL migration applied (SQL editor: `Success. No rows returned`; post-apply probe verified).
- [ ] Fresh local Supabase migration reset (CLI/Docker not configured).
- [ ] Manual browser auth onboarding in this session.
- [ ] Roadmap Day 03 product features (projects/documents/polish/deploy/demo) — deferred until P0 review.

## Verification evidence

| Check | Status | Evidence |
| --- | --- | --- |
| Live org INSERT probe (pre-fix) | Direct INSERT `42501`; RPC OK | Behavioral probe 2026-10-12 |
| Integration RLS org INSERT | Passed | `npm test` — ~3.5s |
| Unit auth callback / origin | Passed | Included in 30 unit tests |
| lint / typecheck / build | Passed | exit 0 |
| CI | Not re-run on GitHub this session | Local scripts match existing workflow |

## Unresolved risks

- Preview hosts need both Supabase Redirect URL allow-list and `AUTH_ALLOWED_ORIGINS` / `VERCEL_URL`.
- Full Day 03 product scope remains large after these P0 fixes.

## Suggested commits (pending approval)

- ClientFlow: `fix(clientflow): align org INSERT RLS and harden auth callback origin`
- Hub: `docs: record Day 03 ClientFlow P0 blocker remediation`

## Next session

Review Day 03 P0 results; apply migration if approved; then continue remaining ClientFlow product Day 03 scope or proceed per roadmap after review.
