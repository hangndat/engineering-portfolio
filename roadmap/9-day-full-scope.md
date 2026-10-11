# 9-Day Full-Scope AI Engineering Portfolio Execution Plan

**Version:** 2.0 — workload compression, not scope reduction
**Baseline:** 2026-10-11
**Owner:** hangndat
**Development environment:** Cursor only
**Status:** Day 01 verified; Day 02 in progress

## Mission and interpretation

Deliver the **same outcomes** originally targeted by the 90-day roadmap in a nine-development-day execution window. The objective is to compress the calendar, **not** redefine three production-minded showcases as trivial demos. This is a stretch execution plan, not a promise of feasibility or a reason to skip verification.

Because Day 01 is complete and only the GitHub foundation was delivered, the remaining original work must fit into Days 02–09. **No remaining task is considered complete until its specific evidence exists.**

## Day 09 exit outcomes — unchanged from the 90-day plan

1. Three standalone, public, production-minded code repositories: **ClientFlow**, **RelayOps**, **DocPilot**.
2. Three independently demonstrable deployed applications or reproducible live demos, plus **three recorded demo videos**.
3. Three substantive engineering case studies, grounded in actual decisions, tests, limitations, and evidence.
4. Polished GitHub profile, portfolio hub, and **personal portfolio website**.
5. Reusable **Cursor-only** rules, prompts, and engineering workflow.
6. Public CI/test evidence, deployment instructions, security review, and basic observability for each showcase.
7. Freelance positioning, scoped service packages, proposal templates, and outreach strategy for remote engagements commonly targeting USD 200–500 over 3–7 days.

## Schedule: nine days, full deliverables

| Day | Execution emphasis | Deliverable and release evidence |
| --- | --- | --- |
| **01 — Verified** | GitHub foundations | Public profile README, public portfolio hub, three project briefs, baseline roadmap, ADR, conventional commits. **Do not retroactively count unfinished Day 02–09 work.** |
| **02 — In progress** | Cursor-only workflow **and ClientFlow foundation** | Eliminate Claude Code requirements; create a single Cursor project rule source; test rule loading; initialize independent ClientFlow repository; architecture + threat model; Next.js/TypeScript/Tailwind/Supabase setup; environment template, CI, auth, protected routes, organization model, first authenticated tenant-safe vertical slice. |
| **03** | **ClientFlow: complete product and release** | Client/project CRUD, role-based membership and tenant isolation, document access, polished responsive dashboard, loading/error/empty states, tests including cross-tenant denial, CI, deployment, operational README, design ADR, demo recording, case study with honest limitations. |
| **04** | **RelayOps: foundation and reliability core** | Independent Spring Boot/PostgreSQL/Redis/Next.js repository; API contract, database migrations, authenticated destination registration; signed webhook ingestion, event persistence, idempotency keys, asynchronous worker, retry/backoff policy, bounded timeouts, delivery-state model, integration test harness and CI. |
| **05** | **RelayOps: operations UI and release** | Delivery history and attempt inspection, replay controls with authorization, terminal failure handling/DLQ approach, webhook secret handling, logs and metrics, failure-path/duplicate integration tests, deployment, demo recording, case study, operating instructions. |
| **06** | **DocPilot: document pipeline foundation** | Independent Next.js/FastAPI/PostgreSQL repository; auth/access boundaries, safe upload constraints, private document storage, ingestion lifecycle, PDF text extraction, async processing, schema/model design, failure states, integration tests and CI. |
| **07** | **DocPilot: AI features and release** | Schema-validated LLM extraction, grounded Q&A/RAG with citations, representative evaluation dataset, hallucination/failure analysis, prompt-injection defenses, token/cost/latency logging, retry/error strategy, polished document UI, deployment, demo recording, case study. |
| **08** | **Cross-project production polish** | Security and accessibility passes; targeted performance evaluation; CI/reproducibility checks; observability and runbook audit; UX cleanup and responsive polish; validate all demos; build and deploy personal portfolio website that showcases three actual projects and evidence. |
| **09** | **Client-facing launch and freelance readiness** | Final three technical case studies, three demo videos and public links, coherent repo/README architecture diagrams, pinned repositories, portfolio website QA, freelance profile headline and service packages, three proposal templates, handoff checklist, final GitHub evidence audit and launch decision. |

