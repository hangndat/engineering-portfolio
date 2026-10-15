# Day 04 — RelayOps Foundation

**Date:** 2026-10-15

**Status:** RelayOps Day 04 foundation **complete** locally (API + tests + CI workflow + thin web shell). Deploy/demo deferred to Day 05.

## Objective

Stand up an independent RelayOps repository with reliability core: destinations, signed ingest, idempotency, async worker, retries/backoff, integration tests, CI.

## Acceptance criteria

- [x] Independent repo: `../relayops`
- [x] Flyway schema + Spring Boot API
- [x] Authenticated destination registration (API key)
- [x] Signed event ingestion (HMAC)
- [x] Idempotency keys + durable event/attempt storage
- [x] Redis queue + scheduled delivery worker
- [x] Retry/backoff + bounded HTTP timeout
- [x] Integration tests (idempotency, delivery, bad signature)
- [x] GitHub Actions CI with Postgres/Redis services
- [x] Thin Next.js console shell
- [ ] Production deploy + demo video (Day 05)

## Evidence

- `relayops/docs/day-04-review.md`
- Local: `cd api && ./mvnw test` — passed

## Next

Day 05 — operations UI, replay/DLQ, deploy, demo, case study.
