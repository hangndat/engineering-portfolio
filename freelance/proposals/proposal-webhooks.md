# Proposal template — Webhook reliability

## Goal
Make inbound/outbound webhooks durable, inspectable, and recoverable.

## Scope
- Signed ingest + idempotency
- Async delivery with retry/backoff
- Operator visibility (history/DLQ/replay)
- Failure-path tests

## Acceptance
- Duplicate events do not double-create business side effects in the accept path
- Terminal failures are listable and replayable
- Delivery semantics documented (at-least-once)
