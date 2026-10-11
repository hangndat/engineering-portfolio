# ClientFlow — SaaS Client Portal

**Status:** Planned
**Primary stack:** Next.js, TypeScript, Supabase, Tailwind CSS
**Portfolio role:** Full-stack SaaS delivery, product UX, and access-control discipline

**Sprint window:** Days 02–03 of the [9-day full-scope roadmap](../roadmap/9-day-full-scope.md) (foundation on Day 02; complete product and release on Day 03)

## Problem

Small service businesses often scatter client communication, milestones, and files across multiple tools. ClientFlow delivers a focused portal for sharing progress and documents with the correct clients.

## Full showcase requirements

1. Secure login and session handling; roles and authorization; tenant isolation enforced at the correct data boundary.
2. Organizations, membership roles, clients, projects, and document access with useful CRUD workflows.
3. Polished responsive dashboard with realistic empty, loading, and error states; accessible navigation.
4. Automated tests for core use cases and cross-tenant denial paths; CI; safe configuration; deployment.
5. Demo recording and case study with honest limitations.

## Engineering risks and decisions

- Enforce tenant isolation at the database boundary where practical, not only in UI filters.
- Prefer clear authorization checks over implicit trust in client-provided identifiers.
- Keep the UI usable on mobile and with keyboard navigation.
- Day 02 must establish architecture, threat model, CI, auth, protected routes, and the first authenticated tenant-safe slice before Day 03 product completion.

## Completion evidence required

- Reproducible local setup and documented configuration.
- Tests covering access boundaries and core workflows.
- Passing checks and deployment verification.
- Screenshots or demo video.
- Case study with implementation decisions and limitations.

**Implementation repository:** To be linked when created.
**Live demo:** Not available yet.
**Case study:** Pending implementation evidence.
