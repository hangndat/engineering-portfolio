# ADR-001: Position the portfolio around engineering outcomes

**Status:** Accepted for the initial portfolio plan  
**Date:** 2026-10-11

## Context

The goal is to make senior engineering capability visible to remote clients reviewing GitHub projects. A repository named after a 90-day learning challenge makes the learning timeline more prominent than the value delivered.

## Decision

Use `hangndat` as the GitHub profile README repository and `engineering-portfolio` as the central portfolio index. Keep ClientFlow, RelayOps, and DocPilot as separate showcase repositories when implementation begins.

Lead with:
- Backend and distributed-systems expertise.
- Product delivery across SaaS, automation, and AI features.
- Verifiable engineering evidence rather than generated code volume.
- Small, well-scoped remote freelance engagements.

## Alternatives considered

1. **Single `90-days-ai-engineering` repository:** Easy to track but emphasizes the challenge over client-facing outcomes.
2. **One monorepo for every project:** Simple initial setup but can obscure each project's independent architecture and handover.
3. **Separate showcase repositories with a portfolio hub (chosen):** More navigation overhead, but clearer demos, independent CI, and project-specific case studies.

## Consequences

- Repository descriptions and project statuses must remain current.
- Links in the portfolio hub need maintenance as repos are created.
- Claims of performance, adoption, deployment, or completeness require evidence.
- Daily progress can be maintained without dominating client-facing messaging.

## Revisit when

The first public demo ships, the initial freelance service packages are ready, or clients give feedback that suggests a stronger positioning.
