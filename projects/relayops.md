# RelayOps — Webhook & API Automation Hub

**Status:** In progress (Day 04 foundation complete)  
**Primary stack:** Spring Boot, PostgreSQL, Redis, Next.js  
**Portfolio role:** Backend architecture, delivery reliability, and operations

**Sprint window:** Days 04–05 of the [9-day full-scope roadmap](../roadmap/9-day-full-scope.md) (reliability core on Day 04; operations UI and release on Day 05)

## Problem

Webhook delivery is easy to demo and difficult to run reliably. RelayOps accepts events, records attempts, and makes failure behavior visible and recoverable.

## Full showcase requirements

1. Authenticated webhook/API entry points, input validation, durable event persistence, idempotency, and signed delivery.
2. Asynchronous processing with bounded retries/backoff, timeouts, terminal failure / DLQ approach, and replay semantics under an honest at-least-once delivery contract.
3. API and UI to inspect events, attempts, outcomes, and operational status.
4. Integration and failure-path tests, actionable logs/metrics, CI, deployment, and a reproducible failure/recovery demo.
5. Case study and operating instructions.

## Day 04 evidence

- Implementation repository: https://github.com/hangndat/relayops (pending first push)
- Local path: `../relayops`
- Review: `relayops/docs/day-04-review.md`

## Outstanding (Day 05)

- Operations UI (history/replay/DLQ)
- Deployment + demo video + case study
