# DocPilot — AI Document Intelligence

**Status:** Planned
**Primary stack:** Next.js, Python/FastAPI, PostgreSQL, LLM APIs
**Portfolio role:** Practical AI systems, document pipelines, and evaluation

**Sprint window:** Days 06–07 of the [9-day full-scope roadmap](../roadmap/9-day-full-scope.md) (pipeline foundation on Day 06; AI features and release on Day 07)

## Problem

Teams spend time locating facts and extracting structured information from documents. DocPilot provides a document workflow that makes model output inspectable, repeatable, and useful.

## Full showcase requirements

1. Secure PDF ingestion with access control, private storage, processing-state tracking, and text extraction.
2. Schema-validated LLM extraction and document-grounded Q&A/RAG with source citations.
3. Representative evaluation cases with observed quality and known limitations; prompt-injection and input-handling review.
4. Token/cost/latency logging, retry/error strategy, polished document UI, tests, CI, and deployment.
5. Demo recording and case study grounded in real results.

## Engineering risks and decisions

- Handle documents as untrusted content; guard against prompt injection and unsafe retrieval patterns.
- Avoid claims of accuracy without a representative evaluation set.
- Track model versions, prompts, latency, and costs where appropriate.
- Design for safe file access, retention decisions, and error handling.

## Completion evidence required

- Representative evaluation cases and documented limitations.
- Tests for validation, processing failures, and authorization.
- Cost and latency measurements with reproducible methodology where claimed.
- Runnable demo and architecture notes.
- Case study with real results rather than invented benchmarks.

**Implementation repository:** To be linked when created.
**Live demo:** Not available yet.
**Case study:** Pending implementation evidence.
