# Product Requirements Document (PRD)
## Colonist.io — UX Redesign Portfolio Case Study

---

## 1. Executive Summary

**Product**: Colonist.io Web Experience Redesign  
**Type**: Portfolio Case Study (UX/UI Focus)  
**Date**: 2026-02-04  
**Author**: Design Portfolio Project

### What is Colonist?
Colonist.io is a free online alternative to Settlers of Catan, a popular strategy board game. It supports millions of users playing single or multiplayer games directly in the browser without downloads or sign-ups.

---

## 2. Problem Statement

Colonist.io is feature-rich—offering ranked play, casual matches, expansions, friends integration, and spectating—but the current UI prioritizes **game functionality over player experience**.

### Key Problems

| User Type | Pain Point |
|-----------|------------|
| **New Players** | High learning curve with no guided onboarding |
| **Casual Players** | Too many options create decision paralysis |
| **Returning Players** | Finding the right mode/room takes too many clicks |
| **Hosts** | Room configuration is repetitive, settings are hidden |
| **Potential Members** | Membership value is unclear without digging |

### Business Impact
- Higher drop-off for first-time users
- Reduced conversion to membership
- Lower friend invite acceptance rates
- Competitive disadvantage in user onboarding

---

## 3. Goals

### 3.1 User Experience Goals

| Goal | Success Looks Like |
|------|-------------------|
| **Faster time-to-first-game** | New users start playing within 60 seconds |
| **Clearer navigation** | Users find desired mode in ≤2 clicks |
| **Effortless room creation** | Smart defaults reduce required decisions |
| **Better social loop** | Friend invites complete in one action |
| **Transparent monetization** | Membership benefits clear before purchase |

### 3.2 Business Goals (Conceptual)

| Goal | Metric |
|------|--------|
| **Increase retention** | More first-time users return for second session |
| **Improve conversion** | Higher membership signup rate |
| **Grow virality** | More successful friend invitations |

---

## 4. Non-Goals

This redesign **does not** include:

- ❌ Rewriting game logic, dice rules, or core mechanics
- ❌ Rebranding company identity or logo
- ❌ Adding new expansions or game modes
- ❌ Backend architecture changes
- ❌ Native mobile app development
- ❌ In-game board redesign (only light HUD pass)

---

## 5. Target Users & Personas

### 5.1 The Learner (New Player)
> *"I want to try this game but I don't know how to play"*

- **Context**: First visit, may not know Catan rules
- **Goals**: Learn basics, play first game successfully
- **Frustrations**: Information overload, no tutorial
- **Needs**: Guided onboarding, practice mode, contextual help

### 5.2 The Drop-In (Casual Player)
> *"I have 20 minutes and want a quick game"*

- **Context**: Knows the game, plays occasionally
- **Goals**: Start playing fast, minimal setup
- **Frustrations**: Too many options, decision fatigue
- **Needs**: One-click quick play, smart defaults

### 5.3 The Grinder (Competitive Player)
> *"I want to climb the ranks and improve my rating"*

- **Context**: Plays regularly, tracks stats
- **Goals**: Improve ranking, understand progression
- **Frustrations**: Rating system confusion, season resets
- **Needs**: Clear rank display, queue confidence, rematch flow

### 5.4 The Host (Organizer)
> *"I set up games for my friend group every week"*

- **Context**: Creates rooms, manages invites
- **Goals**: Quick room setup with preferred settings
- **Frustrations**: Repetitive configuration, expansion access unclear
- **Needs**: Saved presets, clear membership benefits

### 5.5 The Friend Group Player
> *"I play with the same 3 people regularly"*

- **Context**: Social player, plays with friends
- **Goals**: Easy coordination, quick joins
- **Frustrations**: Finding each other, invitation steps
- **Needs**: Friend presence, quick invite, rematch

### 5.6 The Spectator
> *"I want to watch skilled players and learn"*

- **Context**: Interested in watching, may be learning
- **Goals**: Find entertaining/educational games
- **Frustrations**: No curation, hard to discover games
- **Needs**: Browse/filter, featured matches

---

## 6. Core User Journeys

### Journey 1: First-Time User → First Match

```
Land on Homepage
    ↓
See "New to Catan?" prompt
    ↓
Choose: Learn Basics / Quick Play / Play with Friends
    ↓
[If Learn] → Interactive tutorial → Practice vs Bot → First real match
[If Quick Play] → Auto-match with similar skill → Play
[If Friends] → Share invite link → Wait for friends → Play
```

### Journey 2: Returning User → Quick Play

```
Land on Homepage (logged in)
    ↓
Click "Quick Play"
    ↓
Matched with players → Game starts
```

### Journey 3: Host → Create Room → Invite → Start

```
Click "Create Room"
    ↓
Select Game Mode (Base / Expansion)
    ↓
Select Map
    ↓
Configure Rules (or use defaults)
    ↓
[Optional] Advanced Settings
    ↓
Room Created → Invite Friends via link/button
    ↓
Wait for players → Start Game
```

### Journey 4: User → Browse Rooms → Join

```
Navigate to Rooms
    ↓
Apply Filters (mode, map, players, skill)
    ↓
View available rooms
    ↓
Click room to preview
    ↓
Join Room → Wait for start
```

### Journey 5: User → Spectate Game

```
Navigate to Spectate
    ↓
Browse ongoing games (filter by mode/skill)
    ↓
Select game
    ↓
Watch in spectate mode
```

