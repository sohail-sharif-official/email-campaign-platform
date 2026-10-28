# Architectural Decisions — Multi-Tenant Email Campaign Engine (TypeScript / Node.js)

## 1. Explicit Invariant Enforcement at the Domain Boundary
Core domain rules—such as tenant isolation, idempotency, state transitions, and conservation invariants—are enforced directly in the domain layer with zero external framework coupling. This guarantees deterministic verification in CI and prevents infrastructure adapters from bypassing business invariants.

## 2. Deterministic Execution & Testability
All state transitions and error paths are verified through self-contained executable specifications (`node --test`), ensuring fast, reproducible verification on every commit.
