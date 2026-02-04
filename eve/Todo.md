Project

Colonist.io UX/UI Redesign — Portfolio Case Study

Purpose

Redesign the Colonist.io web experience as a product + UX case study suitable for a professional design portfolio.

This is not a reimplementation of game logic.
Focus is on UX clarity, onboarding, room creation, discovery, and social play flows.

Source of truth:

https://colonist.io

Public pages, flows, and FAQs only

Do not invent features not visible or clearly implied

GLOBAL RULES (VERY IMPORTANT)

Do NOT rely on memory. Always reason from the website link.

Do NOT copy proprietary UI, illustrations, or assets.

Use neutral placeholders where visuals are required.

If something is unclear, add a TODO note, don’t guess.

Every document must be internally consistent.

This is a portfolio case study, so clarity > completeness.

PHASE 0 — Setup & Guardrails

 Confirm scope is UX/UI + product redesign only

 Confirm no backend/game logic redesign

 Confirm outputs are markdown files + prompts only

 Confirm target audience: recruiters + designers

PHASE 1 — Discovery & Understanding (NO DESIGN YET)
1.1 Website Surface Mapping

Review colonist.io and document only what is visible or clearly described.

 Homepage primary actions (Play, Create Room, Join Room, Spectate, etc.)

 Logged-in vs logged-out differences

 Room creation flow (steps, options, defaults)

 Open rooms / lobby behavior

 Ranked vs casual modes (if exposed)

 Friends / invite mechanics

 Spectate mode

 Membership / expansions explanation

 Onboarding or help affordances

 Any friction points or confusing moments

📄 Output:

/case-study/01_discovery/NOTES.md

1.2 Player & Use-Case Identification

From observed flows, identify user types:

 First-time / new player

 Casual drop-in player

 Competitive / ranked player

 Host (creates rooms)

 Friend group player

 Spectator

📄 Output:

Add personas section to NOTES.md

1.3 Problem Framing

 Identify UX pain points (navigation, clarity, overload, hidden settings)

 Identify missed opportunities (onboarding, social loop, clarity)

 Identify what works well and should be preserved

📄 Output:

Discovery summary section in NOTES.md

PHASE 2 — Product Strategy
2.1 PRD Creation

Create a Product Requirements Document that includes:

 Problem statement

 Goals (UX + product)

 Non-goals

 Target users / personas

 Core user journeys

 Functional requirements

 UX requirements

 Constraints

 Success metrics (portfolio-style)

📄 Output:

/case-study/02_strategy/PRD.md

2.2 Metrics & Outcomes (Conceptual)

 Define UX success metrics (time to first game, drop-off points)

 Define qualitative success signals

 Explain how redesign improves these

📄 Output:

/case-study/02_strategy/METRICS.md

PHASE 3 — UX Architecture
3.1 Information Architecture

 Propose simplified navigation structure

 Define top-level sections (Play, Rooms, Ranked, Spectate, Profile, Store)

 Map where onboarding lives

 Map where room creation lives

📄 Output:

/case-study/03_ux/IA.md

3.2 User Flows

Create clear, step-by-step flows for:

 First-time user → first match

 Returning user → quick play

 Host → create room → invite friends → start

 User → browse rooms → join

 User → spectate game

 User → understand membership value

📄 Output:

/case-study/03_ux/USER_FLOWS.md

3.3 Wireframe Planning (NO VISUALS YET)

 List required screens

 Define purpose of each screen

 Identify shared components

📄 Output:

/case-study/03_ux/WIREFRAMES_PLAN.md

PHASE 4 — UI & Design System
4.1 Design Principles

 Define visual and UX principles

 Accessibility goals

 Interaction tone (friendly, calm, confident)

📄 Output:

Included in DESIGN_DOC.md

4.2 Design System

 Color tokens

 Typography scale

 Spacing system

 Radius and elevation

 Component states

📄 Output:

/case-study/04_ui/DESIGN_SYSTEM.md

4.3 Component Inventory

 Navigation

 Buttons

 Cards

 Chips / tags

 Modals

 Wizards / steppers

 Tables / lists

 Empty states

 Notifications

📄 Output:

/case-study/04_ui/COMPONENTS.md

4.4 Content & Microcopy

 CTA language

 Onboarding copy

 Room creation guidance

 Membership explanation copy

 Error and empty-state copy

📄 Output:

/case-study/04_ui/CONTENT.md

4.5 Design Documentation

 Screen list with rationale

 Responsive behavior notes

 Accessibility notes

 Interaction patterns

📄 Output:

/case-study/04_ui/DESIGN_DOC.md

PHASE 5 — Technical Handoff (Proposed)
5.1 Tech Stack (Proposed)

 Frontend stack

 State management

 Realtime communication

 Backend overview (conceptual)

 Analytics & observability

 CI/CD approach

📄 Output:

/case-study/05_handoff/TECH_STACK.md

5.2 Accessibility & QA

 Accessibility checklist

 UX QA checklist

 Responsive QA checklist

📄 Outputs:

/case-study/05_handoff/ACCESSIBILITY.md

/case-study/05_handoff/QA_CHECKLIST.md

PHASE 6 — Figma Execution Prompt
6.1 Figma Prompt Creation

Create a single, clean Figma prompt that instructs Figma AI to:

 Create tokens page

 Create component library

 Create required screens

 Apply design system consistently

 Build a clickable prototype

 Use placeholders only

📄 Output:

/case-study/05_handoff/FIGMA_PROMPT.md

PHASE 7 — Finalization

 Cross-check all docs for consistency

 Ensure no missing references

 Update README.md with case study overview

 Move completed tasks to DONE section

📄 Output:

/README.md

DONE (Move completed tasks here)

(This section must be updated as work progresses)