### Journey 6: User → Understand Membership

```
Navigate to Store → Membership
    ↓
See tier comparison (features, price)
    ↓
Understand "Only host needs membership" benefit
    ↓
[Optional] Start trial or purchase
```

---

## 7. Functional Requirements

### 7.1 Navigation & Information Architecture

| Requirement | Priority |
|-------------|----------|
| Clear top-level navigation: Play, Rooms, Ranked, Spectate, Store, Profile | P0 |
| Consistent navigation across all pages | P0 |
| Mobile-responsive navigation (hamburger + bottom tabs) | P0 |
| Quick access to notifications and friends | P1 |

### 7.2 Onboarding

| Requirement | Priority |
|-------------|----------|
| "New to Catan?" entry point on homepage | P0 |
| 3-minute interactive rules primer | P0 |
| Practice vs Bots mode easily accessible | P0 |
| First-match tooltip coaching (optional) | P1 |
| Progress indicator for new players | P2 |

### 7.3 Room Creation

| Requirement | Priority |
|-------------|----------|
| Step-by-step wizard with progress indicator | P0 |
| Smart defaults for all settings | P0 |
| Game mode selection with visual previews | P0 |
| Map selection with thumbnails | P0 |
| Expansion picker with membership status | P0 |
| Advanced settings in collapsible section | P1 |
| Saved room presets for hosts | P2 |

### 7.4 Room Browsing & Joining

| Requirement | Priority |
|-------------|----------|
| List view of available rooms | P0 |
| Filter by: mode, map, players, skill level | P0 |
| Room card with key info (mode, players, settings) | P0 |
| One-click join | P0 |
| Room preview before joining | P1 |

### 7.5 Social Features

| Requirement | Priority |
|-------------|----------|
| Friends list with online status | P0 |
| One-click invite link copy | P0 |
| Direct invite to friend modal | P0 |
| "Friends in game" indicator | P1 |
| Recent players list | P2 |

### 7.6 Ranked Play

| Requirement | Priority |
|-------------|----------|
| Clear rating/rank display | P0 |
| Queue button with estimated wait time | P0 |
| Season progress indicator | P0 |
| Rating system explainer accessible | P1 |
| Post-match rating change display | P1 |

### 7.7 Store & Membership

| Requirement | Priority |
|-------------|----------|
| Clear membership tier comparison | P0 |
| Benefits list per tier | P0 |
| "Only host needs membership" prominently displayed | P0 |
| Expansion catalog with membership requirements | P0 |
| Gift membership option | P1 |

---

## 8. UX Requirements

### 8.1 Design Principles

| Principle | Application |
|-----------|-------------|
| **Start-playing-first** | Always keep a "Play" action visible and accessible |
| **Progressive disclosure** | Hide advanced options until user needs them |
| **Teach in context** | Provide help where users need it, not in separate docs |
| **Calm confidence** | Use friendly, guiding language, not pushy or urgent |

### 8.2 Interaction Patterns

| Pattern | Usage |
|---------|-------|
| **Wizards** | Multi-step flows (room creation, onboarding) |
| **Modals** | Quick actions (invite friends, confirm choices) |
| **Drawers** | Settings, filters, additional options |
| **Toast notifications** | Confirmations, errors, updates |
| **Tooltips** | Contextual help and explanations |

### 8.3 Content & Microcopy

| Context | Tone |
|---------|------|
| CTAs | Clear, action-oriented ("Start Game", "Join Room") |
| Guidance | Friendly coaching ("New to Catan? Start here") |
| Errors | Helpful and specific ("Room is full. Browse other rooms →") |
| Empty states | Encouraging ("No friends online. Invite someone to play!") |

---

## 9. Constraints

### Technical Constraints
- Must work in modern browsers (Chrome, Firefox, Safari, Edge)
- Must support WebGL for game rendering
- Must handle WebSocket connections for real-time play
- Must be responsive for tablet and mobile viewports

### Business Constraints
- Cannot change core game mechanics
- Must maintain existing account system
- Must preserve existing ranked/competitive structure

### Design Constraints
- Cannot use Colonist proprietary assets (use placeholders)
- Must be accessibility-compliant (WCAG 2.1 AA)
- Must support light and dark mode preferences

---

## 10. Success Metrics

### 10.1 Quantitative Metrics (Conceptual)

| Metric | Target Direction |
|--------|-----------------|
| Time to first game | ↓ Reduce |
| Room creation drop-off | ↓ Reduce |
| Successful room joins | ↑ Increase |
| Friend invite acceptance rate | ↑ Increase |
| Membership page → purchase rate | ↑ Increase |
| New user return rate (D1, D7) | ↑ Increase |

### 10.2 Qualitative Metrics

| Signal | Measurement |
|--------|-------------|
| Navigation clarity | User testing: can find mode in ≤2 clicks |
| Onboarding effectiveness | New users complete first game without confusion |
| Value perception | Users understand membership before purchasing |

---

## 11. Appendix

### A. Reference Links
- [Colonist.io](https://colonist.io)
- [FAQ](https://colonist.io/faq)
- [Store](https://colonist.io/store)
- [About](https://colonist.io/about)

### B. Related Documents
- [Discovery Notes](../01_discovery/NOTES.md)
- [Metrics Definition](./METRICS.md)
- [Information Architecture](../03_ux/IA.md)
- [Design System](../04_ui/DESIGN_SYSTEM.md)

---

*Document Status: Complete*  
*Version: 1.0*
