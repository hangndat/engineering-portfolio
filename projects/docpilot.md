# DocPilot — AI Document Intelligence

**Status:** Planned  
**Primary stack:** Next.js, Python/FastAPI, PostgreSQL, LLM APIs  
**Portfolio role:** Practical AI systems, document pipelines, and evaluation

## Problem

Teams spend time locating facts and extracting structured information from documents. DocPilot explores a document workflow that makes model output inspectable, repeatable, and useful.

## Intended vertical slices

1. Upload supported document formats with size and type validation.
2. Extract text and track ingestion states.
3. Produce schema-constrained structured information.
4. Offer document-grounded Q&A with source references where supported.
5. Make processing status, errors, and basic usage/cost information visible.

## Engineering risks and decisions

- Handle documents as untrusted content; guard against prompt injection and unsafe retrieval patterns.
- Avoid claims of accuracy without a representative evaluation set.
- Track model versions, prompts, latency, and costs where appropriate.
- Design for safe file access, retention decisions, and error handling.
- Keep an initial implementation focused; add retrieval complexity only where evidence justifies it.

## Completion evidence required

- Representative evaluation cases and documented limitations.
- Tests for validation, processing failures, and authorization.
- Cost and latency measurements with reproducible methodology.
- Runnable demo and architecture notes.
- Case study with real results rather than invented benchmarks.

**Implementation repository:** To be linked when created.  
**Live demo:** Not available yet.  
**Case study:** Pending implementation evidence.
