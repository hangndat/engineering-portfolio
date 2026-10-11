# RelayOps — Webhook & API Automation Hub

**Status:** Planned  
**Primary stack:** Spring Boot, PostgreSQL, Redis, Next.js  
**Portfolio role:** Backend architecture, distributed-system reliability, and operations

## Problem

Webhook delivery is easy to demo and difficult to run reliably. RelayOps focuses on accepting events, recording attempts, and making failure behavior visible and recoverable.

## Intended vertical slices

1. Register destinations and authenticate API requests.
2. Ingest and persist events safely.
3. Process deliveries asynchronously with bounded retries.
4. Record attempts, response summaries, and terminal states.
5. Expose an operations UI to inspect delivery history and replay failed events.

## Engineering risks and decisions

- Define idempotency behavior and delivery semantics explicitly; do not promise exactly-once delivery.
- Separate request acceptance from downstream delivery processing.
- Use bounded backoff, timeout rules, and dead-letter handling as scope permits.
- Treat webhook signing, secret rotation, and destination validation as security-sensitive.
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
