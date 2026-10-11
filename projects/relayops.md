# RelayOps — Webhook & API Automation Hub

**Status:** Planned
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

## Engineering risks and decisions

- Define idempotency behavior and delivery semantics explicitly; do not promise exactly-once delivery.
- Separate request acceptance from downstream delivery processing.
- Treat webhook signing, secret handling, and destination validation as security-sensitive.
- Prefer observable failure paths over hidden retries.

## Completion evidence required

- Integration tests for duplicate events, retry behavior, failures, and recovery.
- Documented delivery semantics and state transitions.
- Metrics or logs sufficient to investigate a delivery attempt.
- Containerized or reproducible setup and a demo.
- Written case study explaining trade-offs.

**Implementation repository:** To be linked when created.
**Live demo:** Not available yet.
**Case study:** Pending implementation evidence.