### ClientFlow full showcase requirements

- Secure login and session handling; roles and authorization; tenant isolation enforced at the correct data boundary.
- Organizations, clients, projects, and document access, with useful CRUD workflows and a polished dashboard.
- Responsive, accessible UI with realistic empty/loading/error flows.
- Automated tests for core use cases and denial paths, CI, safe configuration, deployment, and demonstrable product flow.

### RelayOps full showcase requirements

- Authenticated webhook/API entry points, input validation, durable event persistence, idempotency, signed delivery.
- Asynchronous processing, bounded retries/backoff, timeouts, terminal failure, and replay semantics with an honest at-least-once delivery contract.
- API and UI to inspect events, attempts, outcomes, and operational status.
- Integration/failure tests, actionable logs/metrics, deployment, and a reproducible failure/recovery demo.

### DocPilot full showcase requirements

- Secure PDF ingestion, processing-state tracking, extraction, and access control.
- Structured, schema-validated LLM extraction; document-grounded Q&A with source citations.
- Evaluation cases with observed quality and known limitations; prompt-injection and input-handling review.
- Cost/latency measurements, failure handling, UI polish, tests, deployment, and reproducible demo.

## Daily execution lanes

Run each day through the same five gates; multiple bounded Cursor Agent tasks may be queued sequentially or worked in separate branches/worktrees **only if merging and review remain tractable**.

1. **Plan (scope, design, risks):** Small vertically testable tickets with acceptance criteria; identify critical path.
2. **Build (implementation):** Finish user-visible paths end-to-end, not disconnected scaffolding.
3. **Verify:** Tests, lint/typecheck/build, security boundaries, failure cases, and honest coverage gaps.
4. **Ship:** CI, environment documentation, deploy verification, demo evidence, conventional commits.
5. **Publish:** Architecture notes, case study evidence, status update, and links in the portfolio hub.

Keep a short daily progress log. Each day may include many meaningful commits; do not game GitHub contributions with artificial changes.

## Non-negotiable quality gates

- **No feature is 'complete' without observed behavior.** No fabricated CI, test results, benchmark figures, demos, or client claims.
- **Security:** Secrets never committed; authorization and tenant boundaries reviewed; safe uploads and webhook destinations validated; appropriate rate limits and resource bounds.
- **Testing:** Relevant automated tests, plus integration/failure-path checks where they matter most; document any unsupported environments.
- **Operations:** Reproducible setup, migrations, deploy notes, basic instrumentation, recovery/known-limitation notes.
- **Portfolio quality:** README, architecture diagram or description, trade-offs/ADR, real screenshots and video, linked case study.
- **Git evidence:** Commits must exist on GitHub, not merely be proposed in a prompt; meaningful conventional messages.

## Feasibility and delivery risk

This is an **extreme compression target**. Building and validating three systems plus a portfolio website and freelance launch assets in nine days can easily exceed available effort, especially when integration, secrets, deployment, and production-quality UX introduce unknowns. No model, Cursor workflow, or parallel-agent setup guarantees the same depth as ninety development days.

Do **not** silently cut project features to make status look green. If a gate fails:

- Record the exact blocker, reproduction steps, impacted deliverables, and required next action.
- Preserve completed evidence and leave that feature/project **In progress**, **Blocked**, or **Partial**.
- Reprioritize critical-path work and defer noncritical decorative work before compromising correctness or security.
- On Day 09, publish an honest final scorecard separating shipped, tested, deployed, demonstrated, and outstanding work.

## Portfolio readiness gate (Day 09)

- [ ] Three standalone repositories with accurate READMEs, architecture notes, CI, and explicit status labels.
- [ ] Each application has tests, security review, deployment or reproducible demo, and a recorded demo video.
- [ ] Three case studies grounded in real decisions, limitations, and evidence.
- [ ] Personal portfolio website links to the three projects and evidence.
- [ ] Freelance packages, proposal templates, and outreach positioning are ready.
- [ ] Final scorecard separates shipped vs outstanding work; no fabricated claims.

**Suggested migration commit:** `docs: compress full portfolio roadmap into nine days`

**First code commit (after evidence):** `feat(clientflow): establish authenticated tenant foundation`
